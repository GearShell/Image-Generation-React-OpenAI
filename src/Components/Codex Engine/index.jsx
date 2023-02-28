import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Highlight from "react-highlight";
import CONSTANTS, { MODELS } from "../../Resource/Assets/Constants/Constants";

const Codex = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(" Your Code will be shown here !!");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const submit = (event) => {
    if (event.key == "Enter") {
      event.target.value.trim();
      if (event.target.value != " ") {
        console.log(event.target.value);
        event.target.value = "";
        console.log("Text at submit : " + text);
        getCode();
      }
    }
  };
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const getCode = async () => {
    // console.log(text);
    const res = await openai.createCompletion({
      model: MODELS.CODEX_MODEL,
      prompt: "<|endoftext|>" + text + "\n--\nLabel:",
      max_tokens: CONSTANTS.MAX_TOKEN_FOR_CODE,
    });
    setResult(res.data.choices[0].text);
  };

  return (
    <>
      <div className="ig_container">
        <div className="container">
          <h1 className="ig_title">Codex</h1>
          <p className="ig_desc">
            Let us help you get better code !!
          </p>
        </div>
        <div className="container">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Write here 👉
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ask here"
              aria-label="code"
              aria-describedby="basic-addon1"
              value={text}
              onChange={(e) => handleChange(e)}
              onKeyDown={(event) => submit(event)}
            />
          </div>
        </div>
        <br />
        <div className="container">
          <div className="input-group bg-dark border border-5 py-5 px-4 border-dark-subtle">
            <Highlight className="atelier-savanna-light text-light">
              {result}
            </Highlight>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Codex;
