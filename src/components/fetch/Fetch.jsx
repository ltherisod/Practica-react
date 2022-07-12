import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import List from '../list/List'

const Fetch = () => {
    const [personajes, setPersonajes]= useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError] = useState(null)

    //fetch
    // useEffect(()=>{
    //     fetch("https://rickandmortyapi.com/api/character") //pido los datos
    //     .then((res)=> res.json()) //lo traduzco 
    //     .then((respuesta)=> setPersonajes(respuesta.results)) //los almacenamos
    //     .catch((error) =>console.log(error))
    // }, [])

    //axios
    useEffect(()=>{
      axios.get("https://rickandmortyapi.com/api/character")
      .then((res)=> setPersonajes(res.data.results))
      .catch(() => setError(true))
      .finally(()=> setLoading(false))
    }, [])


    //EVALUAR SI LA DATA VIENE VACIA
    // useEffect(()=>{
    //   axios.get("https://rickandmortyapi.com/api/character")
    //   .then((res)=> {
    //     if(!res.data.results.lenght){
    //       throw new Error() //se va directo al catch
    //     }else{
    //       setPersonajes(res.data.results)
    //     }
    //   })
    //   .catch(() => setError(true))
    //   .finally(()=> setLoading(false))
    // }, [])
    //RETURN ANTICIPADO
    // if(loading){
    //  return <p>Cargando</p>
    // }

    // if(error){
    //   return <p>Hubo un error</p>
    // }

  return (
    <div>
        {loading 
        ? <p>Cargando</p> 
        : error ? <p>Error, intente mas tarde </p>
        : <List personajes={personajes} />}
    </div>
  )
}

export default Fetch