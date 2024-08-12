import { Routes, Route, Navigate } from 'react-router-dom'

import Register from './views/Register'
import Home from './views/Home'
import Login from './views/Login'

import Calendar from '../src/views/components/calendar/Calendar'

import logic from './logic'

import './index.css'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RenderHome />} />
        <Route path="/login" element={<RenderLogin />} />
        <Route path="/register" element={<RenderRegister />} />

        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/calendar' element={<Calendar />} />
      </Routes>
    </>
  )
}

export default App

const RenderHome = () => (logic.isUserLoggedIn() ? <Home /> : <Navigate to="/login" />)
const RenderLogin = () => (logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login />)
const RenderRegister = () => (logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register />)