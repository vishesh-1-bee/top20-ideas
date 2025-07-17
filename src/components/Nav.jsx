import React from 'react'
import logo from "../assets/react.svg"
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className='shadow-lg rounded-lg p-2 flex items-center justify-between flex-wrap mt-9 border border-neutral-200' data-theme="lofi">
      <Link to="/new" className='btn btn-soft btn-primary btn-sm md:btn-md'>+ New Ideas</Link>
      <h1 className='p-4 text-sm md:text-lg font-semibold'> Top 20 Ideas</h1>
      <div className='flex tracking-tight items-center'>
        <img src={logo} alt=""  className='size-6 mr-2 md:size-8'/>
        <h1 className='hidden sm:flex text-xl font-semibold'>By vishesh</h1>
      </div>
      
    </div>
  )
}

export default Nav
