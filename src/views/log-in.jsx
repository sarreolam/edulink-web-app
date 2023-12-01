import React, { useState } from "react";
// import axios from "axios";
// import { rootEndpoint } from "../utils/constants";
import '../styles/styles.css'
import { Navigate } from "react-router";


const LogIn = ({ logIn, activeUser}) => {
  const [userInfo, setUserInfo] = useState({
    user : '',
    password: ''
  })


  const doLogIn =  async () =>{
    await logIn(userInfo)

  }
  if (activeUser){
    // console.log(activeUser)
    return <Navigate to={'/courses'}/>
  }

  return ( 
    <div className="top-div">

      <div className="container-fluid text-center log-in-input-div">
        <div className="row justify-content-center log-in-inputs">
          <div className="col-6">
            <h3>Log in</h3>
          </div>
          <div className="col-12 form-container">

            <div className="log-in-form">

              
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 ">
                    <input type="user" name="user" placeholder="User" value={userInfo.user}
                    onChange={(e)=>{setUserInfo({...userInfo, user: e.target.value })}}/>
                  </div>
                  <div className="col-12 col-md-8">
                    <input type="password" name="pass" placeholder="Password" value={userInfo.password}
                    onChange={(e)=>{setUserInfo({...userInfo, password: e.target.value })}}/>
                  </div>
                  
                  <div className="col-12 col-md-8">
                    <button onClick={doLogIn} href={"/"} >Log in</button>
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

export default LogIn