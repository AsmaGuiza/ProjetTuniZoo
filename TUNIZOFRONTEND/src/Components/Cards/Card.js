import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './Card.css';
import { color } from '@mui/system';
import {useState} from 'react'


 function MediaCard(props) {
  const hrf =props.hrf
  const [bg, setBg] = useState("grey")

  const handlechange=() =>{
    if (bg=="grey")
    setBg("red")
    else
    setBg("grey")

  }
    return (
    <Card className='Card'>
      <CardMedia
        component="img"
        image= {hrf}
        alt="No pic"
        />
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.Nom}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <h3 className='H3Dec1'>{props.desc} </h3>
        </Typography>
      </CardContent>
      <CardActions>   
          <IconButton aria-label="add to favorites" onClick={handlechange}  >
              <FavoriteIcon 
                       sx={{color:bg}} 
                        />
            </IconButton>
      </CardActions>
    </Card>
  );
}
export default MediaCard ; 