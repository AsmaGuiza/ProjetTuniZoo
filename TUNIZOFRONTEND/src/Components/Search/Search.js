import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Grid } from 'semantic-ui-react';

export default function Search() {
  return (
    <Grid className='Search'  >
          <Paper  className='HOHO'
            sx={{ p: '2px 4px', alignItems: 'center',height:'50px' }}
          > 
            <InputBase
              sx={{ ml: 1, flex: 1 , width:'30vw' }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'Search ' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          </Grid>
  );
}