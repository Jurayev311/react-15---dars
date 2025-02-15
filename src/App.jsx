import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Hero from './components/hero/hero'
import Admin from '../src/pages/admin/Admin'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/about' element={<Hero/>}/>
        </Route>
          <Route path='/admin' element={<Admin />}/>
      </Routes>
    </>
  )
}

export default App
