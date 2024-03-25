import React from 'react';
import './styles.css'
import Todo from "../model.ts";
import SingleTodo from "./SingleTodo.tsx";

interface Props{
    todos: Todo[],
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList =  ({todos, setTodos}: Props) => {
    return (
        <div className="container">
            <div className="todos">
                <span className="todos_heading">Active Tasks</span>
                {todos.map(todo => (
                    <SingleTodo
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </div>
            <div className="todos_remove">
                {todos.map(todo => (
                    <SingleTodo
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
