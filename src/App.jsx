import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import CountryList from "./CountryList";
import "./App.css";
import CountryDetails from "./CountryDetails";

function App() {
  //create props populated by api
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  });

  // useEffect(() => {
  //   console.log(countries.map((country) => country.name));
  // });
  return (
    <Routes>
      <Route path="/" element={<CountryList />}></Route>
      <Route
        path="/:id"
        element={<CountryDetails countries={countries} />}
      ></Route>
    </Routes>
  );
}

export default App;
