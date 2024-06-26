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
      <h1>{title}</h1>
      <div>
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
