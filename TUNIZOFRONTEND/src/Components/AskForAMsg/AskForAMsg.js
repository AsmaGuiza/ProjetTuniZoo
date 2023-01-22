import './AskForAMsg.css';
import {FaRegPaperPlane } from "react-icons/fa";
import { Fragment } from 'react';


function AskForAMsg() {

    return (

    <Fragment>
        <div className='Ask'>
            <div>
                <FaRegPaperPlane/>
            </div>
            <div>
               <p> Your Messages</p>
            </div>
            <div>
               <p>Send private photos and messages to a friend or group.</p> 
            </div>
            <div>
                <button size="small"  className='button2'>Send</button>
            </div>
        </div>
             
    </Fragment>
     );
}

export default AskForAMsg ;