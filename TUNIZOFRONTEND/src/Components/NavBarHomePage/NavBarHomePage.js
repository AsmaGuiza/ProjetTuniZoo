import './NavBarHomePage.css';
import { FaRegUserCircle} from "react-icons/fa";
import { RiHomeHeartFill} from "react-icons/ri";
import { CiCircleQuestion} from "react-icons/ci";
import {GiReceiveMoney,GiDogHouse} from "react-icons/gi";


import Icon from '../IconListItem/IconListItem'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import logogo from '../../Components/Images/logogo.png'


const Elements=[
  {Txt:' Home', id:'#homePage' , icn :<RiHomeHeartFill/>},
  {Txt:' About Us', id:'#AboutUs' ,icn : <CiCircleQuestion/>}, 
  {Txt:' Adoption', id:'#AdoptionSection', icn:<GiDogHouse/>}, 
  {Txt:'Donate', id:'#Donate',icn :<GiReceiveMoney/>}, 
]

function NavBarHomePage() {
  const [elements,setElements]=useState(Elements)
    return (
  <div>  
    <nav className='NavBarH'>
        <div className='headerflex'>     
                      <div className='headerleft'>
                          <img src ={logogo}  height="100px"/>
                          <Link className="TextTitleHomeNav"  to="/">Tun Consv Nat </Link>
                      </div>
                    <div  className='headerright'>
                        <ul className='ulHomeNav'>
                          { elements.map((element,i)=>{
                              return (
                              
                              <li key={i} className='ilHomeNav'>
                                <a href={element.id} className="navv" >
                                {element.icn} {element.Txt}
                                </a>
                              </li>
                              
                          );})}
                          <li className='ilHomeNav'><Link to="Explore" className="navv">
                          <FaRegUserCircle/> Login 
                            </Link></li>
                        </ul> 

                    </div>
        </div> 
        
    </nav>
    </div>    
    );
  }
  export default NavBarHomePage;