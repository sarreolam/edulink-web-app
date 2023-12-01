import React from "react";
import '../styles/styles.css'

const CourseCard = ({props, img}) =>{
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <img 
        src={img}
        className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.text}</p>
            {props.ready ? 
              <a href={`/courses/${props.id}`}>
                <button type="button" className="btn btn-outline-primary btn-lg">
                  {props.name}
                </button></a>
            :
              <button type="button" className="btn btn-outline-secondary btn-lg" disabled>
                Coming Soon
              </button>
            }
        </div>
      </div>
    </div>
  )
}

export default CourseCard