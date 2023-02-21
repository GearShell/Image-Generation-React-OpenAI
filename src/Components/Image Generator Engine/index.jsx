import React, { useState } from "react";
import axios from "axios";
import { baseAPIPath } from "../../API Services/BaseURLs/basePath";
import { apiPath } from "../../API Services/URLs/apiPath";

const ImageGenerator = () => {
  const [search, setSearch] = useState("");
  const [image, setImage] = useState();

  const getImageUnsplash = () => {
    axios
      .get(
        `${baseAPIPath.UNSPLASH_BASE_URL}${apiPath.UNSPLASH_API_IMAGE_BY_SEARCH}?page=1&query=${search}&client_id=${process.env.REACT_APP_IMAGE_UNSPLASH_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.results);
        setImage(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="ig_container">
        <div className="mb-3 container">
          <label className="form-label ig_title">Search The Image Below:</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="/imagine Prompt:"
            onChange={(e) => handleChange(e)}
            value={search}
          />
        </div>
        <div className="form-check form-check-inline ">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label className="form-check-label">Search Through Web</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label className="form-check-label">Search Through AI Server</label>
        </div>
        <div className="">
          <button
            type="button"
            className="btn btn-dark"
            onClick={getImageUnsplash}
          >
            Search
          </button>
        </div>
        <div>
          {image?.map((value, index) => {
            return (
              <div key={index} className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                <img src={value.urls.full} className="card-img-top" alt="..." />
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageGenerator;
