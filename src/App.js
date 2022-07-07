import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";
import './styles/App.scss'


function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <AppRouter />
    </BrowserRouter>
  )
}

export default App;
