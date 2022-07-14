import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
const DetalleContainer = () => {
    const [detalle, setDetalle]= useState({})
    const {id} = useParams()
  
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res)=> setDetalle(res.data))
        .catch((error)=> console.log(error))
    }, [id])
    
    console.log(detalle)
  return (
    <div>{detalle.name}</div>
  )
}

export default DetalleContainer