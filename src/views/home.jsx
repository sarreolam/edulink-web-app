import React from "react";
import educationImage from "../resources/Education.png"
import studyingImage from "../resources/studying.jpg"
import explainingImage from "../resources/explaining.png"
import buildingImage from "../resources/building.png"
import teachingImage from "../resources/teaching.png"
import "../styles/styles.css"

const Home = ({activeUser}) =>{

  return(
    <div className="top-div">
      {/* <button onClick={()=>{console.log(activeUser)}}>act</button> */}
    <img
        className="imgEducation"
        alt="LOGO"
        src={educationImage}
        loading="lazy"
      /> 
    
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-12 col-md-6" ><h1 style={{color:'#F45050', marginTop: '120px'}}>Who are we?</h1><br/>EduLink Global is not just an organization; it's a movement dedicated to reshaping the future of education. We understand that access to quality education is a fundamental right that should be available to all, regardless of where they are in the world. Our mission is clear: to bridge educational divides by providing innovative, high-quality learning resources for free, all delivered remotely.

          At EduLink Global, we believe in the power of education to transform lives, uplift communities, and drive progress on a global scale. Our commitment to innovation in education is the driving force behind everything we do.</div>
        <div className="col-12 col-md-6"><img src={explainingImage}  className="imgEducation" style={{marginBottom:'50px', marginTop: '40px'}} alt={"Explaining"}/></div>
      </div>
    </div>

      <img
      className="imgStudy"
      alt="studying"
      src={studyingImage}
      loading="lazy"
      />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-6"><img src={buildingImage} className="imgEducation" alt={"Building"}/></div>
        <div className="col-12 col-lg-6" style={{marginTop: '70px'}}><h1 style={{color:"#F45050"}}>Why choose us?</h1>
          <br/>
            <ol>
            <li><strong>Unwavering Commitment:</strong> Our passion for education is at the core of our existence. We're not just an educational platform; we're a community of educators, technologists, and visionaries who are dedicated to breaking down barriers and creating opportunities.</li>

            <li><strong>Quality at its Core:</strong> We take pride in the quality of our educational content. From foundational knowledge to advanced skills, our materials are carefully curated and designed to meet the needs of learners of all backgrounds and abilities.</li>

            <li><strong>Innovation:</strong> "Innovation in Education" isn't just a slogan; it's our guiding principle. We leverage cutting-edge technologies to deliver education where it's needed most. Our methods keep learners engaged and motivated.</li>

            <li><strong>Impact:</strong> Our success stories are a testament to the transformative power of education. We've witnessed individuals elevate their lives, communities thrive, and entire regions change for the better through our initiatives.</li>
          </ol>
          </div>
          
          </div>
    </div>

  <h1 style={{textAlign: 'center', color:'#F45050', marginTop: '40px'}}>Where are we?</h1>
  <div className="container-fluid text-center">
    <div className="row ONL-div">
      <div className="col-1 col-sm-4">
      </div>
      <div className="col-10 col-sm-4">
        <iframe title="iframe" src="https://giphy.com/embed/HV0tHmPREaD0sIixmg" className="giphy-embed" allowFullScreen></iframe>
      </div>
      <div className="col-1 col-sm-4">
      </div>
    </div>
  </div>

 

  <div className="container text-center">
    <div className="row">
      <div className="col-12 col-lg-6" style={{marginTop: "100px"}}><h1 style={{color:"#F45050"}}>How to get involved?</h1><br/>At EduLink Global, we invite you to become a part of our mission. Whether you're a learner, an advocate, or someone who wants to make a positive impact, you can play a vital role in our journey of innovation in education. Together, we can make education accessible to all, empower individuals, and transform lives. Join us and be a catalyst for change in the world of education.</div>
      <div className="col-12 col-lg-6"><img className="imgEducation" src={teachingImage} alt={"teaching"}/></div>  
    </div>
  </div>
</div>
  )
};

export default Home;