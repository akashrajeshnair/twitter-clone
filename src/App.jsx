import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp'
import "@fontsource/inter"

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
