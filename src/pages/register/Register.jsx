import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [er, setEr] = useState(false);
  const [ue, setUe] = useState(false);

  const navigate = useNavigate();

  function handleNameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username === "" || password === "") {
      console.log(e)
      setEr(true)
      return
    } else {

      axios.post("http://localhost:3001/register", {
        "username": username,
        "email": email,
        "password": password
      }).then((re) => {
        console.log(re.data)
        if(re.data === "UC"){
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          navigate('/');
        }
        if(re.data === "UAE"){
          setUe(true)
          return
        } 
      }).catch(err => console.log(err))
    }
  }

  function loginRedirect(){
    navigate('/login');
  }

  return (
    <>
     <div className="homepage">
        <div className="home-container">
          <div className="home-header">
            <h2>Register</h2>
            <button className="glass-buttons">Login</button>
          </div>
          <div className="tasks">
            <form onSubmit={handleSubmit}>
              <input type="text" name="username" placeholder="Username" onChange={handleNameChange}/>
              <input type="text" name="email" placeholder="Email" onChange={handleEmailChange}/>
              <input type="password" name="password" placeholder='Password' onChange={handlePasswordChange}/>
              {er && (
                <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                  Please make sure you've entered correct details!
                </p>
              )}
              {ue && (
                <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                  User already exists!
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
