import React from 'react';
import { Box, Grid, Paper } from '@mui/material';

import { MovieDataType } from '../../assets/data';
import MovieCard from '../movie-card/index';

interface MovieListProps {
  recommendedList: MovieDataType[];
}

const MovieList = ({ recommendedList }: MovieListProps) => {
  return (
    <Box sx={{
      display: 'flex',
      gap: 2,
      overflowX: "scroll"
    }}>
      { 
        recommendedList.map((movie) => {
          return (
            <Grid item key={ movie.id }>
              <Paper
                elevation={ 0 }
                sx={{
                  backgroundColor: 'transparent'
                }}
              >
                <MovieCard movie={ movie }/>
              </Paper>
            </Grid>
          )
        })
      }
    </Box>
  );
};

export default MovieList;