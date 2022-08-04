import Home from './Pages/Home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landmark from './Pages/Landmark/Landmark';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Landmark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
