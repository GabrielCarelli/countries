"use client"

// src/components/CountriesList.tsx
import React from "react";
import { useCountries } from "../hooks/useCountries";

const CountriesList: React.FC = () => {
  const { countries, loading, error } = useCountries();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de Países</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.cca2}>
            <img src={country.flags.png} alt={`Bandeira de ${country.name.common}`} width={30} />
            {country.name.common} - {country.region} - População: {country.population.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
