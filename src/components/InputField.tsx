import React from 'react';
import "./styles.css"


interface Props{
    todo: string,
    setTodo:  React.Dispatch<React.SetStateAction<string>>
    handleAdd: () => void
}


const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

    return (
        <div>
            <form onSubmit={handleAdd} className="input">
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Enter a task" className="input_box"/>
                <input type="submit" value="Go" className="input_submit"/>
            </form>
        </div>
    );
};

export default InputField;
