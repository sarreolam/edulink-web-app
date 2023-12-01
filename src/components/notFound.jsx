import React from "react";
import NotFoundImg from '../resources/notFound.avif'

const NotFound = () =>{
  return(
    <div className="text-center">
      <div>
        <img src={NotFoundImg} alt="Not Found Img"/>
        <p>La ruta no existe, regresa a la pagina principal --><a href={'/'}>Home</a></p>
      </div>
    </div>
  )
}

export default NotFound