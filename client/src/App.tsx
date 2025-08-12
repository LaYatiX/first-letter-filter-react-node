import { useCallback, useMemo, useState, type ChangeEvent } from 'react';
import './App.css';
import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from './services/weather.service';

function useData(letter: string) {
  return useQuery<string[]>({
    queryKey: ['letter', letter],
    queryFn: () => getWeatherData(letter),
    enabled: !!letter,
  })
}

function App() {
  const [inputValue, setInputValue] = useState<string>('');

  const { data, error, isFetching } = useData(inputValue);

  const handleInputChange = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    const letter = event.target.value;
 
    if (letter === '') {
      setInputValue(letter);
      return;
    }

    // If the input is not a single letter, do nothing further
    // The `maxLength="1"` on the input element also helps enforce this.
    if (!/^[aA-zZ]$/.test(letter)) {
      return;
    }

    setInputValue(letter);
  }, [])

  const citiesCount = useMemo(() => {
    return data?.length
  }, [data])

  return (
    <div>
      <header>
        <h1>Cities Name Filter</h1>
        <label htmlFor="letter">Enter a single letter to find matching names.</label>
        <input
          type="text"
          id="letter"
          name="letter"
          value={inputValue}
          onChange={handleInputChange}
          maxLength={1}
          placeholder="Type a letter..."
          className="filter-input"
        />
        <div>
          {isFetching && <p>Loading...</p>}
          {error && <p>An error occurred while filtering cities.</p>}
          {!isFetching && !error && !!data?.length && data?.length > 0 && (
            <p>Cities count that starts with "<strong>{inputValue}</strong>": {citiesCount}.</p>
          )}
          {!isFetching && !error && data?.length === 0 && inputValue.length > 0 && (
            <p>No cities that starts with "<strong>{inputValue}</strong>".</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;