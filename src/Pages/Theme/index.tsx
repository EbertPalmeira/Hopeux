import { Box } from '@mui/material'
import React from 'react'

const Theme = ({children}) => {
  return (
    <Box sx={{backgroundColor:'black',margin:0}}>
        {children}
    </Box>
  )
}

export default Theme