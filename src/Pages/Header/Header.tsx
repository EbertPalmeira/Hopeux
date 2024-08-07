import  {Box, Link}  from '@mui/material'
import React from 'react'
import Theme from '../Theme'


const Header = () => {
  return (
    <Theme>
    <Box sx={{
        
        display:'flex',
        justifyContent:'center',
        gap:'50px',
        fontFamily:'poppins'
        }}>
        <Box sx={{color:'red'}}>
           <Link sx={{
            textDecoration:'none',
            }}>HOPEUX</Link> 
        </Box>
        <Box sx={{
            display:"flex",
            gap:"20px",
            }}>
            <Link sx={{
                textDecoration:'none',
                cursor:'pointer'
            }}>Home</Link>

            <Link sx={{
                textDecoration:'none',
                cursor:'pointer'}}>About</Link>

            <Link sx={{
                textDecoration:'none',
                cursor:'pointer'}}>Serviços</Link>

            <Link sx={{
                textDecoration:'none',
                cursor:'pointer'}}>Pages</Link>
        
        </Box>
       
        
    </Box>
    </Theme>
  )
}

export default Header