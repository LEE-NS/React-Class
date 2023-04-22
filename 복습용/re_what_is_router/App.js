import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import Productpage from './page/Productpage'
import Productdetailpage from './page/Productdetailpage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Aboutpage' element={<Aboutpage />} />
        <Route path='/Productpage' element={<Productpage />} />
        <Route path='/Productpage/Productdetailpage' element={<Productdetailpage />} />
      </Routes>
    </div>
  );
}

export default App;
