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
  const [isDone, setIsDone] = useState(false);

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
            <li onClick={() => {setIsDone(false)}}>To Do</li>
            <li onClick={() => {setIsDone(true)}}>Done</li>
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
        { isDone == false ?
          <section onClick={() => setShowAdd(true)} className="dreamcard">
            <h2>Add</h2>
          </section>
          : "" }
     <AddDream updateDreamData={updateDreamData}  categories={categories} onClose={() => setShowAdd(false)} show={showAdd} /> 



{show!==0
?<DreamItem dreamData={show} setShow={setShow} updateFunc={getDreamList}/>
:""
}
          
            {dreamData
                 .filter((dream) => dream.isDone == isDone)
              .map((dream) => (
                <section onClick={() => setShow(dream)} className="dreamcard">
                 <img
                    src={dream.image}
                    className="dreamcard__image"
                    alt="eifell tower"
                  />
                  <h2>{dream.dream_name}</h2>
                  </section>
              ))}

        </div>
      </main>
    </section>
  );
};

export { DreamPage };
