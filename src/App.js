import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Nav from './components/nav';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>

        <Route index path="/" element={<Home/>}></Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
