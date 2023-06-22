import './App.css';
import React from 'react';
import { useState } from 'react';
import Todo from './components/todo';


function App() {
  const storedTodos=JSON.parse(localStorage.getItem('todos'))||[]
  const [todos,setTodos]=useState(storedTodos)
  
  
  const addTodo=(title, item)=>{
    const newTodo={
      id:todos.length,
      title:title,
      item:item,
      isDone:false,
    };
    setTodos([...todos,newTodo])
  };

  const markTodoAsDone=(selectedId)=>{
    const updatedTodos=todos.map((todo)=>{
      if(todo.id === selectedId){
        return{...todo,isDone:true}
      }
      return todo;
    })
    setTodos(updatedTodos)
  };

  const removeTodo=(selectedId)=>{
    const remainingTodos=todos.filter((todo)=>todo.id !== selectedId);
    setTodos(remainingTodos)
  };

  const cancelTodo=(selectedId)=>{
    const updatedTodos=todos.map((todo)=>{
      if(todo.id === selectedId){
        return{...todo,isDone:false}
      }
      return todo;
    })
    setTodos(updatedTodos)
  }

  const handleAddTodo=(title,item)=>{
    if(title.trim()!=='' && item.trim()!== ''){
      const newTodo={
        id:Date.now(),
        title,
        item,
        isDone:false,
      }
      const updatedTodos=[...todos,newTodo]
      setTodos(updatedTodos);
      }
    }

    const handleMarkAsDone=(selectedId)=>{
      const updatedTodos=todos.map((todo)=>{
        if(todo.id===selectedId){
          return{...todo, isDone:true};
        }

        return todo;
      });
      setTodos(updatedTodos);
    }
    
    const handleRemoveTodo=(selectedId)=>{
      const remainingTodos=todos.filter((todo)=>todo.id !== selectedId)
      setTodos(remainingTodos);
    }

    const handleCancelTodo=(selectedId)=>{
      const updatedTodos = todos.map((todo)=>{
        if(todo.id===selectedId){
          return{...todo,isDone:false}
        }
        return todo;
      })
      setTodos(updatedTodos)
    }
  };

return (
    <div>
      <header>TO-do List</header>
      <div className='writeTodo'>
        <AddTodo addTodo={handleAddTodo}/>
      </div>
      <div className='todoList'>
        <h2>Working</h2>
        {Todo
        .filter((todo)=> !todo.isDone)
        .map((todo)=>(
          <Todo
            todo={todo}
            markTodoAsDone={handleMarkAsDone}
            removeTodo={handleRemoveTodo}
            key={todo.id}/>
        ))}
      </div>
      <div className='doneList'>
        <h2>done</h2>
        {Todo
        .filter((todo)=>todo.isDone)
        .map((todo)=>(
          <Todo
          todo={todo}
          markTodoAsDone={handleMarkAsDone}
          removeTodo={handleRemoveTodo}
          cancelTodo={handleCancelTodo}
          key={todo.id}/>
        ))}
      </div>
    </div>
  );

export default App;
