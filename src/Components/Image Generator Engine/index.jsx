import React, { useState } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import { baseAPIPath } from "../../API Services/BaseURLs/basePath";
import { apiPath } from "../../API Services/URLs/apiPath";
import CONSTANTS from "../../Resource/Assets/Constants/Constants";

const ImageGenerator = () => {
  const [search, setSearch] = useState("");
  const [image, setImage] = useState();
  const [openaiApi, setOpenaiApi] = useState(false);

  const getImageUnsplash = () => {
    axios
      .get(
        `${baseAPIPath.UNSPLASH_BASE_URL}${apiPath.UNSPLASH_API_IMAGE_BY_SEARCH}?page=1&query=${search}&client_id=${process.env.REACT_APP_IMAGE_UNSPLASH_API_KEY}`
      )
      .then((res) => {
        setImage(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const getImageOpenAI = async () => {
    const res = await openai.createImage({
      prompt: search,
      n: CONSTANTS.IMAGES_COUNT,
      size: CONSTANTS.IMAGES_SIZE,
    });
    setImage(res.data.data);
  };

  const handleAPI = () => {
    if (document.getElementById("flexSwitchCheckChecked")?.checked) {
      setOpenaiApi(true);
      getImageOpenAI();
    } else {
      setOpenaiApi(false);
      getImageUnsplash();
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="ig_container">
        <div className="container">
          <h1 className="ig_title">Image Generator</h1>
          <p className="ig_desc">Discover images of your choice !!</p>
        </div>
        <div className="mb-3 container">
          <label className="form-label">Search The Image Below:</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="/imagine Prompt:"
            onChange={(e) => handleChange(e)}
            value={search}
          />
        </div>
        <div className="container">
          <div className="form-check form-switch flex">
          <p className="form-check-label label_first">Search Through Web</p>
          <div className="checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
          </div>
          <p className="form-check-label label_last">Search Through AI</p>
          </div>
        </div>
        <div className="container">
          <button type="button" className="btn btn-dark" onClick={handleAPI}>
            Search
          </button>
        </div>
        <div className="container image-result">
          {image?.map((value, index) => {
            return (
              <div key={index} className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={openaiApi ? value?.url : value?.urls?.full}
                    className="card-img-top"
                    alt="..."
                  />
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
