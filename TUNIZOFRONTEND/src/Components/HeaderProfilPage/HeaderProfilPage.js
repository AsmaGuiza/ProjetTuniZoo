import './HeaderProfilPage.css';
import Avatar from '@mui/material/Avatar';
import logogo from '../../Components/Images/logogo.png'
import { useState , useEffect} from 'react';
import PostCard from '../Post/Post';
import NavBar from '../NavBar/NavBar';

function HeaderProfilPage() {
        const [elements,setElements]=useState([]) 
        const fetchingfunction =async ()=>{
            const response=await fetch("http://127.0.0.1:8000/TUNIZO/Publication/getPubByUser/",{
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  'Authorization':'Token 9279d1895c8b65df9b2ae6b1d206def381a6540f'
              },
              body:JSON.stringify({User:"Assma.Guiza"})
          }) 
          const responsejson =await response.json()
          console.log(responsejson.Pub)
          setElements(responsejson.Pub)
 }
          useEffect(   
            ()=>{fetchingfunction() ; },[])
            

    return (
    <div className='ProfilContainer'>
        <div className='TestNav'><NavBar/></div>
        <div className='HeaderProfilPageContainer'>
            
            <div className='ProfilDetailsContainner'>
                    <Avatar sx={{ bgcolor:"#f2e6e6" , width: 80, height: 80 }}  src ={logogo}> </Avatar>
                    <div className='Details'>
                        <p className='Ecriture'> Assma.Guiza </p>
                        <p  className='Ecriture' > ~ Be the mouthpiece of the voiceless.~ </p>
                    </div>
            </div>
            <div className='Pubs'>
                        {elements.map((element,i)=>{
                        return (
                            <PostCard  key={i}
                            element={element}

                        
                        />   );})}
            </div>
            
        </div></div>
    );
}

export default HeaderProfilPage ;