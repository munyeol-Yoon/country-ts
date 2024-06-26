import { Country } from "../types/Country.type";

interface Props {
  countries: Country[];
}

function CountryList({ countries }: Props) {
  console.log(countries);

  if (!countries) return <div>Not Found</div>;

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {countries.map((country, index) => (
        <li
          key={index}
          className="p-4 transition-transform transform bg-white rounded-lg shadow-md hover:shadow-lg"
        >
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="w-20 h-auto mx-auto mb-4"
          />
          <h2 className="mb-2 text-xl font-semibold">{country.name.common}</h2>
          <p className="text-gray-600">{country.capital}</p>
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
