import React, { useState, SetStateAction, useContext } from 'react'
import {
  Box,
  Paper,
  InputBase,
  InputAdornment,
  Typography,
} from "@mui/material";

import Layout from '../../Layout'
import { Colors } from '../../constants/colors';
import SearchIcon from "../../assets/icons/icon-search.svg";
import MovieTrendList from '../../components/movie-list/movieTrendList';
import MovieList from '../../components/movie-list';
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";

const Home = () => {
  // * STATES
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  
  // * CONTEXT
  const { state } = useContext(MovieContext);
  const { movies } = state;

  // * VARIABLES
  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommendedList = movies.filter((item) => item.isTrending !== true);

  // * HANDLERS
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);

    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchList(newList);
  }; // handleSearch

  return (
    <Layout>
      <Box>
        <Paper
          component='form'
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 'default',
            p: 1,
            backgroundColor: Colors.primary01,
            border: 'none',
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{
              ml: 1,
              flex: 1,
              color: Colors.accent02,
              border: "none",
            }}
            value={ search }
            onChange={ handleSearch }
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={ SearchIcon }
                  alt="search icon"
                  width={ 20 }
                  height={ 20 }
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>

      <Box
        py={ 2 }
        px={ 4 }
      >
        {
          search === ""
          ? (
            <Box width='100%'>
              <Box width='100%'>
                <Typography
                  variant='h5'
                  component='h1'
                  my={ 6 }
                  fontWeight={ 400 }
                >
                  Trending
                </Typography>
                <MovieTrendList trendingList={ trendingList } />
              </Box>

              <Box width='100%'>
                <Typography
                  variant='h5'
                  component='h1'
                  my={ 6 }
                  fontWeight={ 400 }
                >
                  Recommended For You
                </Typography>
                <MovieList recommendedList={ recommendedList } />
              </Box>
            </Box>
          )
          : (
            <Box width="100%">
              <Typography>
                Found { searchList.length } results for "{ search }"{ "" }
              </Typography>
              
              <MovieList recommendedList={ searchList } />
            </Box>
          ) 
        }
      </Box>
    </Layout>
  )
}

export default Home;