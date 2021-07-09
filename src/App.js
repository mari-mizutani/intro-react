import React, { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import Form from './Form'

const LSKEY = "MyTodoApp";

function App() {
  // Initialize the state
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LSKEY + ".todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []); 

  // Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  },[todos]);


  return (
      <>
      <div className="App">
        <header>
          <h1>My Todo App</h1>
        </header>
        < Form todos={todos} setTodos={setTodos} />
        < TodoList todos={todos} setTodos={setTodos}/>
      </div>
      </>
  );
}

export default App;
