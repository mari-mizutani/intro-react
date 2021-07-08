import React, { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import Form from './Form'

let count = 0;

function App() {
  const [todos, setTodos] = useState([ 
    {
        id:count++, 
        task:'Todo 1',
        value: true
    },
    {
        id:count++, 
        task:'Todo 2',
        value: false
    },
    {
        id:count++, 
        task:'Todo 3',
        value: false
    }
]);

  return (
      <>
      <div className="App">
        <header>
          <h1>My Todo App</h1>
        </header>
        < Form todos={todos} setTodos={setTodos} count={count} />
        < TodoList todos={todos} setTodos={setTodos}/>
      </div>
      </>
  );
}

export default App;
