import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

import Detail from '../components/Detail';
import { Box } from '@mui/material';
import ExerciseVideos from '../components/ExerciseVideos';

const ExerciseDetail = () => {

    const { id } = useParams();
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [videoDetail, setVideoDetail] =useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);
            
            const exerciseVideoData = await fetchData(`https://youtube138.p.rapidapi.com/search/?q=${exerciseDetailData.name}&hl=en&gl=US`, youtubeOptions);
            setVideoDetail(exerciseVideoData);
        }
        fetchExerciseData();
    }, [id])

   // console.log(exerciseDetail);

  return (
    <Box>
    <Detail exerciseDetail = {exerciseDetail}/>
    <ExerciseVideos videoDetail = {videoDetail}/>
    </Box>
    
  )
}

export default ExerciseDetail