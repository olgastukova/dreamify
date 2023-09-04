import './DreamItem.scss'
import axios from 'axios';
import React from 'react';
import crossicon from '../../assets/icons/cross icon.jpg'
import ChatBot from '../ChatBot/ChatBot';
// import { Link } from 'react-router-dom';

export const DreamItem = ({dreamData, setShow, updateFunc}) => {
   
const onClose = () => {setShow(0)}
const show = true;

function markDone (dreamData) {
    dreamData.isDone = true;
    console.log("done = " + dreamData.isDone)
    axios
    .put(`http://localhost:8080/dreams/${dreamData.id}`, dreamData)
    .then((res) => {
        onClose();
        updateFunc();

      })
      .catch((err) => console.error(err));
}

function deleteDream(id) {
    console.log({id})
    axios
      .delete(`http://localhost:8080/dreams/${id}`)
      .then((res) => {
        onClose();
        updateFunc();

      })
      .catch((err) => console.error(err));
  }

    return (
<section className={`dreamitem ${show ? 'show' : 'show'}`} onClick={onClose}>
    <div className="dreamitem__main" onClick={e => e.stopPropagation()}>
       <img src={dreamData.image} className="dreamitem__main-image" alt="random image" />
    <button className="dreamitem__main-button" onClick={onClose}>
        <img className="dreamitem__main-cross" src={crossicon} alt="white x" />
    </button>
    <h2 className="dreamitem__main-title">{dreamData.dream_name}</h2>
    <p className="dreamitem__main-subtitle">{dreamData.description}</p>
    <p>Category</p> 
    
    <div className="dreamitem__buttons">
        <button onClick={() => {markDone(dreamData)}}>Done</button>
        <button>Fulfill</button>
        <button onClick={()=>
        {deleteDream(dreamData.id)
        }}>Delete</button>
    </div>
    </div>
</section>
    )
}
 