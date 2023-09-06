import "./DreamPage.scss";
import { DreamItem } from "../../components/DreamItem/DreamItem";
import React from "react";
import { useState, useEffect } from "react";
import AddDream from "../../components/AddDream/AddDream";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo (1).png";

const DreamPage = () => {
  const [show, setShow] = useState(0);
  const [showAdd, setShowAdd] = useState(false);
  const [dreamData, setDreamData] = useState([]);
  const { id } = useParams();
  const [isDone, setIsDone] = useState(false);

  function compare(dream1, dream2) {
    return dream2.id - dream1.id;
  }

  const getDreamList = () => {
    axios
      .get(`http://localhost:8080/dreams`)
      .then((response) => {
        console.log(response);
        setDreamData(response.data.sort(compare));
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
    arr?.map((dream) => newArr.push(dream.category));
    newArr.forEach((item) => {
      if (!uniqueArr.includes(item)) uniqueArr.push(item);
    });
    return uniqueArr;
  };
  const categories = categoryList(dreamData);

  const updateDreamData = (newDream) => {
    setDreamData(newDream);
  };
  return (
    <section>
      <header>
        <Link to="/" className="logo__sect">
          <img className="logo" src={logo} />
        </Link>
        <div>
          <ul className="nav">
            <li
              className={`${!isDone  ? 'nav__todo--active' : '' }` }
              onClick={() => {
                setIsDone(false);
              }}
            >
              To Do
            </li>
            <li
              className={isDone ? "nav__done--active" : ""}
              onClick={() => {
                setIsDone(true);
              }}
            >
              Done
            </li>
          </ul>
        </div>
        <div>
          <ul className="categories">
            <li>all dreams</li>
           {categories?.map((category) => (
                  <option key={category} >{category}</option>
                ))}
          </ul>
        </div>
      </header>
      <main>
        <div className="dreamcards">
          {isDone == false ? (
            <section
              onClick={() => setShowAdd(true)}
              className="dreamcard dreamcard--add"
            >
              <h2>Add a dream</h2>
            </section>
          ) : (
            ""
          )}
          <AddDream
            updateDreamData={updateDreamData}
            categories={categories}
            onClose={() => setShowAdd(false)}
            show={showAdd}
          />

          {show !== 0 ? (
            <DreamItem
              dreamData={show}
              setShow={setShow}
              updateFunc={getDreamList}
            />
          ) : (
            ""
          )}

          {dreamData
            .filter((dream) => dream.isDone == isDone)
            .map((dream) => (
              <section onClick={() => setShow(dream)} className="dreamcard">
                <img
                  src={dream.image}
                  className="dreamcard__image"
                  alt="eifell tower"
                />
                <h2 className="dreamcard__name">{dream.dream_name}</h2>
              </section>
            ))}
        </div>
      </main>
    </section>
  );
};

export { DreamPage };
