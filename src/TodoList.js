import React from 'react';

export default function TodoList({todos,setTodos}) {

    function setCheck(todo) {
        let tempArray = todos;
        let foundElement = tempArray.find(element => element.id === todo.id);
        foundElement.value = !foundElement.value;
        setTodos(tempArray);
        // console.log(tempArray,foundElement,todo)
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
