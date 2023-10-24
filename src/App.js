import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./ui/pages/login";
import Register from "./ui/pages/register";
import Home from "./ui/pages/home";
import './global.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
