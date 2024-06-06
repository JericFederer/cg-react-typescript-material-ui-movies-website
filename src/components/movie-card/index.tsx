import React, { useContext } from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

import { MovieDataType } from '../../assets/data';
import { MovieContext } from '../../context/movie-context';
import moviesIcon from '../../assets/icons/icon-category-movie.svg';
import tvSeriesIcon from '../../assets/icons/icon-category-tv.svg';
import BookmarkIcon from '../icons/bookmark-icon';
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon';
import { Colors } from '../../constants/colors';

interface MovieCardProps {
  movie: MovieDataType;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  // * CONTEXT
  const { dispatch } = useContext(MovieContext);

  // * HANDLERS
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: 'TOGGLE BOOKMARK', id });
  };

  return (
    <Card
      variant='outlined'
      sx={{ bgcolor: 'transparent', color: Colors.accent02, my: 3, border: 'none' }}
    >
      <CardContent sx={{ p: 0, position: 'relative' }}>
        <Grid container spacing={ 1 }>
          <Grid item>
            <img
              src={ movie.thumbnail.regular.large }
              alt=''
              style={{ width: 400, height: 180, borderRadius: 8 }}
            />
          </Grid>
          
          <Grid item xs={ 8 }>
            <Grid container spacing={ 1 } alignItems='center'>
              <Grid item>
                <Typography
                  fontSize={ 10 }
                  color={ Colors.accent02 }
                  aria-label='year of movie'
                >
                  { movie.year }
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    background: Colors.accent02,
                    borderRadius: '50%',
                  }}
                />
              </Grid>
              <Grid item>
                <img
                  src={ movie.category === 'Movies' ? moviesIcon : tvSeriesIcon }
                  alt=''
                  width={ 16 }
                  height={ 16 }
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={ 10 }
                  color={ Colors.accent02 }
                  aria-label='movie category'
                >
                  { movie.category }
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    background: Colors.accent02,
                    borderRadius: '50%',
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={ 10 }
                  color={ Colors.accent02 }
                  aria-label='movie rating'
                >
                  { movie.rating }
                </Typography>
              </Grid>
            </Grid>
            <Typography aria-label='movie rating' padding={ 0 }>
              { movie.title }
            </Typography>
          </Grid>
          
          <Grid
            item xs={ 2 }
            sx={{
              position: 'absolute',
              top: 0,
              right: 0
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                p: '1rem',
              }}
            >
              <Box
                sx={{
                  p: '1rem',
                  backgroundColor: 'black',
                  borderRadius: '100%',
                  cursor: 'pointer',
                  '&:hover': { opacity: 0.8 },
                }}
                onClick={ () => handleToggleBookmark(movie.id) }
              >
                {
                  movie.isBookmarked ? (
                    <BookmarkIcon fill={ Colors.accent02 }/>
                  ) : (
                    <BookmarkEmptyIcon />
                  )
                }
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MovieCard;