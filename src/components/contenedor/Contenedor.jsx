import React, { useState } from 'react'
import './Contenedor.css'

const Contenedor = ({data}) => {
    const [show, setShow] =useState(false)
    // const {info}= props
    const handleShow = () => {
        setShow(!show)
    }
    
  return (
    <div>
        <h2>Soy el componentente contenedor</h2>
        <h3>{data}</h3>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus amet blanditiis possimus ullam rem placeat ut perspiciatis odit illo? Fuga sapiente, ea assumenda maxime ex amet accusamus quod provident!</p>
           {show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, similique eius. Dolorem cum eos delectus ea molestias exercitationem debitis fuga sit beatae corporis, deserunt perspiciatis cupiditate? Veritatis quaerat molestiae natus!</p> }
        <button onClick={handleShow}> {show ? 'Leer menos' : 'Leer más'}</button>

        </div>
    </div>
  )
}

export default Contenedor