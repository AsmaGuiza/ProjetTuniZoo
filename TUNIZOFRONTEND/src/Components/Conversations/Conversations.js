import './Conversations.css';
import { FormControl , OutlinedInput} from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import { useState,useEffect } from 'react';

function Conversations(props) {
    const [msgsent,setMsgSent]=useState([]) 
    const [msgrec,setMsgRec]=useState([]) 
    const [AllMsg,setAllMsg]=useState([]) 

    const fetchingfunction =async ()=>{
        
        const response=await fetch("http://127.0.0.1:8000/TUNIZO/Message/getByUser/",{
          method:'POST',
          headers:{
              'Content-Type':'application/json',
              'Authorization':'Token 9279d1895c8b65df9b2ae6b1d206def381a6540f'
          },
          body:JSON.stringify({Sender:"Yoyo.Omran"})
      }) 
      const responsejson =await response.json()
      console.log(responsejson)
      setMsgSent(responsejson.SentMessages)
      setMsgRec(responsejson.ReceivedMessages)
      var Msgs=[...msgsent , ...msgrec]
      Msgs.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
      setAllMsg(Msgs)
 }
      useEffect(   
        ()=>{fetchingfunction() ; },[])
        
    return (
    <div className='ConversationContainer'>
        <div className='Chatting'>
            { AllMsg.map((element,i)=>{

                return (
                    <div>
                    {element.MsgReceiver.UserName ==="Assma.Guiza"?(
                        <div key={i}>
                        <div className='SendContainer'><div className='Bulle'>{element.MsgSender.UserName} : {element.Description} </div></div>
                        </div>

                    ):(
                    <div key={i}>
                    <div className='RecContainer'><div className='BulleRe'>{element.MsgSender.UserName} : {element.Description}</div></div>
                    </div> 
                    )}
                    </div>
                    


                );})}
 

        </div>
           <div className='BoxSender'>
                <FormControl>
                <OutlinedInput placeholder="Enter your Message" />
                <FormHelperText />
                </FormControl>
                <button  type="submit" className='Envoyer'>Envoyer</button>
           </div>
         
        
    </div>
     );
}

export default Conversations ;