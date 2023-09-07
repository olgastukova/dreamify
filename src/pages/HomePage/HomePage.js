import "./HomePage.scss";
import paris from "../../assets/images/paris.jpg";
import guitar from "../../assets/images/guitar.jpg";
import letter from "../../assets/images/letter.jpg";
import meditate from "../../assets/images/meditate.jpg";
import dog from "../../assets/images/dog.jpg";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo7.png";

const HomePage = () => {
  return (
    <section className="homepage">
      <header>
        <Link to="/dreams" className="logo__sect">
          <img className="logo" src={logo} />
        </Link>
        <div>
          <ul className="nav">
            <Link to="/dreams">
              <li>My dreams</li>
            </Link>
            <li>Inspiration</li>
            <li>Friends' dreams</li>
          </ul>
        </div>
      </header>
      <main className="homepage__main">
        <div className="title">Dream. Get inspired. Fulfill.</div>
        <div className="homecards">
          <div className="homecards__track">
            <section className="homecard">
              <img src={letter} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={meditate} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={letter}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={letter} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={meditate} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={letter} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={meditate} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={meditate} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={letter} className="homecard__image" alt="eifell tower" />
            </section>
          </div>

          <div className="homecards__track2">
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="dog" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={letter}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={meditate}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
          </div>

          <div className="homecards__track">
            <section className="homecard">
              <img
                src={meditate}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={letter} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={guitar}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img src={paris} className="homecard__image" alt="eifell tower" />
            </section>
            <section className="homecard">
              <img
                src={meditate}
                className="homecard__image"
                alt="eifell tower"
              />
            </section>
            <section className="homecard">
              <img src={dog} className="homecard__image" alt="eifell tower" />
            </section>
          </div>
        </div>
      </main>
    </section>
  );
};

export { HomePage };
