
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { DreamPage } from './pages/DreamPage/DreamPage';
import { DreamItem } from './components/DreamItem/DreamItem';


    const App = () => {
      return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/dreams" element={<DreamPage/>} />
              {/* <Route path="/dreams/item" element={<DreamItem/>} /> */}
            </Routes>
          </BrowserRouter>
          
        
      );
    }
    
export default App;
