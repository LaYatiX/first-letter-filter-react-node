import { WeatherDB } from "../models/Weather";

export let db: WeatherDB;

export const connect = async (callback: (error?: Error) => void) => {
  fetch(
    "https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22"
  )
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
