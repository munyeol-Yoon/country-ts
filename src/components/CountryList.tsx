import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import api from "../api/api";
import { Country } from "../types/Country.type";
import CountrySection from "./CountrySection";
import CountrySectionSkeleton from "./CountrySectionSkeleton";

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

  if (isLoading) {
    // 데이터 로딩 중이면 스켈레톤 UI를 보여줍니다.
    return (
      <div className="container p-6 mx-auto">
        {/* <CountrySectionSkeleton /> */}
        <CountrySectionSkeleton />
      </div>
    );
  }
  if (isError) return <div>error</div>;

  return (
    <div className="container p-6 mx-auto">
      <CountrySection
        countries={selectedCountries}
        title="Favorite Countries"
        handleSelectCountry={handleSelectCountry}
      />
      <CountrySection
        countries={countries}
        title="Countries"
        handleSelectCountry={handleSelectCountry}
      />
    </div>
  );
};

export default CountryList;
