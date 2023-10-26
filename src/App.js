import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/ui/pages/login/login.jsx";
import Register from "../src/ui/pages/register/register.jsx";
import Home from "../src/ui/pages/home";
import "./global.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
