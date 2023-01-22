import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import logogo from '../../Components/Images/logogo.png'


const Register = () => {

  const initialState = {
    fullname: "" , username: "" , email: "", password: "", cf_password: "", gender: "male"
  }
  const [userData , setUserData] = useState(initialState)
  const {fullname , username, email, password, cf_password} = userData

  const [typePass, setTypePass] = useState(false)
  const [typeCfPass, setTypeCfPass] = useState(false)


  const handleChangeInput = e => {
    const {name , value} = e.target
    setUserData({...userData , [name]:value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    
  }


  return (
    <div className='auth_page'>
          <img src ={logogo} alt="logo" style={{height:'70px',width:'70px' , marginTop:"30px"}} className="position-absolute top-0 start-50 translate-middle"/>

      <form onSubmit={handleSubmit}>
    

        <div>
          <label htmlFor="fullname" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullname"
          onChange={handleChangeInput} value={fullname} name="fullname"
          style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}}/>
          <div className="form-text text-danger">
            {alert.fullname ? alert.fullname : ''}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">User Name</label>
          <input type="text" className="form-control" id="username" 
          onChange={handleChangeInput} value={username} name="username"
          style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} />
          <div className="form-text text-danger">
            {alert.username ? alert.username : ''}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1"
          onChange={handleChangeInput} value={email} name="email"
          style={{background: `${alert.email ? '#fd2d6a14' : ''}`}} />
          <div className="form-text text-danger">
            {alert.email ? alert.email : ''}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <div className='pass'>
            <input type={typePass ? "text" : "password"} className="form-control" id="exampleInputPassword1" 
            onChange={handleChangeInput} value={password} name="password"
            style={{background: `${alert.password ? '#fd2d6a14' : ''}`}} />
            <small onClick={()=> setTypePass(!typePass)}>
              {typePass ? 'Hide' : 'Show'}
            </small>
          </div>
          <div className="form-text text-danger">
            {alert.password ? alert.password : ''}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="cf_password" className="form-label">Confirm Password</label>
          <div className='pass'>
            <input type={typeCfPass ? "text" : "password"} className="form-control" id="cf_password"
            onChange={handleChangeInput} value={cf_password} name="cf_password"
            style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}} />
            <small onClick={()=> setTypeCfPass(!typeCfPass)}>
              {typeCfPass ? 'Hide' : 'Show'}
            </small>
          </div>
          <div className="form-text text-danger">
            {alert.cf_password ? alert.cf_password : ''}
          </div>
        </div>

        <div className="flex-row d-flex justify-content-between mx-0 mb-1" >
          <label htmlFor="male">
              Male: <input type="radio" name="gender" value="male" id="male"
              defaultChecked onChange={handleChangeInput} />
          </label>

          <label htmlFor="female">
              Female: <input type="radio" name="gender" value="female" id="female"
              onChange={handleChangeInput} />
          </label>
        </div>

        <hr />
        <button type="submit" className="btn btn-secondary w-100"  >
          Sign Up
        </button>
        <p className="my-2">
          Already have an account ? <Link to="/Explore" className='link-danger link-ul'>Login Now </Link>
        </p>
      </form>

    </div>
  )
}

export default Register