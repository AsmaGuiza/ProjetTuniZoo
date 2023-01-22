import React ,{useState} from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import './SignIn.css'
import logogo from '../../Components/Images/logogo.png'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';

function SignIn () {
  const initialState = { email: "" , password: "" }
  const [userData , setUserData] = useState(initialState)
  const {email, password} = userData
  const [typePass, setTypePass] = useState(false)
  const Navigate=useNavigate()
  const [erreur, setErreur] = useState(false)

  const handleChangeInput = e => {
    const {name , value} = e.target
    setUserData({...userData , [name]:value})
  }

  const handleSubmit = e => {
    e.preventDefault()
  }
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setErreur(false);
  };
  const loginClicked =async ()=>{
    const response=await fetch("http://127.0.0.1:8000/auth/",{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
      },
      body:JSON.stringify( { username:email , password} )
  })
  const responsejson =await response.json()
  console.log(responsejson)
  setUserData(responsejson)
  if (responsejson.token)
  { Navigate ('/home')}
  if (!responsejson.token){
    setErreur(true)
    console.log('hi')
  }
  }
  return (
    <div className='auth_page1' >
            <form  onSubmit={handleSubmit}> 
            <div className="FormContainner">
                     <div className='AuthImg'><img src ={logogo}   className='logoo1'/></div> 
                    <label >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeInput} value={email} name="email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <div className='pass'>
                        <input type={typePass ? "text" : "password"} className="form-control" id="exampleInputPassword1" onChange={handleChangeInput} value={password} name="password" />
                        <small onClick={()=> setTypePass(!typePass)}>{typePass ? 'Hide' : 'Show'} </small>
                    </div>
                    <button type="submit"  onClick={loginClicked}className="btn btn-secondary w-100" disabled={email &&(password.length >= 3 )? false : true} >Login</button>
                    <p className="my-2">
                    You don't have an account ? <Link to="/Register" className='link-danger link-ul'>Sign Up Now </Link>
                    </p>  
                                    <Dialog
                        open={erreur}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        
                      >
                        <DialogTitle>{"   W A R N I N G   "}</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-slide-description">
                                    You have to cheak your Data ! 
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} className='button1' >Retry</Button>
                        </DialogActions>
                      </Dialog>        
            </div>
      

      </form>
    </div>
  )
}

export default SignIn