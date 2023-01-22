import './IconListItem.css';
import * as faicon from "react-icons/fa";
import { FaSearch , FaRegHeart,FaList, FaRegUserCircle} from "react-icons/fa";
import{Link} from 'react-router-dom'


function IconListItem(props) {
    const icn = props.icn 
    const txt = props.txt
    const hrf = props.hrf


    return (
        <div className='IconDiv'>
            <Link to={hrf} className="Icon">          
                     {icn} {txt}
            </Link>
        </div>

    );
  }
  export default IconListItem;