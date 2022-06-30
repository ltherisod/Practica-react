import React from 'react'
import { useCounter } from '../../hooks/useCounter'

const Contador = ({initial, stock}) => {

    const {count, restar, sumar} = useCounter(initial,stock)

  return (
    <div>
        <h3>Contador</h3>
        <button onClick={sumar}>+</button>
        <span>{count}</span>
        <button onClick={restar}>-</button>
    </div>
  )
}

export default Contador