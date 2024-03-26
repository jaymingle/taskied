import React from 'react';
import './styles.css'
import Todo from "../model.ts";
import SingleTodo from "./SingleTodo.tsx";
import {Droppable} from "react-beautiful-dnd";

interface Props{
    todos: Todo[],
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos: Todo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const TodoList =  ({todos, setTodos, completedTodos, setCompletedTodos}: Props) => {
    return (
        <div className="container">
            <Droppable>
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
            </Droppable>
            <div className="todos remove">
                <span className="todos_heading">Completed Tasks</span>
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
