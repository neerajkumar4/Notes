import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Notes from "./components/Notes";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<Notes />} />
            {/* <Route path="/register" element={<Register />} /> */}
        </Routes> 
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;