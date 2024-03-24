import React, {useRef} from 'react';
import "./styles.css"


interface Props{
    todo: string,
    setTodo:  React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent<EventTarget>) => void
}


const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div>
            <form onSubmit={(e) => {

                handleAdd(e)


            }} className="input">
                <input type="text" value={todo} ref={inputRef} onChange={e => setTodo(e.target.value)} placeholder="Enter a task" className="input_box"/>
                <input type="submit" value="Go" className="input_submit"/>
            </form>
        </div>
    );
};

export default InputField;
