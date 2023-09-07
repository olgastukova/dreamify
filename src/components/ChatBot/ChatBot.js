import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ChatBot = ({ dreamData }) => {
  const [answer, setAnswer] = useState(undefined);

  const askAi = (e) => {
    axios
      .post("http://localhost:8080/ask", {
        prompt: dreamData.dream_name,
      })
      .then((res) => {
        setAnswer(res.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    askAi();
  }, []);
  return (
    <section className="chatbot">
      <div className="chatbot__wrapper">
        <div>
          <output className="chatbot__answer">{answer}</output>
        </div>
      </div>
    </section>
  );
};
export { ChatBot };
