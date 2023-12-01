import React, { useState } from "react";
import '../styles/styles.css'
import axios from "axios";
import { rootEndpoint } from "../utils/constants";

const Quizz = ({activeUser}) =>{
  const [answers, setAnswers] = useState(
    {
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    }
  );

  const postAnswers = async () =>{
    var grade = 0
    Object.keys(answers).map((t)=>{
      if (answers[t]) {
        // console.log(answers[t])
        grade=grade+20
      }
      return grade
    })
    const body = {user: activeUser, grade:grade}
    await axios['post'](`${rootEndpoint}/api/quiz-answer`,body)
    alert("Respuesta registrada")
  }


  return(
    <div className="top-div">
      <div className="container-fluid text-center">
        <h1>Quiz of Multiplication</h1>
        <div className="question">
            <p>Question 1: 4 x 6</p>
            <label>
                <input type="radio" name="q1" onChange={()=>setAnswers({...answers, q1:false})}/>7
            </label>
            <label>
                <input type="radio" name="q1" onChange={()=>setAnswers({...answers, q1:true})}/> 24
            </label>
        </div>
        <div className="question">
            <p>Question 2: 2 x 3</p>
            <label>
                <input type="radio" name="q2" onChange={()=>setAnswers({...answers, q2:false})}/> 5
            </label>
            <label>
                <input type="radio" name="q2" onChange={()=>setAnswers({...answers,q2:true})}/> 6
            </label>
        </div>
        <div className="question"/>
            <p>Question 3: 9 x 6 </p>
            <label>
                <input type="radio" name="q3" onChange={()=>setAnswers({...answers, q3:false})}/>12
            </label>
            <label>
                <input type="radio" name="q3" onChange={()=>setAnswers({...answers, q3:true})}/> 54
            </label>


            <div className="question">
                <p>Question 4: 6 x 8 </p> 
                <label>
                    <input type="radio" name="q4" onChange={()=>setAnswers({...answers, q4:true})}/> 46
                </label>
                <label>
                    <input type="radio" name="q4" onChange={()=>setAnswers({...answers, q4:false})}/> 44
                </label>
               
                <div className="question">
                    <p>Question 5: 12 x 3 </p>
                    <label>
                        <input type="radio" name="q5" onChange={()=>setAnswers({...answers, q5:true})}/> 36
                    </label>
                    <label>
                        <input type="radio" name="q5" onChange={()=>setAnswers({...answers, q5:false})} /> 12
                    </label>
                </div>
                
                   
                </div>
     
        <button style={{marginBottom:"20px"}} onClick={postAnswers}>Submit</button>
        </div>
    </div>
  )
}

export default Quizz
