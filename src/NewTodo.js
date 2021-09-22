import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {

    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ task });
        setTask("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New To Do: </label>
            <input
                id="todo"
                type="text"
                name="todo"
                placeholder="To Do"
                value={task}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )

}

export default NewTodoForm;