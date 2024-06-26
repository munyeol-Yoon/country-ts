import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import api from "../api/api";
import { Country } from "../types/Country.type";
import CountryList from "./CountryList";

function Countries() {
  const [countries, setCountries] = useState<Country[]>([]);

  const {
    data: countriesData,
    isLoading,
    isError,
  } = useQuery<Country[], Error, Country[]>({
    queryKey: ["countries"],
    queryFn: () => api.countries.getCountries(),
  });

  useEffect(() => {
    if (countriesData) {
      setCountries(countriesData);
    }
  }, [countriesData]);

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>error</div>;

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-center">Countries</h1>

      <CountryList countries={countries} />
    </div>
  );
}

export default Countries;
