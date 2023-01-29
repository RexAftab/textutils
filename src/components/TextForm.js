import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied!", "success");
    }

    const cleartext = () => {
        setText("");
        props.showAlert("Text cleared!", "success");
    }

    const trimspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been cleared!", "success");
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleDownClick}>To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={cleartext}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to clipboard</button>
            <button className="btn btn-primary mx-1" onClick={trimspace}>Clear extra spaces</button>
        </div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2 className="my-4">Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        </div>
        </>
    )
}