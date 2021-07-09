import React, {useRef} from 'react';
import { v4 as uuidv4 } from "uuid";

export default function Form({todos,setTodos}) {
    const inputRef = useRef();

    function clickHandler(){
        const inputElement = inputRef.current.value
        if(inputElement === '') return //if it's empty, nothing will be added
        const tempArray = JSON.parse(JSON.stringify(todos));
        let newElement =     
        {
            id:uuidv4(), 
            task:inputElement,
            value: false
        };

        tempArray.push(newElement);
        setTodos(tempArray);
        // console.log(inputElement);
        inputRef.current.value = null // after typing, input form will be empty
    }

    // function clickHandler2(){
    // }

    return (
        <>
        <div>
            <input ref={inputRef} type="text" placeholder="Type a new todo" className="form"/><br/>
            <button className="Button" onClick={clickHandler}>Add Todo</button>
            {/* <button className="Button2" onClick={clickHandler2}>Delete Todo</button> */}
        </div>
        </>
    )
}
