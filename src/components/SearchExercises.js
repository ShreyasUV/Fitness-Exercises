import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
  const [search, setsearch] = useState('');

  const handleSearch = async () => {
    const exercises = await fetchData('');
  };

  return (
    <Stack alignItems='center' mt='100px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{
        fontSize:{lg: '44px', xs: '30px'}
      }} mb='50px' textAlign='center'>
        Awesome Exercises You <br/>Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField sx={{
          input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
          width: { lg: '800px', xs: '350px' },
          backgroundColor: '#fff',
          borderRadius: '40px'
        }}
          height='76px' value={search} onChange={(e) => { setsearch(e.target.value.toLowerCase()) }} placeholder='Search Exercises' type='text' />
        <Button className='search-btn' sx={{
          bgcolor: '#FF2625',
          color: '#fff',
          textTransform: 'none',
          width: { lg: '175px', xs: '70px' },
          fontSize: { lg: '20px', xs: '14px' },
          height: '56px',
          position: 'absolute',
          right:'0'
        }} onClick={handleSearch}>Search</Button>
      </Box>
      
    </Stack>
  )
}

export default SearchExercises;
