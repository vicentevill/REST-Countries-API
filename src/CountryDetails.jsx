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
      });
  }, []);

  useEffect(() => {
    if (country && country[0]) {
      setCountryName(country[0].name.common);
    }
  }, [country]);

  function handleClick() {
    console.log(country[0].name.common);
  }

  return (
    <>
      <div onClick={handleClick}>Country Name:{countryName}</div>
    </>
  );
}
