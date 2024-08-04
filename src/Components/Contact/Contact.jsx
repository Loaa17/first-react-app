import React from 'react'
import { useFormik } from "formik";


export default function Contact() {

let formik = useFormik({

initialValues:{
name:"",
age:"",
email:"",
password:""

}



})



  return (
<>

<div className="container py-40 w-screen px-36 mx-auto ml-44">

<div className="header pb-14 relative text-slate-700 text-center">
<h1 className="text-4xl font-bold pb-4">CONTACT SECTION</h1>

<span className="after:content-[''] after:bg-slate-700 after:w-20 after:h-1 after:absolute after:bottom-16 after:ml-2
 before:content-[''] before:bg-slate-700 before:w-20 before:h-1 before:absolute before:bottom-16 before:translate-x-20 before:left-80 before:mr-10"><i className='fa-solid fa-star py-2'></i></span>

</div>

<form className="w-3/4 mx-auto">
  <div className="relative z-0 w-full mb-5 group pt-6 focus:bg-teal-300">
      <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0" placeholder="useName" required />
  </div>

  <div className="relative z-0 w-full mb-5 group pt-6">
      <input type="number" name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 " placeholder="userAge" min="10" max="50" required />
  </div>

  <div className="relative z-0 w-full mb-5 group pt-6">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0" placeholder="userEmail" required />
  </div>

  <div className="relative z-0 w-full mb-5 group pt-6">
      <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0" placeholder="userPassword" required/>
  </div>


  <button type="submit" className="text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 mt-2">Send Message</button>
  </form>
</div>
  
</>
  )
}
