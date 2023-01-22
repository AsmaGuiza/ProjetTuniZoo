import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './AlertDialog.css';
import {FaCcVisa , FaRegCreditCard}   from "react-icons/fa";


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <button className='button1' onClick={handleClickOpen}>
        Donate
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title" >
          {"ONLINE PAYMENT"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className='PaymentContainer'>
            <div   className='PaymentType'> 
                   <input type="radio" name="gender" value="Card" />Card <FaRegCreditCard/>
                   <input type="radio" name="gender" value="E-Dinar" />E-Dinar
                  <input type="radio" name="gender" value="E-Dinar" />VISA  <FaCcVisa/> 
            </div>
            <div className='hello'>
                <label >CardNumber</label>
                <input type="texte" className='hii'/>
                <label>Security Code</label>
                <input type="password" className='hii'/>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className='button1' >Payement</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}