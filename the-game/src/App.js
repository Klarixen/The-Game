AnswerButtons
import Homepage from "./components/pages/homepage"
import AnswerButtons from "./components/AnswerButtons";

function App() {
  return (
    <div>
      <Homepage />
      <AnswerButtons />



    </div>
  );
}

import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/pages/register";
import Login from "./components/pages/login";
import Homepage from "./components/pages/homepage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
    </BrowserRouter>
  )
  }
main
export default App;
