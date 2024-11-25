import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-5 mt-5">
        {countries.map((country) => (
          <Country key={country.name.common} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
