import React, { useState } from "react";

const Codex = () => {
  const [text, setText] = useState(
    "Your Code Will Be Shown Here !! Happy Coding !!"
  );

  const submit = (event) => {
    if (event.key == "Enter") {
      event.target.value.trim();
      if(event.target.value!=" "){
        console.log(event.target.value);
        setText(event.target.value);
        event.target.value = "";
      };
    }
  };
  return (
    <>
      <div className="ig_container">
        <div className="container">
          <h1 className="ig_title text-center">Codex</h1>
          <p className="ig_desc text-center">
            Let us help you get better code !!
          </p>
        </div>
        <div className="container">
          <div className="input-group">
            <span className="input-group-text">Write here 👉</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              onKeyDown={(event) => submit(event)}
            ></textarea>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="input-group input-group-lg">
            <textarea
              className="form-control text-secondary text-center"
              value={text}
            ></textarea>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Codex;
