
import './NavBar.css';
import { FaHome,FaComments,FaSafari} from "react-icons/fa";
import { FaSearch , FaRegHeart,FaList, FaRegUserCircle} from "react-icons/fa";
import Icon from '../IconListItem/IconListItem'
import { useState ,useEffect } from 'react';
import {BrowserRouter, Link} from 'react-router-dom'

const Elements=[
  {Txt:' Home', href:'/home', icn:<FaHome/>},
  {Txt:' Where to find us ', href:'/Notifications', icn:<FaRegHeart/>}, 
  {Txt:'Chat', href:'/Chat', icn:<FaComments/>}, 

  {Txt:'Profil', href:'/Profil', icn:<FaRegUserCircle/>}, 
  {Txt:' More', href:'/More', icn:<FaList/>}, 
]


function NavBar() {
  const [element,setElement]=useState(Elements)
    return (
     
 <div className='NavBarUserContainer' >
          <div className='TextTitleDiv' >
            <Link className="TextTitle"  to="/">
            Tun Consv Nat
            </Link>
          </div>
          <div>
            <ul>
              { Elements.map((element,i)=>{
                return (
                
                  <li key={i}>
                    <Icon txt={element.Txt} hrf={element.href} icn={element.icn} />
                  </li>
                
            );})}
            </ul> 
          </div>

          </div>
      
    );
  }
  export default NavBar;
