import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarHeader from './Layouts/Navbar-Header'
import Banner from './Components/Banner'

const page = () => {
  
  return (
    <>
 <NavbarHeader/>
<Banner/>

    </>
  )
}

export default page

export const metadata = {
  title: 'Interio | Home',
  description: '',
}