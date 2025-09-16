import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Project from './pages/Project'


const App = () => {
  return (
    <div className='text-white'>
      <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/agency' element={<Agency /> } />
      <Route path='/project' element={<Project /> } />
      </Routes>

    </div>
  )
}

export default App