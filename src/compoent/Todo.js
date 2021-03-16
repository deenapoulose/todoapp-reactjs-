import React from 'react';
const Todo = ({ text,todos,todo,setTodos}) =>{
const deleteHandler = () =>{
setTodos(todos.filter((el) => el.id !==todo.id));
       //console.log("todo   "+todo)
}
const editHandler = () =>{
    console.log(todos.length);
    var newVar = prompt("new",todo.text);
    for(let i=0;i<todos.length;i++){
         if((todos[i].id)===(todo.id)){
              todos[i].text=newVar;
          }
    }
    localStorage.setItem('todos',JSON.stringify(todos));
    window.location.reload();
   
    }
 const completeHandler = () =>{
   setTodos(todos.map((item)  =>{
        if(item.id ===todo.id){
             return{
                 ...item,completed: !item.completed
             }
            
       }
         return item;
        
    }))
 }
    return(
        
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed":""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn" ><i className="fas- fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn" ><i className="fas fa-trash"></i></button>
            <button onClick={editHandler}  className="edit-btn" ><i className="fas fa-edit"></i></button>
        </div>

    );

}
export default Todo;