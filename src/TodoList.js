import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodo";
import { v4 as uuid } from 'uuid';

const TodoList = () => {

    const INITIAL_STATE = [
        { id: uuid(), task: "Do homework" },
        { id: uuid(), task: "Make grocery list" }
    ];

    const [todos, setTodos] = useState(INITIAL_STATE);

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }])
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(({ id }) => id !== todoId));
    }

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todos.map(({ id, task }) =>
                <Todo removeTodo={removeTodo} key={id} id={id} task={task} />
            )}
        </div>
    )
}

export default TodoList;