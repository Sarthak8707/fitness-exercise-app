import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{ 
        mt: 6, 
        py: 3, 
        textAlign: "center", 
        bgcolor: "rgba(128,0,0,0.05)", 
        borderTop: "1px solid #ddd" 
      }}
    >
      <Typography variant="h6" fontWeight="bold" color="darkred">
        GrindOn
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Created for Fitness Enthusiasts in 2025
      </Typography>
    </Box>
  )
}

export default Footer
