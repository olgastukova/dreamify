import './AddDream.scss'
import React from 'react';
import crossicon from '../../assets/icons/cross icon.jpg'
import { useState } from 'react'; 
import axios from 'axios';


const AddDream= props => {
    const [dreamName, setDreamName] = useState("");
    const [dreamDesc, setDreamDesc] = useState("");
   const [image, setImage] = useState("");
   const [imageResponse, setImageResponse] = useState("");
   
const searchImage = () => {
    axios
    (`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${image}`)
    .then(res => {
     setImageResponse(res.data.urls.regular)
      console.log(res.data.urls.regular)
    })
}  

const saveDream = () => {
    //eventually this needs to send the data to the database
}
    return (
<section className={`adddream ${props.show ? 'show' : ''}`} onClick={props.onClose}>
    <div className="adddream__main" onClick={e => {e.stopPropagation();}}>
    <button className="adddream__main-button" onClick={props.onClose}>
        <img className="adddream__main-cross" src={crossicon} alt="white x" />
    </button>

    {imageResponse
        ?<img src={imageResponse} />
        :""
    }

    <input 
  type="text"
  placeholder="Search image"
  value={image}
  onChange={(e) => setImage(e.target.value)}
  /> 
  <button onClick={searchImage}>search</button>
    
    <form className="adddream__main-title">
        <label>Name</label>
        <input type="text" name="name" value={dreamName} onChange={(e) => setDreamName(e.target.value)}/>
    </form>
    <form className="adddream__main-title">
        <label>Description</label>
        <input type="text" name="name" value={dreamDesc} onChange={(e) => setDreamDesc(e.target.value)}/>
    </form>
    
    <div className="adddream__buttons">
        <button onClick={saveDream}> Add a dream</button>
    </div>
    </div>
</section>
    )
}
 export default AddDream