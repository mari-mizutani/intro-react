import React, { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([ 
        {
            id:1, 
            task:'Todo 1',
            value: true
        },
        {
            id:2, 
            task:'Todo 2',
            value: false
        },
        {
            id:3, 
            task:'Todo 3',
            value: false
        }
    ]);

    function setCheck(todo) {
        let tempArray = todos;
        let foundElement = tempArray.find(element => element.id === todo.id);
        foundElement.value = !foundElement.value;
        setTodos(tempArray);
        console.log(tempArray,foundElement,todo)
    };
    
    return (
        <>
        <h3>
            Todos
        </h3>
        <div>
            {todos.map(todo => (
                <li className="Todo" key={todo.id}>
                <input type="checkbox" 
                onChange={()=>setCheck(todo)}
                defaultChecked={todo.value}
                />
                {todo.task}
                </li>
            ))}
        </div>
        </>
    )
}
