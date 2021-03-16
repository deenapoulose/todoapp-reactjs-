import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

//class Todo extends React.Component {
    const TodoList = ({todos,setTodos,filteredTodos}) =>{
       // console.log(filteredTodos);
       //const [todos,setTodos]=useState([]);
      // {todos.map((todo) =>(
    return (
        <div className="todo-container">
         <ul className="todo-list">
            {filteredTodos.map((todo) =>(
                <Todo setTodos={ setTodos} key={todo.id} todos={todos} text={todo.text} todo ={todo}></Todo>
            ))}
         </ul>
        
        </div>
      
    
    
    );
    }
   
    export default TodoList;