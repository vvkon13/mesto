class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserInformation() {
    return fetch(`${this.baseUrl}/users/me`,{
      method: 'GET',
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject('Error')
    })
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards `,{
      method: 'GET',
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject('Error')
    })
  }

  setUserInformation ({profileName,profileDescription}) {
    return fetch(`${this.baseUrl}/users/me`,{
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: profileName,
        about: profileDescription
    })
  })
}


  // другие методы работы с API
}

export default Api;


