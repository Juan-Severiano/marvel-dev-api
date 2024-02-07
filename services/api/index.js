import axios from "axios";

const apiKey = import.meta.env.VITE_REACT_APP_MARVEL_API_KEY;
const hash = import.meta.env.VITE_REACT_APP_MARVEL_HASH;

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    ts: 1,
    apikey: apiKey,
    hash: hash,
  },
});

module.exports = {
  api
}
