import './AskForMsg.css';
import {FaRegPaperPlane } from "react-icons/fa";
import { Fragment } from 'react';
import AskForAMsg from '../AskForAMsg/AskForAMsg';
import Conversations from '../Conversations/Conversations';


function AskForMsg(props) {

    const Test=props.Test

    return (
    <div className='TestM'>
        <div  className='TestM' >{(!Test && <AskForAMsg/>)||(Test && <Conversations />) }</div>
    </div>
     );
}

export default AskForMsg ;