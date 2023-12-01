import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import { rootEndpoint } from "../utils/constants";

import Navbar from "../components/navbar";
import Home from "./home";
import Footer from "../components/footer";
import SignIn from "./sign-in";
import LogIn from "./log-in";
import Courses from "./courses";
import SingleCourse from "./singleCourse";
import NotFound from "../components/notFound";
import AboutUs from "./aboutUs";
import Grades from "./grades";
import Quiz from "./quiz";


const MainPage = () =>{
  const [activeUser, setActiveUser] = useState()

  useEffect(()=>{
    setActiveUser(getData())
  },[])

  const getData= () =>{
    const user = localStorage.getItem("user")
    if(user === "") {
      return null
    }
    return user
  }

  const logIn = async (userInfo)=>{
    const body = {user: userInfo.user, password: userInfo.password}
    const res = await axios['post'](`${rootEndpoint}/api/log-in`,body)
    
    if (res.data.errorMessage){
      alert(res.data.errorMessage)
      return 
    }
    if (res.data.data){
      // console.log(res.data.data)
      localStorage.setItem("user",res.data.data.name)

      window.location.href= '/courses'
      return 
    }
  }
  const logOut = () =>{
    localStorage.setItem("user","")
    window.location.href = "/";
    return
  }

  return (
    <>
      <Navbar logOut={logOut} activeUser={activeUser}/>
      <div style={{marginTop:"49px"}}>
        <Router>

          <Routes>
            <Route
            path='/'
            exact
            Component={()=><Home activeUser={activeUser}/>}
            />
            <Route
            path='about-us'
            exact
            Component={()=><AboutUs activeUser={activeUser}/>}
            />

            {!activeUser&&
            <>
              <Route
              path='/sign-in'
              exact
              Component={()=><SignIn activeUser={activeUser}/>}
              />
              <Route
              path='/log-in'
              exact
              Component={()=><LogIn 
                logIn={logIn}
                activeUser={activeUser}
                />}
                />
              </>
            }
            {activeUser&&
            <>
              <Route
              path='/courses' 
              exact
              Component={()=><Courses activeUser={activeUser}/>}
              />
              <Route
              path='/courses/:id'
              exact
              Component={()=><SingleCourse activeUser={activeUser}/>}
              />
              <Route
              path='grades'
              exact
              Component={()=><Grades activeUser={activeUser}/>}
              />
              <Route
              path='quiz'
              exact
              Component={()=><Quiz activeUser={activeUser}/>}
              />
            </>
            }
            
            <Route
            path='*'
            exact
            Component={()=><NotFound/>}
            />
              
          </Routes>
        </Router>
      </div>
      <Footer/>
    </>
  )
}

export default MainPage