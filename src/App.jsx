import { useState } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
