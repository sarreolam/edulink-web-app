import React from "react";
import '../styles/styles.css'

const SingleCourse = ({activeUser}) => {

  return ( 
    <div className="top-div">
      <div>
        <h1 className="single-course-title">MATHEMATICS-COURSE</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>Lesson 1: Multiplication</h3>
            <p className="single-course-p">
              Step 1: Write the numbers:<br/><br/>
              Write the two numbers you want to multiply. We will call these numbers "A" and "B".<br/>

            </p>
            <p className="single-course-p">
              Step 2: Align the Numbers: <br/><br/>
              Line up the numbers so that the ones are in the same column, the tens in another, and so on. This step is especially important when you are multiplying larger numbers.<br/>
            </p>
            <p className="single-course-p">
              Step 3: Multiply the Units: <br/><br/>
              Multiply the ones digits (the rightmost digit in each number) and record the result below the line. This is the first digit of the product.<br/>
            </p>
         
            </div>
    
          <div className="col-12 col-md-6 ">
          <p className="single-course-p">
              Step 4: Multiply the Tens: <br/><br/>
              If you have tens in your numbers, multiply the tens digits and record the result below the line, but slightly offset to the left.<br/>
            </p>
            <p className="single-course-p">
              Step 5: Add the Results: <br/><br/>
              Finally, add all the results you have obtained below the line. The result is the product of the two original numbers.<br/>
            </p>
          </div>
      </div>
    </div>
    <div className="container-fluid text-center ">
      <div className="row">
        <div className="col-12 col-md-6">
          
            <iframe width={"80%"}  className="single-course-iframe"
            src="https://www.youtube.com/embed/AE4B0hgnz0E"
            title="Video"
            >
            </iframe>
        </div>
        <div className="col-12 col-md-6">
          <div className="quizz-container">
            <h3>Make a quiz </h3>
            <button className="single-course-button" disabled><a href="/quiz">Quiz</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default SingleCourse;