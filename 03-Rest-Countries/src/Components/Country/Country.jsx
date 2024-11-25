import { useState } from "react";

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  const { name, flags, population } = country;

  const [visited, setVisited] = useState(true);
  function isVisited() {
    setVisited(!visited);
  }

  return (
    <div
      className={`card  ${
        visited ? "bg-base-100" : "bg-gray-900"
      } w-96 shadow-xl`}
    >
      <figure className="px-10 pt-10">
        <img src={flags.png} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name.common}</h2>
        <p>Population: {population}</p>
        <div className="card-actions">
          <button onClick={isVisited} className="btn btn-primary">
            {visited ? "Is Visited" : "Remove"}
          </button>
          <button
            onClick={() => handleVisitedCountry(country)}
            className="btn btn-primary"
          >
            Visited Country
          </button>

          <button
            onClick={() => handleVisitedFlag(country)}
            className="btn btn-primary"
          >
            Visited Country Flag
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;
