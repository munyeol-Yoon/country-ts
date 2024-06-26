import { Country } from "../types/Country.type";
import CountryCard from "./CountryCard";

interface CountrySectionProps {
  countries: Country[];
  title: string;
  handleSelectCountry: (country: Country) => void;
}

const CountrySection: React.FC<CountrySectionProps> = ({
  countries,
  title,
  handleSelectCountry,
}) => {
  return (
    <section>
      <h1 className="mt-12 text-3xl font-semibold text-center">{title}</h1>
      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countries.map((country) => (
          <ul key={country.name.common}>
            <CountryCard
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          </ul>
        ))}
      </div>
    </section>
  );
};

export default CountrySection;
