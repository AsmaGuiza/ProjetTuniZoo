
import './Adoption.css'
import {FaChevronCircleDown} from "react-icons/fa"
import MediaCard from '../Cards/Card';
import FlipCard from '../FlipCard/FlipCard';
import { Button } from 'bootstrap';
import CardList from '../CardList/CardList';


function Adoption() {
 return (
    <div className='AdoptionContainner' id="AdoptionSection">
      <div>  <h1 className='TilteAdoption'>Responsible adoption changes  any animal's life <br/> as much as yours !</h1></div>
      <div className='CardList'>
        <FlipCard/>
      </div>
      <div className='Ready'> 
        <p className='TextAdop'> READY   <br/>TO PICK YOUR FAVORITE ANIMAL ?</p>
        <FaChevronCircleDown className='IconAdoption'/>
        </div>
        <div className='ReadyToAdop' id="next">
            <h3 className='H3Dec'>Tun Consv Nat currently has 3,706 animals (dogs, cats, horses, rabbits, etc.) to adopt</h3>
            <CardList/>
        </div>
    </div>
  );
}
export default Adoption ; 