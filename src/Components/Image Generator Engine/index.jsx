import React from "react";

const ImageGenerator = () => {
  return (
    <>
      <div>
        <div class="mb-3 container">
          <label for="exampleFormControlInput1" class="form-label">
            Enter your Imagination Below:
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="/imagine"
          />
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label class="form-check-label" for="inlineCheckbox1">
            Search Through Web
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            Search Through AI Server
          </label>
        </div>
      </div>
    </>
  );
};

export default ImageGenerator;
