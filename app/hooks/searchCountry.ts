"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
// src/hooks/useSearchCountry.ts
import { useState } from "react";
import { Country, getCountryByName } from "../services/countryService";

export const useSearchCountry = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchCountry = async (name: string) => {
    if (!name) return;
    setLoading(true);
    setError(null);

    try {
      const data = await getCountryByName(name);
      if (!data) {
        setError("País não encontrado");
        setCountry(null);
      } else {
        setCountry(data);
      }
    } catch (err) {
      setError("Erro ao buscar o país");
    } finally {
      setLoading(false);
    }
  };

  return { country, loading, error, searchCountry };
};
