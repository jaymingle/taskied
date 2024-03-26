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
            <Droppable droppableId='TodosList'>
                {(provided) => (
                    <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
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
                )}
            </Droppable>
            <Droppable droppableId='TodosCompleted'>
                {(provided) => (
                    <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
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
                )}
                </Droppable>
        </div>
    );
};

export default TodoList;
