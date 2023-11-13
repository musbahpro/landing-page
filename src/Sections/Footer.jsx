import React from 'react'
import SochilIcons from '../components/SochilIcons'
import Line from "../images/Line 4.png"
export default function Footer() {
  return (
   <div className='w-full bg-wahit pt-20' >
     <footer className='flex justify-evenly mb-20 flex-wrap '>
      <div>
        <h1 className='Logo'><span className=' text-efrct'>Holo</span>Gaze</h1>
        <SochilIcons />
        <span className='mt-5'>(+994) 199-28-786</span>
      </div>
      <ul className=' space-y-5 font-thin text-base'>
        <li className='font-bold text-lg'>Menu</li>
        <li>Home</li>
        <li>Catalog</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
      <ul className=' space-y-5 font-thin text-base'>
        <li className='font-bold text-lg'>Menu</li>
        <li>Login</li>
        <li>Sign Up</li>
        <li>Privacy</li>
        <li>Products</li>
      </ul>
      <ul className=' space-y-5 font-thin text-base lg:mt-0 mt-10' >
        <h1>Subscribe Our News Letter</h1>
        <p>Sure, please provide your email address to subscribe to newsletter</p>
        <div ><input className=' bg-wahit text-text px-5 py-2 outline-none w-64 '  placeholder='Enter  Your  Email'/> 
        <button className=' bg-efrct px-4 text-primer font-bold py-2'> Subscribe</button></div>
      </ul>
    </footer>
    <img src={Line} alt='as' className='w-full m-auto'/>
    <p className='  text-text text-center w-full bottom-2 text-sm py-6 '>© 2023 Your Company Name. All rights reserved.</p>
   </div>
  )
}
