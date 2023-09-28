import React, { useState } from 'react'


export default function TextForm(props) {
const handleUpClick=()=>{
// console.log("upper case was clicked"+text)
let newText=text.toUpperCase();
props.showAlert("converted to Uppercase!","success")
setText(newText)
}
const handleLoClick=()=>{
    // console.log("upper case was clicked"+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase!","success")
}
const handleCopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copide to clickboard!","success")
}
const handleClearClick=()=>{
        // console.log("upper case was clicked"+text)
            let newText='';
            setText(newText)
            props.showAlert("cleared text!","success")
            
}
const handleOnChange=(event)=>{
    //  console.log("on change")
    setText(event.target.value)
}
const removeExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("extra spaceses removed!","success")
}
const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
      
<div className="mb-3 my-3" style={{color: props.mode==='dark'?'white':'black'}}>
<label htmlFor="mybox" className="form-label"><h1>{props.heading}</h1></label>
<textarea className="form-control mb-3" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra space</button>
</div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary </h2>
        <p>{text.split(" ").length}   words  {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter text in above area to preview"}</p>
    </div>
</>
  )
}
