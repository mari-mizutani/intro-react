import React from 'react'
import './App.css'
import TodoList from './TodoList'
import Form from './Form'



function App() {
  return (
      <>
      <div className="App">
      <h1>My Todo App</h1>
        < Form />
        < TodoList />
      </div>
      </>
  );
}

export default App;
