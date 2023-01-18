import { useCountries } from '../../hooks/useCountries.js';
import CountryCard from '../CountryCard/CountryCard.js';

export default function Main() {
  const countries = useCountries();

  return (
    <main>
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </main>
  );
}
