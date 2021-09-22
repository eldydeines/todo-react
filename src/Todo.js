import React, { useState } from "react";

const Todo = ({ removeTodo, id, task }) => {

    return (
        <div>
            <h3 style={{ display: "inline", margin: "10px" }}>{task}</h3>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}

export default Todo;