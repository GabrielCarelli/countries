"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
// src/hooks/useCountries.ts
import { useEffect, useState } from "react";
import { Country, getAllCountries } from "../services/countryService";

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const data = await getAllCountries();
        setCountries(data);
      } catch (err) {
        setError("Erro ao carregar países");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};
