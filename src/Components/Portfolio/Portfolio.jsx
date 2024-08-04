import React from 'react'
import home1 from '../../assets/home-img1.png'
import home2 from '../../assets/home-img2.png'
import home3 from '../../assets/home-img3.png'

export default function Portfolio() {
  return (
    <>
    


<div className="container pt-40 text-center mx-auto ml-32">

<div className="header text-slate-800 relative">
<h1 className='text-4xl font-bold pb-3'>PORTFOLIO COMPONENT</h1> 

<span className="before:content-[''] before:absolute before:w-20 before:h-1 before:bg-slate-700 before:-translate-x-24 before:bottom-3
after:content-[''] after:absolute after:w-20 after:h-1 after:bg-slate-700 after:bottom-3 after:ml-4">
  <i className='fa-solid fa-star py-2'></i></span>
</div>


<div className="container grid gap-4 grid-cols-3 py-10 mx-auto ">

<div className="card rounded-md relative overflow-hidden hover:bg-teal-500 hover:opacity-50 hover:duration-300">
  <img src={home1} className='w-full rounded-md overflow-hidden'alt=""/>

   <span className='plus absolute top-full left-0 right-0 bottom-0  text-center text-7xl text-slate-50'><i className="fa-solid fa-plus"></i></span>
</div>
<div className="card rounded-md relative overflow-hidden hover:bg-teal-500 hover:opacity-50 hover:duration-300">
  <img src={home2} className='w-full rounded-md overflow-hidden'alt=""/>

   <span className='plus absolute top-full left-0 right-0 bottom-0 text-center text-7xl text-slate-50'><i className="fa-solid fa-plus"></i></span>
</div>
<div className="card w-full rounded-md relative overflow-hidden hover:bg-teal-500 hover:opacity-50 hover:duration-300">
  <img src={home3} className='w-full rounded-md overflow-hidden'alt=""/>

   <span className='plus absolute top-full left-0 right-0 bottom-0 text-center text-7xl text-slate-50'><i className="fa-solid fa-plus"></i></span>
</div>
<div className="card w-full rounded-md relative overflow-hidden hover:bg-teal-500 hover:opacity-50 hover:duration-300">
  <img src={home1} className='w-full rounded-md overflow-hidden'alt=""/>

   <span className='plus absolute top-full left-0 right-0 bottom-0 text-center text-7xl text-slate-50'><i className="fa-solid fa-plus"></i></span>
</div>
<div className="card w-full rounded-md relative overflow-hidden hover:bg-teal-500 hover:opacity-50 hover:duration-300">
  <img src={home2} className='w-full rounded-md overflow-hidden'alt=""/>

   <span className='plus absolute top-full left-0 right-0 bottom-0 text-center text-7xl text-slate-50'><i className="fa-solid fa-plus"></i></span>
</div>
<div className="card w-full rounded-md relative overflow-hidden hover:bg-teal-500 hover:opacity-50 hover:duration-300">
  <img src={home3} className='w-full rounded-md overflow-hidden'alt=""/>

   <span className='plus absolute top-full left-0 right-0 bottom-0 text-center text-7xl text-slate-50'><i className="fa-solid fa-plus"></i></span>
</div>



</div>

  </div>    
    
    
    </>
  )
}
