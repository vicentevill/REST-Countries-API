import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import CountryList from "./CountryList";
import "./App.css";
import CountryDetails from "./CountryDetails";

function App() {
  // const [DarkMode, setDarkMode] = useState({
  //   dark_grey: "#202d36",
  //   grey: "2b3743",
  //   white: "white",
  //   filter_white: `brightness(0) saturate(100%) invert(100%) sepia(11%)
  //   saturate(7487%) hue-rotate(169deg) brightness(120%) contrast(101%)`,
  // });

  // const UnsetDarkModeStyle = {
  //   dark_grey: "unset",
  //   grey: "unset",
  //   white: "unset",
  //   filter_white: "unset",
  // };

  // const DarkModeStyle = {
  //   dark_grey: "#202d36",
  //   grey: "2b3743",
  //   white: "white",
  //   filter_white: `brightness(0) saturate(100%) invert(100%) sepia(11%)
  //   saturate(7487%) hue-rotate(169deg) brightness(120%) contrast(101%)`,
  // };

  return (
    <div>
      <Routes>
        <Route path="/" element={<CountryList />}></Route>
        <Route path="/:id" element={<CountryDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
