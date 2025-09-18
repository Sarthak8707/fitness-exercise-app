import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'


const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sx: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}}
    px="none" 
    >
        <Link to= "/">
        <img src={Logo} alt="logo" style={{width: '48px', height: '48px', margin: '0 20px'}} />

        </Link>
        <Stack 
        direction = "row"
        fontSize="24px"
        gap="40px"
        alignItems="flex-end">
            <Link to = "/">
            Home
            </Link>
            <a href="#exercises" style={{textDecoration: 'none', color: '#3a1212', borderBottom: '3px solid rgba(241, 241, 236, 0.4)'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar