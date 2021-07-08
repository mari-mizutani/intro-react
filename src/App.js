import React from 'react'
import './App.css'
import TodoList from './TodoList'
import Form from './Form'



function App() {
  return (
      <>
      <div className="App">
        <header>
          <h1>My Todo App</h1>
        </header>
        < Form />
        < TodoList />
      </div>
      </>
  );
}

export default App;
