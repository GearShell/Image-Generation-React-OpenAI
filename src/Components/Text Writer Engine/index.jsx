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
      <div>
        <div>
          <h1>AI Text Editor</h1>
        </div>
        <div className="mb-3 container">
          <label className="form-label">Enter Your Query Below:</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Here!!!"
            onChange={(e) => handleChange(e)}
            value={search}
          />
        </div>
        <div className="">
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
