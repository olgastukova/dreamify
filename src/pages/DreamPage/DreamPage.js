import "./DreamPage.scss";
// import paris from "../../assets/paris.jpg";
import guitar from "../../assets/guitar.jpg";
import letter from "../../assets/letter.jpg";
import meditate from "../../assets/meditate.jpg";
import dog from "../../assets/dog.jpg";
import { DreamItem } from "../../components/DreamItem/DreamItem";
import React from "react";
import { useState, useEffect} from "react";
import AddDream from "../../components/AddDream/AddDream";
import axios from "axios";
import { useParams } from "react-router-dom";

const DreamPage = () => {
  const [show, setShow] = useState(0);
  const [showAdd, setShowAdd] = useState(false);
  const [dreamData, setDreamData] = useState([]);
  const { id } = useParams();

  const getDreamList = () => {
    axios
      .get(`http://localhost:8080/dreams`)
      .then((response) => {
        console.log(response);
        setDreamData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDreamList();
  }, [id]);

  const categoryList = (arr) => {
    let newArr = [];
    let uniqueArr = [];
    arr?.map(dream => newArr.push(dream.category))
    newArr.forEach(item => {
      if (!uniqueArr.includes(item)) uniqueArr.push(item);
    })
    return uniqueArr
  }
  const categories = categoryList(dreamData);
  
  const updateDreamData = (newDream) => {
    setDreamData(newDream);
  };
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
            {categories?.map((category) => (
                  <li key={category} >{category}</li>
            ))}
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

          <AddDream updateDreamData={updateDreamData}  categories={categories} onClose={() => setShowAdd(false)} show={showAdd} />

{show!==0
?<DreamItem dreamData={show} setShow={setShow}/>
:""
}
          
            {dreamData
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
                    src={dream.image}
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
