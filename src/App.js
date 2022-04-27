import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Notfound from "./Components/NotFound/Notfound";
import Review from "./Components/Reviews/Reviews";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
