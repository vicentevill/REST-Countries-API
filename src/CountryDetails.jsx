import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const [countryName, setCountryName] = useState("");
  const [borders, setBorders] = useState();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        setCountryName(country[0].name.common);
        setBorders(country[0].borders);
      });
  });

  function handleClick() {
    console.log(country);
  }

  return (
    <>
      <Bordering borders={borders}></Bordering>
      <div onClick={handleClick}>Country Name:{countryName}</div>
    </>
  );
}
