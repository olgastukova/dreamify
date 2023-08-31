import './DreamPage.scss'
import paris from '../../assets/paris.jpg'
import guitar from '../../assets/guitar.jpg'
import letter from '../../assets/letter.jpg'
import meditate from '../../assets/meditate.jpg'
import dog from '../../assets/dog.jpg'
import DreamItem from '../../components/DreamItem/DreamItem';
import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const DreamPage = () => {
    const [show, setShow] = useState(false)

    return (
        <section>
            <header>
                <h1 className="logo">Dreamify</h1>
            <div>
                <ul className ="nav">
                    <li>To Do</li>
                    <li>Done</li>
                </ul>
            </div>
            <div>
                <ul className ="categories">
                    <li>travel</li>
                    <li>experience</li>
                    <li>things</li>
                    <li>relations</li>
                    <li>new skill</li>
                    <li>culture</li>
                </ul>
            </div>
        </header>
        <main>
            <div className="dreamcards">
            <section className="dreamcard">
                <h2>Add</h2>
            </section>
                <section onClick={() => setShow(true)} className="dreamcard">
                 <DreamItem onClose={() => setShow(false)} show={show}/>   
                <img src={paris} className="dreamcard__image" alt="eifell tower" />
                <h2>Visit Paris</h2>
                
            </section>
            <section className="dreamcard">
                <img src={guitar} className="dreamcard__image" alt="eifell tower" />
                <h2>Learn to play guitar</h2>
            </section>
            <section className="dreamcard">
                <img src={dog} className="dreamcard__image" alt="eifell tower" />
                <h2>Get a dog</h2>
            </section>
            <section className="dreamcard">
                <img src={letter} className="dreamcard__image" alt="eifell tower" />
                <h2>Write a love letter</h2>
            </section>
            <section className="dreamcard">
                <img src={meditate} className="dreamcard__image" alt="eifell tower" />
                <h2>Try meditation</h2>
            </section>
            </div>
            
        </main> 
        </section>
       
    )
}

export {DreamPage}
