
import React from 'react';
import crossicon from '../../assets/icons/cross icon.jpg'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const ChatBot = ({dreamData}) => {

const [answer, setAnswer] = useState(undefined);

const askAi = (e) => {
    // e.preventDefault();

    axios
      .post("http://localhost:8080/ask", {
        prompt: dreamData.dream_name
      })
      .then((res) => {
        setAnswer(res.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }
//   let needToLoad = true;
  useEffect(() => {
    // if (needToLoad) {
    //     needToLoad = false;
        askAi();
    }
 , []);
    return (
<section>
<div className="chatbot__wrapper">
          <div> 
            <output className="chatbot__answer">{answer}</output>
            
          </div>
          {/* <button onClick={askAi}>Search</button> */}
        </div>
</section>
    )
}
 export {ChatBot};