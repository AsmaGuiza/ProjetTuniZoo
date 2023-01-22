import './HomePageApp.css';
import { FaHome,FaComments,FaSafari} from "react-icons/fa";
import { FaSearch , FaRegHeart,FaList, FaRegUserCircle} from "react-icons/fa";
import Icon from '../../Components/IconListItem/IconListItem'
import { useState } from 'react';
import {BrowserRouter, Link} from 'react-router-dom'
import logo from '../../Components/Images/logo.png'
import SwipeableTextMobileStepper from '../../Components/Carousel/Carousel'
import AboutUs from '../../Components/AboutUs/AboutUs';
import NavBarHomePage from '../../Components/NavBarHomePage/NavBarHomePage';
import Adoption from '../../Components/Adoption/Adoption';
import Donation from '../../Components/Donation/Donation';
import Footer from '../../Components/Footer/Footer';
import {Route , Routes } from 'react-router-dom'
import SignIn from '../../Components/SignIn/SignIn';


const Elements=[
  {Txt:' Home', id:'homePage'},
  {Txt:' About Us', id:'AboutUs'}, 
  {Txt:' Adoption', id:'Adoption'}, 
  {Txt:'Donate', id:'Donate'}, 
  {Txt:'Login ', id:'Explore', icn:<FaRegUserCircle/>}, 
]

function HomePageApp() {
  const [elements,setElements]=useState(Elements)
    return (
  <div>  
    
    <NavBarHomePage/>

<div className='main'>

  <SwipeableTextMobileStepper/>
  <AboutUs/>
  <Adoption/>
  <Donation/>
  <Footer/>
  
</div>


  

  </div>    
    );
  }
  export default HomePageApp;
