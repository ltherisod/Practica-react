import React, { useState } from 'react'
import { useEffect } from 'react'
import List from '../list/List'

const Fetch = () => {
    const [personajes, setPersonajes]= useState([])
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character") //pido los datos
        .then((res)=> res.json()) //lo traduzco 
        .then((respuesta)=> setPersonajes(respuesta.results)) //los almacenamos
        .catch((error) =>console.log(error))
    }, [])

  return (
    <div>
        <List personajes={personajes} />
    </div>
  )
}

export default Fetch