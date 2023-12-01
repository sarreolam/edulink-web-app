import React from "react";
import '../styles/styles.css'

import aboutUsImg from '../resources/about_us.png'



const AboutUs = () =>{
  return(
    <div className="cuerpo">
    <img
        className="imgAboutUs"
        alt="LOGO"
        src={aboutUsImg}
        loading="lazy"
      />

    <h1 style={{marginTop:"20px", textAlign: "center", color:'#F45050'}}>About Us!</h1>


  <div className="row">
    <div className="col" style={{marginTop:"250px", textAlign:"center"}}>
      
    </div>
    <div className="col-10 col-md-5" style={{marginTop:"25px", textAlign:"center"}}>
      EduLink Global is on a mission to revolutionize education with innovation at its core. Our team of dedicated educators and technologists is committed to making quality learning accessible to all, breaking down geographical and socioeconomic barriers. We believe in the transformative power of education and are driven to create a brighter future through knowledge. Join us in this exciting journey and be a part of the change.</div>
    <div className="col" style={{marginTop:"250px", textAlign:"center"}}>
      
    </div>
  </div>
  <div className="contact text-center">
    <button type="button" className="btn btn-outline-success centered">Contact Us</button>
  </div>

</div>
  )
}

export default AboutUs