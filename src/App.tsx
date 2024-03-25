import './App.css'
import React, {useState} from "react";
import InputField from "./components/InputField.tsx";
import Todo from "./model.ts";
import TodoList from "./components/TodoList.tsx";

const App: React.FC = () => {

    const [todo, setTodo] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAdd = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        console.log('Todo Entered', todo)

        if(todo){
            setTodos([...todos, {id: Date.now(), todo, isDone: false}])
        }
        console.log( 'Todo Lists: ',todos)

        setTodo('')
    }

    return (
    <div className="App">
        <span className="heading">Taskied</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        {/*{todos.map(todoItem =>*/}
        {/*    <p>{todoItem.todo}</p>*/}
        {/*)}*/}
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
