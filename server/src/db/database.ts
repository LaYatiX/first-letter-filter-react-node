import { WeatherDB } from "../models/Weather";

export let db: WeatherDB;

export const connect = async (callback: (error?: Error) => void) => {
  if (!process.env.DB_URL) {
    console.error(`DB_URL environment variable is not set.`);
    process.exit(1);
  }

  fetch(process.env.DB_URL)
    .then((data) => data.json())
    .then((data) => {
      db = data;
    })
    .then(() => {
      callback();
    })
    .catch((error) => callback(error));
};

export default {
  connect,
};
