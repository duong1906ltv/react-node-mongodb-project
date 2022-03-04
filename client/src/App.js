import './App.css';
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login'

const App = () => (
  <Router>
    <Fragment>
      <Navbar/>
        <Routes>
          <Route path='/'  exact element={<Landing/>} />
          <Route path='/register' exact element={<Register/>} />
          <Route path='/login' exact element={<Login/>} />
        </Routes>
    </Fragment>
  </Router>
)
export default App;
