import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CountryList.css";

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [regions, setRegions] = useState([
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    if (filteredCountries.length === 0) {
      setFilteredCountries(countries);
    }
  }, [filteredCountries, countries]);
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // console.log(query);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(query.toLowerCase())
    );
    // console.log(filtered);
    setFilteredCountries(filtered);
  };

  const handleRegionChange = (region) => {
    const countriesByRegion = countries.filter(
      (country) => country.region === region
    );
    setFilteredCountries(countriesByRegion);
  };

  return (
    <main className="CountryList">
      <button
        onClick={() => {
          console.log(filteredCountries);
        }}
      >
        test
      </button>

      <div>
        <div>Filter By Region</div>
        <div>
          <p
            onClick={() => {
              handleRegionChange(regions[0]);
            }}
          >
            {regions[0]}
          </p>
          <p
            onClick={() => {
              handleRegionChange(regions[1]);
            }}
          >
            {regions[1]}
          </p>
          <p
            onClick={() => {
              handleRegionChange(regions[2]);
            }}
          >
            {regions[2]}
          </p>
          <p
            onClick={() => {
              handleRegionChange(regions[3]);
            }}
          >
            {regions[3]}
          </p>
          <p
            onClick={() => {
              handleRegionChange(regions[4]);
            }}
          >
            {regions[4]}
          </p>
        </div>
      </div>
      <input type="text" value={searchQuery} onChange={handleSearchChange} />
      {filteredCountries.map((country) => (
        <Link to={`/${country.cca3}`} key={country.cca3}>
          <img src={`${country.flags.svg}`} alt="flag" />
          <h1></h1>
          <p>
            <b>Population:</b>
            {country.name.common}
          </p>
          <p>
            <b>Region:</b>
            {country.region}
          </p>
          <p>
            <b>Capital:</b>
            {country.capital}
          </p>
        </Link>
      ))}
    </main>
  );
}
