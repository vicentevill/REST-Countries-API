import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CountryList.css";

export default function CountryList() {
  //State
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

  //Effect
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

  //Functions
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(query.toLowerCase())
    );
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
      <div className="CountryList__filters-wrapper">
        <div className="CountryList__search-wrapper">
          <img className="CountryList__search-icon" src="/search.svg" alt="" />
          <input
            placeholder="Search for a country..."
            className="CountryList__search"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div>
          <div>Filter By Region</div>
          <aside>
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
          </aside>
        </div>
      </div>

      <div className="CountryList__wrapper">
        {filteredCountries.map((country) => (
          <Link
            className="CountryList__country-card"
            to={`/${country.cca3}`}
            key={country.cca3}
          >
            <img src={`${country.flags.svg}`} alt="flag" />

            <div className="CountryList__info">
              <h1 className="CountryList__name">{country.name.common}</h1>
              <p>
                <b>Population:</b>{" "}
                {country.population.toLocaleString(undefined, {
                  useGrouping: true,
                  maximumFractionDigits: 0,
                })}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Capital:</b> {country.capital}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
