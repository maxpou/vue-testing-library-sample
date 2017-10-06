class Axios {
  get (url) {
    return import('../api/swapi.response.json')
      .then(data => Promise.resolve({ status: 200, statusText: 'OK', data: data }))
  }
}

export default new Axios()
