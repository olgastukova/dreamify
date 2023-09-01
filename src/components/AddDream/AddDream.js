import './AddDream.scss'
import React from 'react';
import crossicon from '../../assets/icons/cross icon.jpg'
import { useState } from 'react'; 
import axios from 'axios';


const AddDream= props => {
   const [image, setImage] = useState("");
   
const getImages = () => {
    axios
    ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=rome")
    .then(res => {
     image = res.data.urls.regular
      console.log(res.data.urls.regular)
    })
}  
    return (
<section className={`adddream ${props.show ? 'show' : ''}`} onClick={props.onClose}>
    <div className="adddream__main" onClick={e => {e.stopPropagation();}}>
    <button className="adddream__main-button" onClick={props.onClose}>
        <img className="adddream__main-cross" src={crossicon} alt="white x" />
    </button>
    <input 
  type="text"
  placeholder="Search image"
  value={image}
  onChange={(e) => setImage(e.target.value)}
  /> 
    
    <form className="adddream__main-title">
        <label>Name</label>
        <input type="text" name="name"/>
    </form>
    <form className="adddream__main-title">
        <label>Description</label>
        <input type="text" name="name"/>
    </form>
    
    <div className="adddream__buttons">
        <button onClick={getImages}> Add a dream</button>
    </div>
    </div>
</section>
    )
}
 export default AddDream