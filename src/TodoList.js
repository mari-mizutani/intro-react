import React from 'react';
import Todo from './Todo'

export default function TodoList() {
    const todoArray = ['Todo 1', 'Todo 2']
    return (
        <>
        <h3>
            Todos
        </h3>
        <div>
            {/* {todoArray.map( (value) => 
            (
            <Todo todo = {value} />
            )
            ) } */}
        </div>
        </>
    )
}
