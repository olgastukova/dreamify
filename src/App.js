
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { DreamPage } from './pages/DreamPage/DreamPage';
import { DreamItem } from './components/DreamItem/DreamItem';
// import { ChatBot } from './components/ChatBot/ChatBot';


    const App = () => {
      return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/dreams" element={<DreamPage/>} />
              <Route path="/dreams/:id" element={<DreamItem/>} />
              {/* <Route path= "/dreams/:id/:ask" element={<ChatBot/>} /> */}
            </Routes>
          </BrowserRouter>
          
        
      );
    }
    
export default App;
