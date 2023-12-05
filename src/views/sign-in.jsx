import React, { useState } from "react"
import axios from "axios"
import { rootEndpoint } from "../utils/constants"
import '../styles/styles.css'

const SignIn = ({activeUser}) => {
  const [userInfo, setUserInfo] = useState({
    user : '',
    password: '',
    coPassword: '',
    email:'',
  })

  const signIn = async () =>{
    // console.log(userInfo)

    if(userInfo.password!==userInfo.coPassword){
      alert("Las contraseñas no coinciden")
      return
    }
    const body = {user: userInfo.user, password: userInfo.password, email: userInfo.email}
    const res = await axios['post'](`${rootEndpoint}/api/sign-in`,body)
    if (res.data.errorMessage){
      alert(res.data.errorMessage)
      return
    }
    alert(res.data.message)
    setUserInfo({
      user : '',
      password: '',
      coPassword: '',
      email:'',
    })
    window.location.href= '/log-in'
    return 
  }


  return (

    <div className="top-div">

  <div className="container-fluid text-center log-in-input-div">
    <div className="row justify-content-center log-in-inputs">

      <div className="col-6 ">
        <h3>Sign in</h3>
      </div>
      <div className="col-12 form-container">

        <div className="log-in-form">
          
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 ">
              <input type="email" name="email" placeholder="Email" value={userInfo.email}
              onChange={(e)=>{setUserInfo({...userInfo, email: e.target.value })}}/>
            </div>
            
            <div className="col-12 col-md-8 ">
              <input type="" name="user" placeholder="User" value={userInfo.user}
              onChange={(e)=>{setUserInfo({...userInfo, user: e.target.value })}}/>
            </div>
            
            <div className="col-12 col-md-8 ">
              <input type="password" name="pass" placeholder="Password" value={userInfo.password}
              onChange={(e)=>{setUserInfo({...userInfo, password: e.target.value })}}/>
            </div>
            
            <div className="col-12 col-md-8">
              <input type="password" name="copass" placeholder="Confirm password" value={userInfo.coPassword}
              onChange={(e)=>{setUserInfo({...userInfo, coPassword: e.target.value })}}/>
            </div>
            
            <div className="col-12 col-md-8">
              <button onClick={signIn}>Sign in</button>
            </div>  
          </div>
        </div>
          <div className="log-in-error"></div>
      </div>
    </div> 
  </div>  
</div>
  )
}

export default SignIn