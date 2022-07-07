import React from 'react'
import Card from '../card/Card'

const List = ({personajes}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', alignItems:'center'}}>
        {personajes.map((personaje)=> <Card key={personaje.id} personaje={personaje} />)}
    </div>
  )
}

export default List