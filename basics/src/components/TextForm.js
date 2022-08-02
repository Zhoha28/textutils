import React, { useState } from 'react';

function TextForm(props) {
    const [text,setText] = useState('Enter your text here');

    // handle upper case button
    const handleUpperCaseClick = () => {
        setText(text.toUpperCase());
    }
      // handle lower case button
      const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
    }
      // handle on change for text area
      const onChangeHandler = (event) => {
      setText(event.target.value);
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myText" rows="8" value={text} onChange={onChangeHandler}></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpperCaseClick}>Convert to uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowerCaseClick}>Convert to lowercase</button>
        </div>
        <div className='container'>
            <h1>Your text summary -</h1>
            <p>{text.split(" ").length} word found, and {text.length} characters. </p> 
            <p>{0.08 * text.split(" ").length} mins to read it.</p>
            <h2>Preview -</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm