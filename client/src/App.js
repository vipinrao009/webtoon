import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Webtoon from './pages/Webtoon';
import CreateWebtoon from './pages/CreateWebtoon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Webtoon />} />
        <Route path="/create-webtoon" element={<CreateWebtoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

