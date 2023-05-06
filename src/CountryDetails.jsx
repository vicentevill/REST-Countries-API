import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryDetails.css";

export default function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const [countryName, setCountryName] = useState("");
  const [flag, setFlag] = useState("");
  const [nativeName, setNativeName] = useState("");
  const [population, setPopulation] = useState("");
  const [region, setRegion] = useState("");
  const [subregion, setSubregion] = useState("");
  const [capital, setCapital] = useState("");
  const [languages, setLanguages] = useState("");
  const [currencies, setCurrencies] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }, []);

  useEffect(() => {
    if (country && country[0]) {
      setCountryName(country[0].name.common);
      setFlag(country[0].flags.svg);
      setNativeName(country[0].name.official);
      setPopulation(country[0].population);
      setRegion(country[0].region);
      setSubregion(country[0].subregion);
      setCapital(country[0].capital);
      setCurrencies(
        Object.values(country[0].currencies)
          .map((o) => o.name)
          .join(", ")
      );
      setLanguages(Object.values(country[0].languages).join(", "));
    }
  }, [country]);

  return (
    <>
      <Nav></Nav>
      <main className="CountryDetails">
        <div className="CountryDetails__wrapper">
          <div className="CountryDetails__flag-and-back-wrapper">
            <Link className="CountryDetails__back" to={"/"}>
              <img
                className="CountryDetails__back-arrow"
                src="./arrow_back.svg"
                alt="back-arrow"
              />
              Back
            </Link>
            <img className="CountryDetails__flag" src={flag} alt="" />
          </div>

          <div className="CountryDetails__info">
            <h1 className="CountryDetails__header">{countryName}</h1>

            <p>
              <b>Native Name:</b> {nativeName}
            </p>
            <p>
              <b>Population: </b>
              {population.toLocaleString(undefined, {
                useGrouping: true,
                maximumFractionDigits: 0,
              })}
            </p>
            <p>
              <b>Region:</b> {region}
            </p>
            <p>
              <b>Sub Region:</b> {subregion}
            </p>
            <p>
              <b>Capital:</b> {capital}
            </p>
            <p>
              <b>Currencies:</b> {currencies}
            </p>
            <p>
              <b>Languages:</b> {languages}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
