import { db } from "../db/database";

export const filterWeatherByLetter = async (letter: string) => {
  // Filter the database
  const filteredResults = db.list
    .filter((cityWeather) =>
      cityWeather.name.toLowerCase().startsWith(letter.toString().toLowerCase())
    )
    .map((cityWeather) => cityWeather.name);


  return filteredResults;
};
