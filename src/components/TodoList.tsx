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
                {(provided, snapshot) => (
                    <div className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos_heading">Active Tasks</span>
                        {todos.map((todo, index) => (
                            <SingleTodo
                                index={index}
                                todo={todo}
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId='TodosCompleted'>
                {(provided, snapshot) => (
                    <div className={`todos remove ${snapshot.isDraggingOver ? 'dragactive' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos_heading">Completed Tasks</span>
                        {completedTodos.map((todo, index) => (
                            <SingleTodo
                                index={index}
                                todo={todo}
                                key={todo.id}
                                todos={todos}
                                setTodos={setCompletedTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
                </Droppable>
        </div>
    );
};

export default TodoList;
