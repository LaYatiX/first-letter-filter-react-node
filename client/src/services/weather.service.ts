const baseUrl = import.meta.env.PROD ? "" : "http://localhost:5000";

export const getWeatherData = async (letter: string) => {
  const res = await fetch(`${baseUrl}/api/weather/filter?letter=${letter}`);
  return res.json();
};
