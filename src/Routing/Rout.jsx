import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import New from '../components/New';
const Rout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/new' element={<New/>}></Route>
      </Routes>
    </div>
  )
}

export default Rout
