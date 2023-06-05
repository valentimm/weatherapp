import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?lat=-25.504&lon=-49.291&appid=c55012b21614ac9be3049c8d31875a4f',
});
