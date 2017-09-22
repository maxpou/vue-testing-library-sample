import swapiResponse from '../api/swapi.response.json'

class Axios {
  get (url) {
    const response = { status: 200, statusText: 'OK', data: swapiResponse }
    return Promise.resolve(response)
  }
}

export default new Axios()
