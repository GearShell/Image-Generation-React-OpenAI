import React, { useState } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import { baseAPIPath } from "../../API Services/BaseURLs/basePath";
import { apiPath } from "../../API Services/URLs/apiPath";
import CONSTANTS, { MODELS } from "../../Resource/Assets/Constants/Constants";

const ImageGenerator = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const [err, setErr] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const getCompletetionOpenAI = async () => {
    const res = await openai.createCompletion({
      model: MODELS.CODEX_MODEL,
      prompt: search,
      max_tokens: CONSTANTS.MAX_TOKEN_NUMBER,
      temperature: CONSTANTS.TEMPERATURE_COUNT,
    });
    setResult(res.data.choices[0].text);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="ig_container">
        <div className="container">
          <h1 className="ig_title">AI Text Editor</h1>
          <p className="ig_desc">Struggling with words, Let us help !!</p>
        </div>
        <div className="mb-3 container">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Enter Here
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ask here"
              aria-label="code"
              aria-describedby="basic-addon1"
              value={search}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="container">
          <button type="button" className="btn btn-dark" onClick={getCompletetionOpenAI}>
            Search
          </button>
        </div>
        <div className="form-floating">
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default ImageGenerator;
