"use client"

// src/components/SearchCountry.tsx
import React, { useState } from "react";
import { useSearchCountry } from "../hooks/searchCountry";

const SearchCountry: React.FC = () => {
  const [query, setQuery] = useState("");
  const { country, loading, error, searchCountry } = useSearchCountry();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchCountry(query);
  };

  return (
    <div>
      <h2>Buscar um País</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite o nome do país"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      {country && (
        <div>
          <h3>{country.name.common} ({country.name.oficial})</h3>
          <img src={country.flags.png} alt={`Bandeira de ${country.name.common}`} width={100} />
          <p>Região: {country.region}</p>
          <p>População: {country.population.toLocaleString()}</p>
          <p>Capital: {country.capital?.join(", ") || "Não informado"}</p>
        </div>
      )}
    </div>
  );
};

export default SearchCountry;
