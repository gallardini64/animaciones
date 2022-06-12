import react from 'react';

function Input(props) {
    return (
        <div class="form-control">
            <input type = "text" required/>
            <label>{props.placeholder}</label>
        </div>
    )
}

export default Input