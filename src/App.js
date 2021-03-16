import React,{ useState,useEffect } from "react"; 
import './App.css';
import NameForm from './compoent/shoplist';
import TodoList from './compoent/TodoList'


function App() {
 
  //state
  const [inputText, setInputText ] = useState("");
 const [todos, setTodos ] = useState([]);
 const [status,setStatus] = useState("all");
 const [filteredTodos,setFilteredTods] = useState([]);
 //runs when once
 useEffect(() =>{
   getLocalTods();
 },[]);
  //USE EFFECT
  useEffect(() =>{
   filterHandler();
   saveLocalTods()
  },[todos,status]);
 //functions
const filterHandler = () =>{
  switch(status){
    case  "completed":
      setFilteredTods(todos.filter(todo => todo.completed === true));
      break;
      case "uncompleted":
        setFilteredTods(todos.filter(todo => todo.completed === false));
        break;
        default:
          setFilteredTods(todos);
          break;
        

  }
}
//console.log(filteredTodos);
const saveLocalTods = () =>{
  
    localStorage.setItem('todos',JSON.stringify(todos));
 
}
const getLocalTods = ()=>{
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem('todos',JSON.stringify([]));
  } else {
   let todoLocal = JSON.parse(localStorage.getItem("todos"));
   setTodos(todoLocal);
  }
}
  return(
    <div className="App">
      
      <header>
      <h1>Todo List</h1>
    </header>
       

      < NameForm  inputText={inputText} todos={todos} setTodos ={setTodos} setInputText={setInputText} setStatus={setStatus} ></ NameForm>
     <TodoList setTodos={setTodos} filteredTodos={filteredTodos} todos={todos }></TodoList>
    </div>
  );
}

export default App;
