import React from 'react'
import { Routes,Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Login from './components/Login'
import Chat from './components/Chat'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
