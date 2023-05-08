import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/pages/register";
import Login from "./components/pages/login";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
