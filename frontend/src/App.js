import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/ui/pages/login/login.jsx";
import Register from "../src/ui/pages/register/register.jsx";
import Home from "./ui/pages/home/home.jsx";
import CreateBill from "./ui/pages/createBill/createBill.jsx";
import PageNotFound from '../src/ui/pages/pageNotFound'
import './global.css'
import theme from "./theme.js";
import './font.css'
import { ThemeProvider } from "@mui/material";
import UploadReceipt from "./ui/pages/uploadReceipt/uploadReceipt.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-bill" element={<CreateBill />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/upload-receipt" element={<UploadReceipt />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
