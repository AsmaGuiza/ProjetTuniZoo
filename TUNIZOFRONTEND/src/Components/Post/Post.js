import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import logogo from '../../Components/Images/logogo.png'
import './Post.css';
import { red } from '@mui/material/colors';
import {useState} from 'react'



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

 function PostCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const element = props.element
  const [bg, setBg] = useState("grey")


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handlechange=() =>{
    if (bg=="grey")
    setBg("red")
    else
    setBg("grey")

  }

  return (
    <Card sx={{ maxWidth: 400 , marginLeft:7.5 }}  className="hiiii"  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"#f2e6e6" }}
          src ={logogo}
            >
          </Avatar>
        }
        
        title={element.UserNamePublication}
      />
      <CardMedia
        component="img"
        height="194"
        image={element.Image}
        alt="waiting"
      />
      <CardContent>
    
      </CardContent>
      <Typography variant="body2" color="text.secondary">
               {element.Description}
        </Typography>
      <CardActions  className='Hooo' padding="0">
        <IconButton aria-label="add to favorites" onClick={handlechange} >
          <FavoriteIcon sx={{color:bg}}   />
          {element.Likes}
        </IconButton>
      </CardActions>
      <Typography variant="body2" color="text.secondary">
        </Typography>
    
    </Card>
  );
}
export default PostCard ; 