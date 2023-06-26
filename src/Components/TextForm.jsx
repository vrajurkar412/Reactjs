import React, { useState } from 'react'

export default function TextForm(props) {


  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('converted to upper case',"success")
  }

  const handleOnClick = () => {

    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('converted to lower case',"success")
  }
  const handleClearClick = () => {

    let newText = "";
    setText(newText)
  props.showAlert('cleared text',"success")
  }

  const handleOnChange = (event) => {

    setText(event.target.value)
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className='container ' style={{color: props.mode==='dark' ? 'white':'black'}} >

        <div className="mb-3">
          <label htmlFor="My-box" className="form-label" >{props.heading}</label>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey':'white'}}id="exampleFormControlTextarea1" rows="5" ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>  <button className="btn btn-primary" onClick={handleOnClick}>Convert to LowerCase</button>  <button className="btn btn-primary" onClick={handleClearClick}>Clear text</button>

      </div>

      <div className="container" style={{color: props.mode==='dark' ? 'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} word and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : 'Enter something to preview'}</p>
      </div>
    </>
  )
}
