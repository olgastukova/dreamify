
import React from 'react';
import crossicon from '../../assets/icons/cross icon.jpg'
import { useState } from 'react';
import axios from 'axios';


const ChatBot = () => {

const [prompt, updatePrompt] = useState(undefined);
const [answer, setAnswer] = useState(undefined);

const askAi = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/ask", {
        prompt: prompt
      })
      .then((res) => {
        console.log('ai result ' + res.data.content);
        setAnswer(res.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }

    return (
/* <section className={`adddream ${props.show ? 'show' : ''}`} onClick={props.onClose}> */
<section>
<div className="chatbot__wrapper">
          <input
          onChange={(e) => updatePrompt(e.target.value)}
            type="text"
            className="chatbot__input"
            placeholder="Ask me anything..."
          />
          <div> 
            <output className="chatbot__answer" value={answer}>{answer}</output>
            
          </div>
          <button onClick={askAi}>Search</button>
        </div>
</section>
    )
}
 export {ChatBot};