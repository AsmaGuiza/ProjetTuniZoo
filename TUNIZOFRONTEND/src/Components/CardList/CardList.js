import { useState , useEffect} from 'react';
import './CardList.css';
import MediaCard from '../Cards/Card';

const Elements=[

  ]
  function CardList () {
    const [elements,setElements]=useState(Elements)
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/TUNIZO/Especes/",{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Token 9279d1895c8b65df9b2ae6b1d206def381a6540f'
            }
        })
        .then( resp=> resp.json())
        .then( resp=>setElements(resp))
        .catch (error => console.log(error))
    } ,[])
    return (
        <div className='CardList'>
            {elements.map((element,i)=>{
            return (
            
            <MediaCard key={i}
                Nom={element.Name}
                hrf={element.Image}
                desc={element.Description}
            
            />);})}
        </div>
        

    )  ; 
  }
  export default CardList ; 