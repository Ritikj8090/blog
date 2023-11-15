"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import {NavLink } from '../constant/constant'

const NavBar = () => {
  const [active, setActive] = useState('Home')
    const fun = () => {
        const element = document.body.classList.toggle("dark");
    }
    console.log(active)
    
  return (
    
      <section className='flex justify-between p-3 fixed w-full items-center'>
      <div className='text-2xl cursor-pointer' onClick={window.scrollTo({top:0, behavior: 'smooth'})}>Blog</div>
      <div className='gap-3 flex'>
        <button onClick={fun}>mode</button>
        {NavLink.map((link) => {
          return (
            <Link href={link.link} key={link.name}> {link.name}</Link>
          )
        })}

      </div>
      </section>
      
  )
}

export default NavBar