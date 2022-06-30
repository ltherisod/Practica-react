import { useState } from "react"

const useCounter = (initial, stock) => {
    const [count, setCount]= useState(initial)

    const sumar = () =>{
        if(count < stock){
            setCount(count+1)
        }
    }

    const restar = () => {
        if(count > 0){
            setCount(count -1)
        }
    }

    return{count, restar, sumar}
}
export {useCounter}