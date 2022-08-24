import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Priconne from './components/priconne/priconne';
import Genshin from './components/genshin/genshin';
import Home from './components/home/home';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/genshin" element={<Genshin/>}/>
          <Route path="/priconne" element={<Priconne/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
