import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element = {<Login/>}></Route>
          <Route exact path="/home" element = {<Home/>}></Route>
          <Route exact path="/signup" element = {<SignUp/>}></Route>
        </Routes>
      </Router>
  )
}

export default App
