import {FaImage} from "react-icons/fa"
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './CreatePost.css'
import { useState ,useEffect } from 'react';


 function CreatePost() {
 

 
  return (
    <div className='thePostContainner'>
        <div className='TheMsgContainer'>
            <TextareaAutosize aria-label="Post Content" minRows={5}  className='ThePost' placeholder=' Whats going on ...?'  />
        </div>
        <div className="postandimg"> 
              <input type="file"   className="iconPost" /> 
             <button className="buttonPost">Post Now</button>
            
        </div>

    </div>
  );
}
export default CreatePost ; 