import { useState } from "react"; 
import cn from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FlipCard.css";
import MediaCard from "../Cards/Card";
import Helllo from '../Images/Helllo.jpg'
import catss from '../Images/catss.jpg'
import Birds from '../Images/Birds.jpg'
import Rabbits from '../Images/Rabbits.jpg'

const Elements=[
    { src:Helllo, Desc:'The requirements of adoption' , DescBack:'You must have a legal age and be part of a responsible adoption process.A financial contribution will be requested depending on the species and the situation of the animal.'},
    { src:catss, Desc:'Responsible adoption ', DescBack:'Our Organization ensures that each decision is carefully considered and that the adopted animal corresponds to its new family and its way of life'}, 
    { src:Birds, Desc:'Rescue adoption', DescBack:'You can adopt to save.Animals in failure of adoption , old or victims of serious pathologies also await the warmth of a home.'}, 
    { src:Rabbits, Desc:'The Adoption Journey    ', DescBack:'You must describe your lifestyle and your expectations.The adoptive form is made for this.Fill it now!'}, 
    
  ]


function FlipCard() {
    const [elements,setElements]=useState(Elements)

  return (
    <div className="ContainerFlipCards">
           {elements.map((element,i)=>{
            return (
            <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <div className="Mediac">
                    <img src={element.src}  className="imgFlipCard"/>
                    <h3 className='H3Dec1'>{element.Desc} </h3>

                </div>
            </div>
            <div class="flip-card-back">
                <p className="textFlipCard">{element.DescBack}</p>
            </div>
            </div>
            </div>
           
           );})}

  </div>
  );
}
export default FlipCard ;