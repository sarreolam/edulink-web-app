import React, { useEffect, useState } from "react";
import '../styles/styles.css'
import axios from "axios";
import { rootEndpoint } from "../utils/constants";

const Grades = ({activeUser}) =>{
  const [grades, setGrades] = useState()

  useEffect(()=>{
    getGrades()
    // eslint-disable-next-line
  },[])


  const getGrades = async () =>{
    const params = {user:activeUser}
    const res = await axios['get'](`${rootEndpoint}/api/quiz`,{params})
    const data = res.data.data
    setGrades(data.math_quiz)
  }
  return ( 
    <div className="top-div" style={{paddingBottom:"25px", width:"100%" }}>
      <div style={{marginBottom:"20px"}}>
        <h2 style={{marginLeft: '40px'}}>Your grades: {activeUser}</h2>
      </div>
      <div className="container-fluid text-center" style={{width:"100% "}}>
        <div className="row " style={{marginBottom: "20px"}}>

          <h2 className="col-6">Course quiz</h2>
          <h2 className="col-6 align-middle">Grade</h2>
        </div>
        <div className="row ">
          <h3 className="col-6">Math quiz</h3>
          <h3 className="col-6 align-middle"> 
          {!grades ? "Not Done": `${grades}%`}
          </h3>
        </div>
      </div>

    </div>
  )
}

export default Grades