import './HomePage.scss'
import paris from '../../assets/paris.jpg'
import guitar from '../../assets/guitar.jpg'
import letter from '../../assets/letter.jpg'
import meditate from '../../assets/meditate.jpg'
import dog from '../../assets/dog.jpg'

const HomePage = () => {
    return (
        <section className="homepage">
            <header>
                <h1 className="logo">Dreamify</h1>
                <div>
                <ul className ="nav">
                    <li>My dreams</li>
                    <li>Inspiration</li>
                    <li>Friends' dreams</li>
                </ul>
            </div>
        </header>
        <main className="homepage__main">
            <div className="title">Dream. Get inspired. Fulfill</div>
            <div className="homecards">
                <section className="homecard">
                <img src={paris} className="homecard__image" alt="eifell tower" />
                
            </section>
            <section className="homecard">
                <img src={guitar} className="homecard__image" alt="eifell tower" />
               
            </section>
            <section className="homecard">
                <img src={dog} className="homecard__image" alt="eifell tower" />
                
            </section>
            <section className="homecard">
                <img src={letter} className="homecard__image" alt="eifell tower" />
               
            </section>
            <section className="homecard">
                <img src={meditate} className="homecard__image" alt="eifell tower" />
                
            </section>
            <section className="homecard">
                <img src={dog} className="homecard__image" alt="eifell tower" />
                
            </section>
            <section className="homecard">
                <img src={letter} className="homecard__image" alt="eifell tower" />
                
            </section>
            <section className="homecard">
                <img src={meditate} className="homecard__image" alt="eifell tower" />
                
            </section>
            </div>
            
        </main> 
        </section>
       
    )
}

export {HomePage}