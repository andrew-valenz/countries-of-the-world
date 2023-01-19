import { useCountries } from '../../hooks/useCountries.js';
import CountryCard from '../CountryCard/CountryCard.js';
import Select from '../../Select/Select.js';
import { useState } from 'react';

export default function Main() {
  const { countries } = useCountries();
  const [select, setSelect] = useState('');
  const filterContinent = () => {
    return countries.filter((country) => country.continent === select);
  };
  return (
    <>
      <Select setSelect={setSelect} />
      <main>
        {filterContinent().map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </main>
    </>
  );
}
