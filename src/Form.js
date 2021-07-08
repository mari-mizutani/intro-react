import React, {useRef} from 'react';

export default function Form({todos,setTodos,count}) {
    const inputRef = useRef();

    function clickHandler(){
        const inputElement = inputRef.current.value
        if(inputElement === '') return //if it's empty, nothing will be added
        const tempArray = JSON.parse(JSON.stringify(todos));
        let newElement =     
        {
            id:count++, 
            task:inputElement,
            value: false
        };

        tempArray.push(newElement);
        setTodos(tempArray);
        console.log(inputElement);
        inputRef.current.value = null // after typing, input form will be empty
    }

    return (
        <>
        <div>
            <input ref={inputRef} type="text" placeholder="Type a new todo"/>
            <button className="Button" onClick={clickHandler}>Add Todo</button>
        </div>
        </>
    )
}
