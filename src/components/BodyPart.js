import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    classname="bodyPart-card"
    onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behaviour: 'smooth'})
    }}
    sx={{
      borderTop: bodyPart === item ? '4px solid #ff2625' : '',
      backgroundColor: '#fff',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '280px',
      cursor: 'pointer', 
      gap: '47px'

    }}     
    
    >
        <img src={Icon} alt="dumbbell" style={{width: '40px', height: '40px'}} /> 
        <Typography textTransform="capitalize" fontWeight="bold" fontSize="24px" color="#3A1212">{item}</Typography>

    </Stack>
  )
}

export default BodyPart