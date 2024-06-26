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
    <li
      onClick={() => handleSelectCountry(country)}
      className="p-4 transition-transform transform bg-white border border-green-500 rounded-lg shadow-md hover:shadow-lg"
    >
      <img src={country.flags.png} className="w-20 h-auto p-2 mx-auto mb-4" />
      <h3 className="mb-2 text-xl font-semibold">{country.name.common}</h3>
      <p className="text-gray-600">{country.capital}</p>
    </li>
  );
};

export default CountryCard;
