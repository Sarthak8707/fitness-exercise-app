import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises }) => {
  
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
        {exercises.map((exercise) => (
          <Grid key={exercise.id || exercise.name} item xs={12} sm={6} md={4} lg={3}>
            <ExerciseCard exercise={exercise} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Exercises;
