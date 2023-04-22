import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CountryList.css";

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  });

  useEffect(() => {
    if (filteredCountries.length === 0) {
      setFilteredCountries(countries);
    }
  });
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    console.log(query);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(query.toLowerCase())
    );
    console.log(filtered);
    setFilteredCountries(filtered);
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
      <input type="text" value={searchQuery} onChange={handleSearchChange} />
      {filteredCountries.map((country) => (
        <Link to={`/${country.cca3}`} key={country.cca3}>
          {country.name.common}
        </Link>
      ))}
      {/* <Link to={`/${id}`}>link 1</Link> */}
    </main>
  );
}
