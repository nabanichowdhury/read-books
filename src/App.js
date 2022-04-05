
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import Review from './Components/Review/Review';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/reviews" element={<Review/>}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
