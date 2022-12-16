import React from 'react'

const Card = (props) => {
  return (
    
    <div className="card col-3 mb-10" id="small">
      <img src={props.img} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.text}
        </p>
       
      </div>
    </div>
  
  )
}

export default Card