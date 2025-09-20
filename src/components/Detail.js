import { Box, Typography, Stack, Paper } from '@mui/material'
import React from 'react'

const Detail = ({ exerciseDetail }) => {
  return (
    <Box justifyContent="center" mt="50px" px={{ xs: 2, md: 6 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textTransform="capitalize"
        gutterBottom
        sx={{ color: '#800000' }} 
      >
        {exerciseDetail.name}
      </Typography>

      <Typography variant="h6" color="text.secondary" paragraph>
        {exerciseDetail.description}
      </Typography>

      <Typography variant="h5" mt={3} textTransform="capitalize">
        <strong>Difficulty:</strong> {exerciseDetail.difficulty}
      </Typography>

      <Typography
        variant="h4"
        mt={5}
        mb={2}
        sx={{ color: '#800000' }} 
      >
        How To Do This ?
      </Typography>
      <Stack spacing={2}>
        {exerciseDetail.instructions?.map((item, index) => (
          <Paper key={index} elevation={2} sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="h6">
              {index + 1}. {item}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  )
}

export default Detail
