import React,{useEffect} from 'react'
import { useState } from 'react'
import { data } from '../../mocks/mockApi'

const PromiseContainer = () => {
    const [lista, setLista]= useState([])
    const [loading, setLoading] = useState(true)

    //tratar promesa con then catch y finally
//    useEffect(()=>{
//        data
//        .then((response)=>setLista(response))
//        .catch((error)=> console.log(error))
//        .finally(()=> setLoading(false))
//    },[])
   
//tratar promesa con async await try catch finally

const getData = async () => {
    try{
        const respuesta = await data
        setLista(respuesta)
    }catch(error){
        console.log(error)
    }finally{
        setLoading(false)
    }
}

    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        {loading ? <p>Cargando data...</p> : lista.map((item)=> <p key={item.id}>{item.name}</p>)}
    </div>
  )
}

export default PromiseContainer