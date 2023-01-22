import './Chat.css';
import {FaExchangeAlt } from "react-icons/fa";
import { Fragment } from 'react';
import Msg from '../Msg/Msg';
import { useState,useEffect } from 'react';
import SearchConv from '../SearchChat/SearchChat';
import AskForMsg from '../AskForMsg/AskForMsg';
import ChatBar from '../ChatBar/ChatBar';
const Elements=[
  ]

function Chat() {
    const [elements,setElements]=useState(Elements) 

    const [ConvDiplay, setConvDiplay] = useState(false);
    const fetchingfunction =async ()=>{
        const response=await fetch("http://127.0.0.1:8000/TUNIZO/Message/getUserReceivedMessages/",{
          method:'POST',
          headers:{
              'Content-Type':'application/json',
              'Authorization':'Token 9279d1895c8b65df9b2ae6b1d206def381a6540f'
          },
          body:JSON.stringify({user:"Assma.Guiza"})
      }) 
      const responsejson =await response.json()
      console.log(responsejson)
      if (responsejson)
      setElements(ConvFunction(responsejson.ReceivedMessages))
      }

   
    useEffect(   
        ()=>{fetchingfunction() ; },[])
    
        function ConvFunction(prev){
            const tempObj = [];
            prev.forEach((n) => (tempObj[n.MsgSender.id] = n));
            const next = Object.values(tempObj);
            return next
        }
        const handlClick = (id) => {
            setConvDiplay(!ConvDiplay);
            sessionStorage.setItem("username",id)
            console.log(id)
          };
        
    return (
    <Fragment>
        <div className='ChatContainer'>
            <div className='leftPart'>
                <ChatBar/>
                 <div className='Chatsea'> 
                    <SearchConv /> 
                </div>
                 
                <div className='Chat'>
                        <ul className='Chatmsg' >
                            { elements.map((element,i)=>{
                                return (
                                
                                <li key={i} className="Mess">
                                    <div className='MessageTraitements' onClick={()=>handlClick(element.MsgSender.UserName)}> <Msg Msg={element.Description} UserName={element.MsgSender.UserName} />  </div>
                                </li>
                                
                                
                            );})}
                        </ul> 
                </div>
            </div>
            <div className='RightPart'>
                    <AskForMsg Test={ConvDiplay}  />
            </div>
        </div>        
    </Fragment>
     );
}

export default Chat ;