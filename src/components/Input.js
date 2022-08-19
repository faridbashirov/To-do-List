import React, { useState } from 'react'
import { MdAddCircleOutline} from "react-icons/md";
const Input = ({todos,setTodos}) => {
   const [value,setValue]=useState("")
    function addTodo(e){
     e.preventDefault()
     setTodos([...todos,{
        id:Date.now(),
        value:value,

     }])
     setValue("")
    }
    function error(){
        alert("fill the input")
    }
    function onChangeHandler(e){
        setValue(e.target.value)
    }

  return (
    <form onSubmit={value.length>0 ? addTodo : error}  >
        <input onChange={onChangeHandler} value={value} className='first' placeholder='Add new task' type="text" />

        <MdAddCircleOutline size={40} onClick={value.length>0 ? addTodo : error}/>
    </form>
  )
}

export default Input