import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import Signup from './Signup';
import Nav from './nav';
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <div>
      <Nav/>
      <Routes>

        <Route path='/' element={<App/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        {/* <Route path='' element={}></Route>
        <Route path='' element={}></Route> */}
       


      </Routes>
</div>
</Router>


);