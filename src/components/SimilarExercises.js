import React from 'react';
import { Box, Stack, StepClassKey, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar.js';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}} p="20px">
      <Typography variant='h4' fontWeight="bold" mb="30px">
          Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader/>}
      </Stack>
      <Typography variant='h4' fontWeight="bold" mb="30px">
          Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader/>}
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
