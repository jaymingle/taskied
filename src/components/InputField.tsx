import React from 'react';
import "./styles.css"

const InputField = () => {

    const formSubmitHandler = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler} className="input">
                <input type="text" placeholder="Enter a task" className="input_box"/>
                <input type="submit" value="Go" className="input_submit"/>
            </form>
        </div>
    );
};

export default InputField;
