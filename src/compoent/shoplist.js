import React from 'react';
import ReactDOM from 'react-dom';
//class ShoppingList extends React.Component {
 const ShoppingList = ({ setInputText,todos, setTodos,inputText,setStatus}) =>{

  const inputTextHandler = (e) =>{
    //console.log(e.target.value);
   setInputText(e.target.value);
  };
  const submitTodoHandler = (e)=>{
    e.preventDefault();
    if(inputText === ""){
      alert("please add one task");
    }
    else{
      setTodos([
        ...todos,{text: inputText, completed: false, id:  Math.random() * 1000},
      ]);
      setInputText("");
    }
    


  };
  const statusHandler = (e) =>{
    setStatus(e.target.value)
  }
return (
<div className="shopping-list">

<form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"  />
      <button  onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div  className="select">
        <select onChange ={statusHandler}name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    
</div>


);
}

export default ShoppingList;