import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    
   

<nav className="bg-slate-700 fixed top-0 right-0 left-0 z-10 py-4">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to=""  className="flex items-center space-x-3">
    <span className="self-center text-4xl font-bold whitespace-nowrap text-slate-50">SART FRAMEWORK</span>
    </Link>


    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-lg">
        <li>
          <Link to="about" className="active:bg-teal-500 block py-2 px-3 text-slate-50 font-bold  focus:rounded-lg focus:bg-teal-500 ">ABOUT</Link>
        </li>
        <li>
          <Link to="portfolio" className="block py-2 px-3 text-slate-50 font-bold focus:rounded-lg focus:bg-teal-500 ">PORTFOLIO</Link>
        </li>
        <li>
          <Link to="contact" className="block py-2 px-3 text-slate-50 font-bold focus:rounded-lg focus:bg-teal-500">CONTACT</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    
    
    </>
  )
}
