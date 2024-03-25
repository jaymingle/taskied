import React from 'react';
import './styles.css'
import Todo from "../model.ts";

interface Props{
    todos: Todo[],
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList =  ({todos, setTodos}: Props) => {
    return (
        <div className="todos">
            {todos.map(todo => (
                <div>
                    <p>{todo.todo}</p>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
