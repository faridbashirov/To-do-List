import React,{useState} from 'react';
import Input from './components/Input';
import Lists from './components/Lists';
function App() {
   const [todos,setTodos]=useState([])
   function deleteTodo(id){
    const filteredarray=todos.filter(todo=> todo.id !=id)
    setTodos(filteredarray)
     
   }
  return (
    <div className="App">
      <div className='content'>
      <h3>To Do List</h3>
      <Input todos={todos} setTodos={setTodos}/>
      <Lists deleteTodo={deleteTodo} todos={todos}/>
      </div>
    </div>
  );
}

export default App;
