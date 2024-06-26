import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import api from "../api/api";
import { Country } from "../types/Country.type";
import CountrySection from "./CountrySection";

const CountryList: React.FC = () => {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  const {
    data: countriesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: () => api.countries.getCountries(),
  });

  useEffect(() => {
    if (countriesData) {
      setAllCountries(countriesData);
      setCountries(countriesData);
    }
  }, [countriesData]);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry) => selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
      setCountries(
        countries.filter((c) => c.name.common !== country.name.common)
      );
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry) =>
            selectedCountry.name.common !== country.name.common
        )
      );
      setCountries(
        [...countries, country].sort((a, b) => {
          return (
            allCountries.findIndex((c) => c.name.common === a.name.common) -
            allCountries.findIndex((c) => c.name.common === b.name.common)
          );
        })
      );
    }
  };

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>error</div>;

  return (
    <div>
      <CountrySection
        countries={selectedCountries}
        title="좋아하는 나라"
        handleSelectCountry={handleSelectCountry}
      />
      <CountrySection
        countries={countries}
        title="나라들"
        handleSelectCountry={handleSelectCountry}
      />
    </div>
  );
};

export default CountryList;
