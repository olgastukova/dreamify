import "./AddDream.scss";
import React from "react";
import crossicon from "../../assets/icons/cross icon.jpg";
import { useState } from "react";
import axios from "axios";
import props from "../../pages/DreamPage/DreamPage.js"

const AddDream = ({updateDreamData, categories, onClose, show, updateFunc}) => {
  const [dreamName, setDreamName] = useState("");
  const [dreamDesc, setDreamDesc] = useState("");
  const [image, setImage] = useState("");
  const [imageResponse, setImageResponse] = useState("");
  const [category, setCategory] = useState("");

  const searchImage = () => {
    axios(
      `https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${image}`
    ).then((res) => {
      setImageResponse(res.data.urls.small);
      console.log(res.data.urls.small);
    });
  };

  const saveDream = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/dreams", {
        dream_name: dreamName,
        description: dreamDesc,
        category: category,
        image: imageResponse,
      })
      .then((res) => {
        updateDreamData(res.data);
        onClose()
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <section
      className={`adddream ${show ? "show" : ""}`}
      onClick={onClose}
    >
      <div
        className="adddream__main"
        onClick={(e) => {
          e.stopPropagation();
        }}
      > 
        <button className="adddream__main-button"> 
          <img className="adddream__main-cross" src={crossicon} alt="white x" />
        </button>

        {imageResponse ? <img src={imageResponse} /> : ""}

        <input
        className="adddream__main-input"
          type="text"
          placeholder="Search image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={searchImage}>search</button>

        <form className="adddream__main-title">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={dreamName}
            onChange={(e) => setDreamName(e.target.value)}
          />
        </form>
        <form className="adddream__main-title">
          <label>Description</label>
          <input
            type="text"
            name="name"
            value={dreamDesc}
            onChange={(e) => setDreamDesc(e.target.value)}
          />
        </form>
        <select
          className="adddream__main-cat"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
             <option disabled value="">Select a category</option>
                {/* {categories?.map((category) => (
                  <option key={category} >{category}</option>
                ))} */}
                <option>all dreams</option>
                <option>travel</option>
                <option>experience</option>
                <option>relationships</option>
                <option>new skills</option>
                <option>life goals</option>
                <option>career</option>
                <option>sport</option>
                <option>shopping</option>
          </select>
        

        <div className="adddream__buttons">
          <button onClick={saveDream}> Add a dream</button>
        </div>
      </div>
    </section>
  );
};
export default AddDream;
