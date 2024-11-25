import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  const handleVisitedFlag = (country) => {
    const newVisitedFlag = [...visitedFlag, country];
    setVisitedFlag(newVisitedFlag);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl">Visited Countries</h2>
      <div className="">
        <div className="">
          {visitedCountries.map((visitedCountry) => (
            <p>{visitedCountry.name.common}</p>
          ))}
        </div>
        <div>
          {visitedFlag.map((flag) => (
            <img src={flag.flags.png} alt="Shoes" className="w-32 rounded-xl" />
          ))}
        </div>
      </div>

      <h1>Country List</h1>
      <div className="flex flex-wrap gap-5 mt-5">
        {countries.map((country) => (
          <Country
            key={country.name.common}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
