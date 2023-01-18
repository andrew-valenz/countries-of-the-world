import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/fetchCountries.js';

export function useFlags() {
    const [flags, setFlags ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetchCountries();
            setFlags(resp);
        };
        fetchData();
    }, []),
    return flags;
}
