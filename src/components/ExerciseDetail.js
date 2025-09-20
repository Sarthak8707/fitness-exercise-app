import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseVideos from './ExerciseVideos';
import Detail from './Detail';
import { Box } from '@mui/material';

const ExerciseDetail = () => {

    const { id } = useParams();
    const [exerciseDetail, setExerciseDetail] = useState({});

    useEffect(() => {
        const fetchExerciseDetailData = async () => {
            const exerciseDetailData = await fetchData(`exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);
        }
        fetchExerciseDetailData();
    }, [id])

    console.log(exerciseDetail);

  return (
    <Box>
    <Detail exerciseDetail = {exerciseDetail}/>
    <ExerciseVideos />
    </Box>
    
  )
}

export default ExerciseDetail