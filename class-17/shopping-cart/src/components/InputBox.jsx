import React, { useState } from "react";

const InputBox = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };
  const handleClick = () => {
    alert("i got the data");
  };

  return (
    <>
    
      <div className="inputbox">
        <h3>input box</h3>
    
          <input type="text" value={inputText} onChange={handleChange} className="fitem"></input>
       
          <input type="text" className="fqty"></input>
       
        <button type="click" onClick={handleClick}>
          click
        </button>
      </div>
    </>
  );
};

export default InputBox;
