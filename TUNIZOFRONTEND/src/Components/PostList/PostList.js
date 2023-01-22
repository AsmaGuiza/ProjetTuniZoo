import { useState , useEffect} from 'react';
import './PostList.css';
import PostCard from '../Post/Post';
import Cats from '../Images/Cats.jpg'
import Birds from '../Images/Birds.jpg'
import Dogs from '../Images/Dogs.jpg'
const Elements=[
]
  function PostList () {
    const [elements,setElements]=useState(Elements) 
    const fetchingfunction =async ()=>{
        const response=await fetch("http://127.0.0.1:8000/TUNIZO/Publication/",{
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              'Authorization':'Token 9279d1895c8b65df9b2ae6b1d206def381a6540f'
          }
      }) 
      const responsejson =await response.json()
      console.log(responsejson)
      if (responsejson)
      setElements(responsejson)
      }
    useEffect(   
        ()=>{fetchingfunction() ; },[])
    return (
        <div className='PostListItems'>
            {elements.map((element,i)=>{
            return (
         <div className='PostCard' >
                <PostCard  key={i}
                element={element}
           
            />
            </div>
            

            );})}
        </div>
        

    )  ; 
  }
  export default PostList ; 