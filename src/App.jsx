import "./App.css";
// import Banners from "./Components/Home-page/Banners/Banners";

import Login from "./Components/Login-form/Login";
import Signup from "./Components/Login-form/Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  // const images = [
  //   "https://example.com/image1.jpg",
  //   "https://example.com/image2.jpg",
  //   "https://example.com/image3.jpg",
  //   "../../assets/st-food.png",
  // ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Navbar />
    </div>
  );
}

export default App;
