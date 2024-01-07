"use client"
import React, { useState } from 'react';
import logo from '../../../public/logo/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";

const NavbarHeader = () => {
  const toggleMenu = ()=>{
document.getElementById('menu').classList.toggle('toggle')
  }



  return (
    <>   
 <nav>
    <div className='logo'>
        <Image src={logo} alt='interior-logo' className='img-fluid'/>
        {/* <h5>Interio</h5> */}
    </div>

    <ul className='menu-items' id='menu'>
        <Link href=""><li>Home</li></Link>
        <Link href=""><li>About us</li></Link>
        <Link href=""><li>Service</li></Link>
        <Link href=""><li> Contact us</li></Link>
    </ul>

    <CiMenuFries className='menu-icons' onClick={toggleMenu}/>
 </nav>
    </>
  )
}

export default NavbarHeader;
