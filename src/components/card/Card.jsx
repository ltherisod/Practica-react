import React from 'react'
import {useNavigate} from 'react-router-dom'
const Card = ({personaje}) => {
  const navegar = useNavigate()
  return (
    <div className="card" style={{width:'18rem'}} >
        <img src={personaje.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{personaje.name}</h5>
            <p className="card-text">{personaje.status}</p>
            <button onClick={()=>navegar(`/detalle/${personaje.id}`)} className="btn btn-primary">Go</button>
        </div>
    </div>
  )
}

export default Card