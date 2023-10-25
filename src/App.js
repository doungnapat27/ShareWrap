import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "../src/ui/pages/login";
import Register from "../src/ui/pages/register/register.jsx";
import Home from "../src/ui/pages/home";
import CreateBill from "./ui/pages/createBill";
import PageNotFound from '../src/ui/pages/pageNotFound'
import './global.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-bill" element={<CreateBill />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
