import React, { useState } from 'react';
import '../styles/TextForm.css';


function TextForm(props) {
    const [text, setText] = useState('');
    const [style, setStyle] = useState("normal form-control");
  

    // handle upper case button
    const handleUpperCaseClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text is upper case now", "success");
    }
    // handle lower case button
    const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Text is lower case now", "success");
    }

    // handle clear text
    const handleClearText = () => {
        setText("");
        props.showAlert("Text cleared", "success");
    }
    // handle on change for text area
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }
    const handleBoldClick = () => {
        setStyle("bolder form-control");
        props.showAlert("Text is bold now", "success");
    }
    const handleItalicClick = () => {
        setStyle("italic form-control");
        props.showAlert("Text is italic now", "success");
    }
    const handleCopyText = () => {
        let text = document.getElementById("myText");
        console.log(text);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleRemoveSpaces = () => {
        let newText = text.split(' ').join('');
        setText(newText);
        props.showAlert("Spaces have been removed", "success");
    }
    return (
        <>
            <div className='container'>
                <h1>Enter your text here to analyse - </h1>
                <div className='container my-3'>
                    <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 boldIcon`} onClick={handleBoldClick}>B</button>
                    <button className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 boldIcon`} onClick={handleItalicClick}>I</button>
                </div>
                <div className="mb-3">
                    <textarea className={style} id="myText" rows="8" value={text} onChange={onChangeHandler}></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpperCaseClick}>Convert to uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowerCaseClick}>Convert to lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleCopyText}>Copy text</button>
                <button className='btn btn-primary mx-1' onClick={handleRemoveSpaces}>Remove spaces</button>

                <button className='btn btn-danger mx-1' onClick={handleClearText}>Clear text</button>
            </div>
            <div className='container'>
                <h2>Your text summary -</h2>
                <p>{text.split(" ").length} word found, and {text.length} characters. </p>
                <p>{0.08 * text.split(" ").length} mins to read it.</p>
                <h2>Preview -</h2>
                <p>{(text.length > 0) ? text : "Enter something in the textbox above to preview here"}  </p>
            </div>
        </>
    )
}

export default TextForm