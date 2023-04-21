import React from "react";
import { useParams } from "react-router-dom";

export default function CountryDetails() {
  const { id } = useParams();

  //use id to fetch info on country

  return <div>CountryDetails {id}</div>;
}
