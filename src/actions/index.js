import axios from 'axios';

//Open Weather API Constants
const API_KEY = '3246e1c0961afd2f11b21d7dfdbd9487';
const API_PATH = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Action Types
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  const url = `${API_PATH}&q=${cityName},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
