import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Box, Hidden, Typography } from "@mui/material";

import { Colors } from '../../constants/colors';
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import movieIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import bookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg";

const navLinks = [
  {
    name: 'Home',
    icon: homeIcon,
    link: '/'
  },
  {
    name: 'Movies',
    icon: movieIcon,
    link: '/movies'
  },
  {
    name: 'TV Series',
    icon: tvSeriesIcon,
    link: '/tv-series'
  },
  {
    name: 'Bookmarks',
    icon: bookmarkIcon,
    link: '/bookmarks'
  },
]

const Sidebar = () => {
  // * The URL minus the base URL as a string
  // * /home or /movies or /tv-series or /bookmarks
  const { pathname } = useLocation();
  
  return (
    <Box sx={{
      backgroundColor: Colors.primary01,
      padding: 2,
      borderRadius: 2,
      display: 'flex',
      flexDirection: {
        xs: 'column',
        lg: 'row',
      },
      alignItems: 'center',
      justifyContent: 'space-between',
      width: {
        sm: "100%",
        lg: 200,
      },
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'row',
          lg: 'column'
        },
        gap:5,
        alignItems: {
          xs: 'center',
          lg: 'start'
        },
        width: '100%',
      }}>
        {/* 'Hidden' component won't be displayed on small screens as per 'smDown' */}
        <Hidden smDown>
          <Typography
            variant='h5'
            component='h1'
            my={ 2 }
            fontWeight={ 400 }
            fontSize={ 18 }
          >
            TOKIOCHOUETSU
          </Typography>
        </Hidden>

        <Box sx={{
          py: {
            xs: 0,
            lg: 16
          },
          display: 'flex',
          flexDirection: {
            xs: 'row',
            lg: 'column'
          },
          gap: 5,
        }}>

          {/* Loop through the 'navLinks' array */}
          {
            navLinks.map((link) => {
              return (
                <Link
                  key={ link.name }
                  to={ link.link }
                  style={{ textDecoration: 'none', color: Colors.accent02 }}
                >

                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: Colors.accent02,
                    textDecoration: 'none'
                  }}>
                    <img
                      src={ link.icon }
                      alt={ link.name }
                      style={{
                        width: 18,
                        filter: `${
                          pathname === link.link
                            ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                            : "invert(84%)"
                        }`,
                      }}
                    />

                    {/* 'Hidden' component won't be displayed on small screens as per 'mdDown' */}
                    <Hidden mdDown>
                      <Typography>
                        { link.name }
                      </Typography>
                    </Hidden>
                  </Box>

                </Link>
              )
            })
          }

        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
