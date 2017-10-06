class Axios {
  get (url) {
    return import('../api/swapi.response.json')
      .then((data) => {
        const response = { status: 200, statusText: 'OK', data: data }
        return Promise.resolve(response)
      })
  }
}

export default new Axios()
