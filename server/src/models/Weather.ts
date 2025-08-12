export interface WeatherDB {
  cod: string;
  calctime: number;
  cnt: number;
  list: CityWeather[];
}

export interface CityWeather {
  id: number;
  name: string;
  coord: {
    Lon: number;
    Lat: number;
  };
  main: {
    temp: number;
    feels_like?: number;
    pressure: number;
    humidity: number;
    temp_min?: number;
    temp_max?: number;
    sea_level?: number;
    grnd_level?: number;
  };
  dt: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  sys: {
    country: string;
    population?: number;
  };
  rain?: {
    [prop: string]: number;
  };
  snow?: {
    [prop: string]: number;
  };
  clouds: {
    all: number;
  };
  weather: WeatherDescription[];
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}
