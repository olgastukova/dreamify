import './AddDream.scss'
import React from 'react';
import crossicon from '../../assets/icons/cross icon.jpg'

const AddDream= props => {
//     state = {
//         selectedFile: null
//     }

//    fileSelectHandler = event => {
//     this.setState (
//       selectedFile: event.target.files[0] 
//     )
//    }

//    fileUploadHandler = () => {

//    }

    return (
<section className={`adddream ${props.show ? 'show' : ''}`} onClick={props.onClose}>
    <div className="adddream__main" onClick={e => e.stopPropagation()}>
    <button className="adddream__main-button" onClick={props.onClose}>
        <img className="adddream__main-cross" src={crossicon} alt="white x" />
    </button>
    {/* <form className="adddream__main-title">
        <label for="file">Upload image</label>
        <input type="file" accept="image/*" name="image" id="file" onChange={this.fileSelectHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
    </form> */}
    
    <form className="adddream__main-title">
        <label>Name</label>
        <input type="text" name="name"/>
    </form>
    <form className="adddream__main-title">
        <label>Description</label>
        <input type="text" name="name"/>
    </form>
    
    <div className="adddream__buttons">
        <button>Add a dream</button>
    </div>
    </div>
</section>
    )
}
 export default AddDream