class Axios {
  get (url) {
    const shortUrl = url.replace(process.env.SWAPI_URL, '')

    switch (shortUrl) {
      case 'starships/?page=1': return Promise.resolve({ data: import('../api/swapi.response.json') })
    }
  }
}

export default new Axios()
