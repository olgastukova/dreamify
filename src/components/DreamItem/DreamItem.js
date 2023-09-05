import './DreamItem.scss'
import axios from 'axios';
import React from 'react';
import crossicon from '../../assets/icons/cross icon.jpg'
import {ChatBot} from '../ChatBot/ChatBot';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

export const DreamItem = ({dreamData, setShow, updateFunc}) => {

const [ai, setAi] = useState(false);

const onClose = () => {setShow(0)}
const show = true;

function markDone (dreamData) {
    dreamData.isDone = true;
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
{ai == false ?
    <div className={`dreamitem__main ${!ai ? 'show' : 'invsible'}`} onClick={e => e.stopPropagation()}>
       <img src={dreamData.image} className="dreamitem__main-image" alt="random" />
    <button className="dreamitem__main-button" onClick={onClose}>
        <img className="dreamitem__main-cross" src={crossicon} alt="white x" />
    </button>
    <h2 className="dreamitem__main-title">{dreamData.dream_name}</h2>
    <p className="dreamitem__main-category">#{dreamData.category}</p> 
    <p className="dreamitem__main-subtitle">{dreamData.description}</p>
    <div className="dreamitem__buttons">
        <button className="dreamitem__button" onClick={() => {markDone(dreamData)}}>Done</button>
        <button className="dreamitem__button" onClick={()=>setAi(true)}>Fulfill</button>
        
        <button className="dreamitem__button" onClick={()=>
        {deleteDream(dreamData.id)
        }}>Delete</button>
    </div>
   
    </div>
 :
<div className={`dreamitem__main ${ai ? 'show' : 'hide'}`} onClick={e => e.stopPropagation()}>
     <ChatBot dreamData={dreamData}/>
     <button onClick={()=>setAi(false)}>Back to dream</button>

</div>
}
        </section>

    )
}
 