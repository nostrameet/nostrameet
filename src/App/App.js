import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home/Home.js'
import ProfilePage from 'pages/ProfilePage/ProfilePage.js'
import { Panel } from 'components/Panel/Panel'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='publish' element={<Panel id='publish' />} />
      </Routes>
    </div>
  )
}

export default App
