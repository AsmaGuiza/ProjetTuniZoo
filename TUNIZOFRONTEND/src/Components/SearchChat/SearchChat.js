import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Grid } from 'semantic-ui-react';
import './SearchChat.css';

export default function SearchConv() {
  return (
    <div className='SearchC'>
          <Paper 
            sx={{ alignItems: 'center',height:'35px',backgroundColor:"rgba(240,242,245,255)",borderRadius:"10px",width:"30vw" ,margin:"10px" }}
          > 
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search"> <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 , width:'15vw' }}
              placeholder="search a conversation"
              inputProps={{ 'aria-label': 'search a conversation ' }}
            />
            
             
          </Paper>
          </div>
  );
}