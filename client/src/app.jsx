import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/home';
import Genshin from './genshin/genshin';
import Priconne from './priconne/priconne';
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
