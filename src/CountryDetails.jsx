import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        setCountryName(country[0].name.common);
      });
  });

  function handleClick() {
    console.log(country[0].name?.common);
  }
  //use id to fetch info on country

  return <div onClick={handleClick}>Country Name:{countryName}</div>;
}
