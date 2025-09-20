import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (e, val) => {
    setCurrentPage(val);
    window.scrollTo({top: 1100, behaviour: 'smooth'})
  }

  const exercisesPerPage = 4;

  const indexOfLastExercise = exercisesPerPage*currentPage;
  const indexOfFirstExercise = indexOfLastExercise-exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseCategoryData = [];

      if(bodyPart == 'all'){
        exerciseCategoryData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions)
      }
      else{
        exerciseCategoryData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exerciseCategoryData);
    }
    fetchExercisesData();
  }, [bodyPart])

  //console.log(exercises);

  return (
    <Box
      id="exercises"
      mt={{ xs: 3, md: 6 }}
      px={{ xs: 2, sm: 3, md: 6 }}   
      py={{ xs: 2, md: 4 }}
    >
      <Typography
        variant="h4"
        mb={3}
        textAlign={{ xs: "center", md: "left" }}
      >
        Showing Results
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {currentExercises.map((exercise) => (
          <Grid key={exercise.id || exercise.name} item xs={12} sm={6} md={4} lg={3}>
            <ExerciseCard exercise={exercise} />
          </Grid>
        ))}
      </Grid>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 4 && (
          <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1} 
          count={Math.ceil(exercises.length/exercisesPerPage)}
          page={currentPage} 
          onChange={paginate}
          size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
