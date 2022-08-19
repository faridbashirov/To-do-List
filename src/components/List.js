import React from 'react'
import { MdDeleteForever} from "react-icons/md";
const List = ({text,deleteTodo,id}) => {
  return (
    <div className='listinput mt-2 '>
        <div className='check'>
        <input class="checkbox-round" type="checkbox" value="" id="flexCheckDefault"></input>
        <label class="form-check-label ms-3" for="flexCheckDefault">
        {text}
        </label>
        </div>
        <div>
         <MdDeleteForever onClick={()=>deleteTodo(id)}/>
            </div>
        
    </div>
  )
}

export default List