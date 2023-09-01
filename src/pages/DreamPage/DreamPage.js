import "./DreamPage.scss";
import paris from "../../assets/paris.jpg";
import guitar from "../../assets/guitar.jpg";
import letter from "../../assets/letter.jpg";
import meditate from "../../assets/meditate.jpg";
import dog from "../../assets/dog.jpg";
import { DreamItem } from "../../components/DreamItem/DreamItem";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import AddDream from "../../components/AddDream/AddDream";
import axios from "axios";
import { useParams } from "react-router-dom";

const DreamPage = () => {
  const [show, setShow] = useState(0);
  const [showAdd, setShowAdd] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getDreamList = () => {
    axios
      .get(`http://localhost:8080/dreams`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDreamList();
  }, [id]);

  
  return (
    <section>
      <header>
        <h1 className="logo">Dreamify</h1>
        <div>
          <ul className="nav">
            <li>To Do</li>
            <li>Done</li>
          </ul>
        </div>
        <div>
          <ul className="categories">
            <li>all dreams</li>
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
          <section onClick={() => setShowAdd(true)} className="dreamcard">
            <h2>Add</h2>
          </section>

          <AddDream onClose={() => setShowAdd(false)} show={showAdd} />

{show!==0
?<DreamItem dreamData={show} setShow={setShow}/>
:""
}
          
            {data
              .filter((dream) => id !== dream.id)
              .map((dream) => (
                // <Link
                //   to={`/dreams/${dream.id}`}
                //   key={dream.id}
                //   onClose={() => setShow(false)}
                //   show={show}
                // >
                <section onClick={() => setShow(dream)} className="dreamcard">
                 <img
                    src={paris}
                    className="dreamcard__image"
                    alt="eifell tower"
                  />
                  <h2>{dream.dream_name}</h2>
                  </section>
                /* </Link> */
              ))}


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
  );
};

export { DreamPage };
