
import './Donation.css'
import {FaChevronCircleDown} from "react-icons/fa"
import MediaCard from '../Cards/Card';
import FlipCard from '../FlipCard/FlipCard';
import { Button } from 'bootstrap';
import CardList from '../CardList/CardList';
import hi from '../Images/1.png'
import hii from '../Images/2.png'
import hiii from '../Images/3.png'
import { useState } from 'react';
import AlertDialog from '../AlertDialog/AlertDialog';


const Elements=[
    { src:hi, Desc:'I allow a shelter to feed 9 cats for a month' , DescBack:'Donate 60DT'},
    { src:hii, Desc:'I finance a veterinary care related to the care of a dog ', DescBack:'Donate 120DT'}, 
    { src:hiii, Desc:'I allow a shelter to care about  and feed 3 dogs for a month', DescBack:'Donate 280DT'},     
  ]
 

function Donation() {
    const [elements,setElements]=useState(Elements)

 return (
    <div className='DonationContainner' id="Donate">
      <div>  <h1 className='TilteAdoption'>I DONATE FOR THE ANIMALS<br/> </h1></div>
      <div className="ContainerFlipCards">
           {elements.map((element,i)=>{
            return (
            <div class="flip-card1">
            <div class="flip-card-inner1">
            <div class="flip-card-front1">
                <div className="Mediac">
                    <img src={element.src}  className="imgFlipCard"/>
                    <h3 className='DonText'>{element.Desc} </h3>
                    <h3 className='DonText'>{element.DescBack} </h3>
                    <AlertDialog/>
                </div>
            </div></div></div>        
           );})}</div>
        <div></div> 
           </div> 
  );
}
export default Donation ; 