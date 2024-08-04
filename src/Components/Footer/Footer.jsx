import React from 'react'

export default function Footer() {
  return (
    <>
<div className='text-center relative w-screen'>


<div className="Mainfooter bg-slate-700 flex align-middle gap-10 justify-around py-20 px-24">
     
       
     <div className='text-slate-50 card'>
       <h2 className='font-semibold pb-2 text-3xl'>LOCATION</h2>
       <p className='pb-2'>2215 John Daniel Drive</p>
       <p>Clark, MO 65243</p>
     </div>
     
              
          
     <div className='text-slate-50 card'>
       <h2 className='font-semibold pb-2 text-3xl'>AROUND THE WEB</h2>
       <span className='px-1'><i className="fa-brands fa-facebook border rounded-full p-3"></i></span>
       <span className='px-1'><i className='fa-brands fa-twitter border rounded-full p-3'></i></span>
       <span className='px-1'><i className='fa-brands fa-linkedin border rounded-full p-3'></i></span>
       <span className='px-1'><i className="fa-solid fa-globe border rounded-full p-3"></i></span>
      
     </div>
     
              
            
     <div className='text-slate-50 card'>
       <h2 className='font-semibold pb-2 text-3xl'>ABOUT FREELANCER</h2>
       <p>Freelance is a free to use, licensed Bootstrap theme created <br/> by Route</p>
      
     </div>
     
              
           
         </div>
     
     
     <div className="footer bg-slate-900">
     <p className="text-slate-50 py-7">Copyright © Your Website 2021</p>
     </div>
</div>
    </>
  )
}
