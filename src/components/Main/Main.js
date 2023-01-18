import { useFlags} from '../../hooks/useFlags.js';
import { FlagCard } from '../FlagCard/FlagCard.js';

export default function Main() {
    const countries = useFlags();

    return (
        <main>
            {countries.map((country) => (
                <FlagCard key={country.name} {...country} />
            ))}
        </main>
    );
}