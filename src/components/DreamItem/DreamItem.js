import './DreamItem.scss'

import React from 'react';
import crossicon from '../../assets/icons/cross icon.jpg'
import { Link } from 'react-router-dom';

export const DreamItem = ({dreamData, setShow, imageResponse}) => {
   
const onClose = () => {setShow(0)}
const show = true;

    return (
<section className={`dreamitem ${show ? 'show' : 'show'}`} onClick={onClose}>
    <div className="dreamitem__main" onClick={e => e.stopPropagation()}>
       <img src={imageResponse} className="dreamitem__main-image" alt="random image" />
    <button className="dreamitem__main-button" onClick={onClose}>
        <img className="dreamitem__main-cross" src={crossicon} alt="white x" />
    </button>
    <h2 className="dreamitem__main-title">{dreamData.dream_name}</h2>
    <h3 className="dreamitem__main-subtitle">Description</h3>
    <p>Category</p> 
    
    <div className="dreamitem__buttons">
        <button>Done</button>
        <button>Fulfill</button>
    </div>
    </div>
</section>
    )
}
 