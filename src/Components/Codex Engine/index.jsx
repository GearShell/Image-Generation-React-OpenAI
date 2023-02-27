import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const Codex = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(" Your Code will be shown here !!");

  const submit = (event) => {
    if (event.key == "Enter") {
      event.target.value.trim();
      if (event.target.value != " ") {
        setText(event.target.value);
        event.target.value = "";
        getCode();
      }
    }
  };
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const getCode = async () => {
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "<|endoftext|>" + text + "\n--\nLabel:",
      max_tokens: 1000,
    });
    setResult(res.data.choices[0].text);
    console.log(result);
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
              value={result}
            ></textarea>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Codex;
