import axios from 'axios'

const SWAPI_URL = 'https://swapi.dev/api/'

export function getStarships (page = 1) {
  return axios.get(`${SWAPI_URL}starships/?page=${page}`)
}

export function getStarship (id) {
  return axios.get(`${SWAPI_URL}starships/${id}/`)
}
