class Entity {
  
  static URL = '';

  static list(data, callback) {
    return createRequest({
      data,
      url: this.URL,
      method: 'GET',
      callback
    })
  }

  static create(data, callback) {
    return createRequest({
      data,
      url: this.URL,
      method: 'PUT',
      callback
    })
  }

  static remove(data, callback) {
    return createRequest({
      data,
      url: this.URL,
      method: 'DELETE',
      callback
    });
  }
}