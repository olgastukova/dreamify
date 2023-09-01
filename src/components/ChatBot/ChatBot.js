import './AddDream.scss'
import React from 'react';
import crossicon from '../../assets/icons/cross icon.jpg'

const ChatBot = props => {

    return (
<section className={`adddream ${props.show ? 'show' : ''}`} onClick={props.onClose}>
    <div className="adddream__main" onClick={e => e.stopPropagation()}>
    <button className="adddream__main-button" onClick={props.onClose}>
        <img className="adddream__main-cross" src={crossicon} alt="white x" />
    </button>
    
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
 export default ChatBot