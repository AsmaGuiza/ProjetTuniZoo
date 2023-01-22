
import './AboutUs.css'
import all from '../Images/all.jpg'
import { useState } from 'react';


const Elements=[
    {Nom:'Dogs', hrf:all, Desc:'Dogs can read your facial expression, socialize and communicate just like any other human does.'},

  ]
 function AboutUs() {
    const [elements,setElements]=useState(Elements)


  return (
    <div className='AbouUsContainner' id="AboutUs">
        <div className="diposMultimedia">
           
                    {elements.map((element,i)=>{
                    return (
                    
                    <img  className='Hi'  key={i} src={element.hrf}  alt="hi" width="500px" height="360px"/>);})}
            
            <p className='AboutUsDescription'>
                        
                        Tun Consv Nat , national Organization for Animal Protection, is a Confederation of associations for the animal protection and for the defence of animal rights all over Tunisia. <br/>
                        The Organization’s purpose consists in the defence of animal rights and in the defence of the animals from every kind of mistreatment. <br/>
                        It also follows the purpose of improving the public health through the abolishment of any kind of animal experiment throughout the world. <br/>
                        The Organization also works for environmental defence, where precarian ecological conditions may damage the human health and animal and vegetal life in their wholeness.  <br/>
                        The Organization wants to bring its contribute for a better, a healthier and a more human world, for a medical science that is not based on violence, for a more efficient sanitarian structure, for an ecologically clean environment.
                        The activities of   Tun Consv Nat are based exclusively on non-violence and non-infringement of individual personal liberty. <br/>
                        You may be a member within this Organization by having an account, posting about animals right or declaring about an abuse . 
                        
                </p>

        </div>
    </div>
  );
}
export default AboutUs ; 