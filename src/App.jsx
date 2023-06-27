// import logo from './logo.svg';
// import { Routes, Route } from 'react-router-dom';
import './App.css';
// import About from './Components/About';
import { Alert } from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'


export default function App() {
  const [mode, setMode] = useState('dark')
  const [alert, setAlert] = useState('null')

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert('null')
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = 'red'
      showAlert('dark mode enable', "Success")
      document.title = 'dark mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode enable', "Success")
      document.title = 'light mode'
    }
  }
  return (
    <>
      <Navbar title="textUtiles" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text analysis" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      {/* <Routes>
        <Route path='/' element={<TextForm heading="Enter the text analysis" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
        <Route path='/about' element={<About />} />
        {/* <About /> */}
      {/* </Routes> */}
    </>
  )
}

