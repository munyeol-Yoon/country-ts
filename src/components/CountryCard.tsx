import { Country } from "../types/Country.type";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <li onClick={() => handleSelectCountry(country)}>
      <img src={country.flags.png} />
      <h3>{country.name.common}</h3>
      <p>{country.capital}</p>
    </li>
  );
};

export default CountryCard;
