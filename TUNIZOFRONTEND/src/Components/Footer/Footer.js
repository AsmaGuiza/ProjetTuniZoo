
import './Footer.css'
import {FaChevronCircleDown} from "react-icons/fa"
import MediaCard from '../Cards/Card';
import FlipCard from '../FlipCard/FlipCard';
import { Button } from 'bootstrap';
import CardList from '../CardList/CardList';
import logogo from '../../Components/Images/logogo.png'
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom'
<SocialIcon url="https://twitter.com/jaketrent" />


function Footer() {
 return (
    <div className='FooterContainner'>
      <div >  <img src ={logogo}  height="100px" className='logoo0'/> </div>
      <div> 
        <h1 className='TextAdop'> Contacts : </h1>
            <p className='DonText'>OnlyAnimals Foundation : </p>
            <p className='DonText'>TunConvNat@onlyanimals.org</p>
            <p className='DonText'>Tunisia</p></div>
      
      <div>
        <h1 className='TextAdop'> Infos : </h1>
            <h3 className='DonText'>Participants</h3>
            <p className='DonText'>Student</p>
            <p className='DonText'>Gap year</p>
            <p className='DonText'>Under 18s</p>
            <p className='DonText'>Groups</p>
            <p className='DonText'>Families</p>
    </div>
    <div>
        <h1 className='TextAdop'> Follow us on :  </h1>
        <SocialIcon url="https://www.instagram.com/assma.guiza/" /><br/><br/>
        <SocialIcon url="https://www.facebook.com/asma.guiza.1" /><br/><br/>
        <SocialIcon url="https://twitter.com/jaketrent" />

    </div>

    </div>
  );
}
export default Footer ; 