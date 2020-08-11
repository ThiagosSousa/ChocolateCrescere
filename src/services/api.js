import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  //baseURL: 'http://localcost:3000/',
});

export default api;
