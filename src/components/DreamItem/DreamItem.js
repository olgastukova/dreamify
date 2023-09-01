import './DreamItem.scss'
import paris from '../../assets/paris.jpg';
import React from 'react';
import crossicon from '../../assets/icons/cross icon.jpg'
import { Link } from 'react-router-dom';

const DreamItem = props => {
   
    return (
<section className={`dreamitem ${props.show ? 'show' : ''}`} onClick={props.onClose}>
    <div className="dreamitem__main" onClick={e => e.stopPropagation()}>
       <img src={paris} className="dreamitem__main-image" alt="eifell tower" />
    <button className="dreamitem__main-button" onClick={props.onClose}>
        <img className="dreamitem__main-cross" src={crossicon} alt="white x" />
    </button>
    <h2 className="dreamitem__main-title">Visit Paris</h2>
    <h3 classNme="dreamitem__main-subtitle">Description</h3>
    <p>One of the most beautiful cities on the world! Visit: Louvre, Eiffel Tower, Moulin Rouge. </p> 
    
    <div className="dreamitem__buttons">
        <button>Done</button>
        <button>Fulfill</button>
    </div>
    </div>
</section>
    )
}
 export default DreamItem