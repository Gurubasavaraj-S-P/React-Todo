import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Register from './pages/register/Register';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/newtask' element={<New/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
