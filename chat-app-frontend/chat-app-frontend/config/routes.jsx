import React from 'react'
import { Route, Routes } from 'react-router'
import App from '../src/App'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<h1> THis is chat page</h1>} />
        <Route path="/about" element={<h1> THis is about page</h1>} />
      </Routes>
    </div>
  )
}

export default AppRoutes
