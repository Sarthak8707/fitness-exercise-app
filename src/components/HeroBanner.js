import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: {lg: '100px', xs: '70px'}, ml: {sm: '50px'}}} postion="relative" p="20px" >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile <br />
        and Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb= "30px">
        Check out the most effective exercises tailored for you
      </Typography>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
      <Typography variant="h5" fontFamily="revert" mt="30px">
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="HeroBannerImage" className='hero-banner-img'></img>
      
    </Box>
  )
}

export default HeroBanner