import React from 'react'
import List from './List'
const Lists = ({todos,deleteTodo}) => {
  return (
    <div className='listcontent mt-2'>
        {todos.map((todo,index)=>(
       <List deleteTodo={deleteTodo} text={todo.value} key={index} id={todo.id}/>
        ))}
       
    </div>
  )
}

export default Lists