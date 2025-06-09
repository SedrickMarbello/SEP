import React, { useState } from "react";
function InputDisplay() {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }
        return(
        <div>
            <h2>React Input Text Display</h2>
            <input type="password" value={text} onChange={handleChange} />
            <h3>You typed: {text}</h3>
        </div>
        );
    }
    export default InputDisplay;