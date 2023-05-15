import React, { useState } from 'react';
import "./login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [er, setEr] = useState(false);

  const navigate = useNavigate();

  function handleNameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username === "" || password === "") {
      console.log(e)
      setEr(true)
      return
    } else {

      axios.post("http://localhost:3001/login", {
        "username": username,
        "password": password
      }).then((re) => {
        console.log(re.data)
        if(re.data === 'NUF'){
          setEr(true)
        }
        if(re.data === 'tq'){
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          navigate('/');
        }
      // })
      }).catch(err => console.log(err))
    }
  }

  function registerRedirect(){
    navigate('/register')
  }

  return (
    <>
      <div className="homepage">
        <div className="home-container">
          <div className="home-header">
            <h2>Login</h2>
            <button className="glass-buttons" onClick={registerRedirect}>Register</button>
          </div>
          <div className="tasks">
            <form onSubmit={handleSubmit}>
              <input type="text" name="username" placeholder="Username or email" onChange={handleNameChange} />
              <input type="password" name="password" placeholder='Password' onChange={handlePasswordChange} />
              {er && (
                <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                  Please make sure you've entered correct details!
                </p>
              )}
              <button className="glass-buttons">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
