import React, { useEffect, useState } from "react";
import '../styles/styles.css'
import CourseCard from "../components/courseCard";
import { rootEndpoint } from "../utils/constants";
import axios from "axios";

import mathImg from '../resources/math.png'
import historyImg from '../resources/history.png'
import engineerImg from '../resources/engineer.png'
import artsImg from '../resources/arts.png'
import languagesImg from '../resources/languages.png'
import financesImg from '../resources/finances.png'
import buisnessImg from '../resources/buisness.png'
import scienceImg from '../resources/science.png'



const Courses = ({activeUser}) => {
  const [courses, setCourses]= useState()

  useEffect(()=>{
    getCourses()
  },[])

  
  const images = [mathImg,historyImg,engineerImg, artsImg, languagesImg, financesImg, buisnessImg, scienceImg]
  const getCourses =  async () =>{
    const res = await axios['get'](`${rootEndpoint}/api/courses`)
    setCourses(res.data.data)
  }


  return ( 
    <div className="top-div">
      <div>
        <h2 style={{marginLeft: '40px'}}>Hello: {activeUser}</h2>
      </div>
    <div>
      <h1 style={{textAlign:' center', color: '#F45050'}}>What do you want to learn today?</h1>
    </div>
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
            {courses?.map((t, index)=>{
              return(
                <CourseCard props={t} img={images[index]} key={index} />
                )
            })}
      </div>
    </div>
  </div>
  )
}

export default Courses