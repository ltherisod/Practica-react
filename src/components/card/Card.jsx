import React from 'react'

const Card = ({personaje}) => {
  return (
    <div className="card" style={{width:'18rem'}} >
        <img src={personaje.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{personaje.name}</h5>
            <p className="card-text">{personaje.status}</p>
            <a href="#" className="btn btn-primary">Go</a>
        </div>
    </div>
  )
}

export default Card