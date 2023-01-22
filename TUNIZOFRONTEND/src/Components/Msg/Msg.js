import './Msg.css';
import {FaExchangeAlt } from "react-icons/fa";

function Msg(props) {
    const UserName = props.UserName
    const Msg = props.Msg
    const icn = <FaExchangeAlt/>



    return (
        <div className='Msg'>
            <div>
                {icn}
            </div>
            <div >
                {UserName }           

            </div>
            <div>
                {Msg}
            </div>
        </div>
    

    );
  }
  export default Msg;