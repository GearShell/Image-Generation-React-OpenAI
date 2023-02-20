import React from "react";
import "./ImageGenerator.css";

const ImageGenerator = () => {
  return (
    <div>
      <h1 className="generator-heading">Image Generator</h1>
      <div className="generator-search">
        <div class="group">
          <input required="" type="text" class="input" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Name</label>
        </div>
        <div>
          <button>Generate</button>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
