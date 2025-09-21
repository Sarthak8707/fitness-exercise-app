import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const ExerciseVideos = ({ videoDetail }) => {
  const demoVideos = videoDetail.contents?.filter(item => item.type === 'video') || [];
  const videosToShow = demoVideos.slice(0, 3);

console.log(videosToShow[0]);

  return (
    <Box mt="60px">
      <Typography variant="h4" sx={{ color: '#800000', mb: 3 }}>
        Watch these videos for reference
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap="20px" mt="50px">
        {videosToShow.map((item, index) => (
          <a key={index}
           className='exercise-video'
           href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
           target="_blank"
           rel="noreferrer"
           >
            <img
            key={index}
            src={item?.video?.thumbnails[0]?.url}
            alt={item?.video?.title}
            style={{ width: '350px', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
          />
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
