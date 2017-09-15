import axios from 'axios'

export function getStarships (page = 1) {
  return axios.get(process.env.SWAPI_URL + 'starships/?page=' + page).then(response => response.data)
}
