import React, { useState } from 'react';
import '../styles/TextForm.css';


function TextForm(props) {
    const [text,setText] = useState('');
    const [style, setStyle] = useState("normal form-control");

    // handle upper case button
    const handleUpperCaseClick = () => {
        setText(text.toUpperCase());
    }
      // handle lower case button
      const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
    }
    // handle clear text
    const handleClearText = () => {
        setText("");
    }
      // handle on change for text area
      const onChangeHandler = (event) => {
      setText(event.target.value);
    }
    const handleBoldClick = () => {
        setStyle("bolder form-control");
    }
    const handleItalicClick = () => {
        setStyle("italic form-control");
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className='container my-3'>
            <button className='btn btn-dark mx-1 boldIcon' onClick={handleBoldClick}>B</button>
            <button className='btn btn-outline-dark mx-1 boldIcon' onClick={handleItalicClick}>I</button>
            </div>
            <div className="mb-3">
                <textarea className={style}  id="myText" rows="8" value={text} onChange={onChangeHandler}></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpperCaseClick}>Convert to uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowerCaseClick}>Convert to lowercase</button>
           
            <button className='btn btn-danger mx-1' onClick={handleClearText}>Clear text</button>
        </div>
        <div className='container'>
            <h2>Your text summary -</h2>
            <p>{text.split(" ").length} word found, and {text.length} characters. </p> 
            <p>{0.08 * text.split(" ").length} mins to read it.</p>
            <h2>Preview -</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm