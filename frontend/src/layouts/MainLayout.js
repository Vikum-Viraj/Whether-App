import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import AuthPage from '../pages/AuthPage'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  )
}

export default MainLayout