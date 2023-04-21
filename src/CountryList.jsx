import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CountryList(props) {
  const { countries } = props;
  const id = 1;

  //   console.log(countries);

  return (
    //use the info passed down to create links. id is a placeholder
    <main>
      {countries.map((country) => (
        <Link to={`/${country.cca3}`} key={country.cca3}>
          {country.cca3}
        </Link>
      ))}
      {/* <Link to={`/${id}`}>link 1</Link> */}
    </main>
  );
}
