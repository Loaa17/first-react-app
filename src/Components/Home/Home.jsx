import React from 'react'
import person from "../../assets/home.svg";
export default function Home() {
  return (
   <>

  <div className="bg-teal-500 h-screen w-screen pt-44">

<div className='flex justify-center align-middle'>
<img src={person} className='w-1/5' alt="frontend developer" />
</div>  

<div className="header text-center flex flex-col justify-center align-middle text-slate-50">

  <div className="header text-center relative pt-12">
 <h1 className="font-bold text-4xl pb-2">START FRAMEWORK</h1>
 <span className="after:content-[''] after:bg-slate-50 after:w-20 after:h-1 after:absolute after:bottom-2 after:ml-4
 before:content-[''] before:bg-slate-50 before:w-20 before:h-1 before:absolute before:bottom-2 before:-translate-x-96 before:right-96 before:mr-5">
  <i className='fa-solid fa-star py-2'></i></span>

 </div>

 <span className="content  flex justify-center align-middle pt-2">
  Graphic Artist - Web Designer - Illustrator
  </span>


  </div>

  </div>

  
   
   
   
  
   </>


    
  )
}
