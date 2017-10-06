class Axios {
  get (url) {
    const data = import('../api/swapi.response.json')
    return Promise.resolve({ status: 200, statusText: 'OK', data: data })
  }
}

export default new Axios()
