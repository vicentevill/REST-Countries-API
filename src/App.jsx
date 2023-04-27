import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import CountryList from "./CountryList";
import "./App.css";
import CountryDetails from "./CountryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryList />}></Route>
      <Route path="/:id" element={<CountryDetails />}></Route>
    </Routes>
  );
}

export default App;
