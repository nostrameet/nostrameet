import './App.css'
import React from 'react'
import MeetingsPage from 'pages/MeetingsPage/MeetingsPage.js'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home/Home.js'
import ProfilePage from 'pages/ProfilePage/ProfilePage.js'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='meetings' element={<MeetingsPage />} />
      </Routes>
    </div>
  )
}

export default App
