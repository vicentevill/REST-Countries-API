import React from "react";
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
    }
  }, [country]);

  function handleClick() {
    console.log(country[0].name.common);
  }

  return (
    <>
      <main className="CountryDetails">
        <img className="CountryDetails__flag" src={flag} alt="" />
        <div>
          <h1>{countryName}</h1>
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
            <b>Currencies:</b>
          </p>
          <p>
            <b>Languages:</b>
          </p>
        </div>
      </main>
      <div onClick={handleClick}>Country Name:{countryName}</div>
    </>
  );
}
