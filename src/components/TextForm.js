import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to UpperCase','success');
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to LowerCase','success');
    }
    const handleClearClick=()=>{
        setText("")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState('Enter Text here')
    const handlelen=(word)=>{
        if(word===0)
        {
            return 0;
        }
        else 
        {
            return text.split(" ").length;
        }
    }
    // setText("new text");
  return (
    <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control"  value={text}  id="mybox" onChange={handleOnChange} style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#124e65'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your Text summary</h1>
            <p>{handlelen(text.length)} words and {text.length} characters</p>
        </div>
    </>
  ) 
}