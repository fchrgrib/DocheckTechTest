import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import MainPage from "./page/MainPage";
import EachTodo from "./page/EachTodo";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/:id" element={<EachTodo/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
