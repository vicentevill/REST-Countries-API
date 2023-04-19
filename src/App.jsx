import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <input
        placeholder="Search"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>

      <div className="grid">
        {filteredCountries.map((country) => (
          <div className="card" key={country.alpha3Code}>
            <img src={country.flags.svg} alt="" />
            <h3>{country.name}</h3>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
