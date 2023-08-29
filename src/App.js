
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { DreamPage } from './pages/DreamPage/DreamPage';

    const App = () => {
      return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/dreams" element={<DreamPage/>} />
            </Routes>
          </BrowserRouter>
          
        
      );
    }
    
export default App;
