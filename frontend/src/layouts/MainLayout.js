import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import AuthPage from '../pages/AuthPage'
import { withAuthenticationRequired } from '@auth0/auth0-react'

const ProtectedDashboard = withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <div>Loading...</div>,
});

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  )
}

export default MainLayout