import React from 'react'

export default function Todo( todo ) {
    return (
        <div className="Todo">
        <input type="checkbox" />
        <label> { todo }</label>
        </div>
    )
}
