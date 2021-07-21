
class Entity {
  constructor{
  this.URL = '';
}

  
  static list(data, callback){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', this.URL);
  xhr.send();
  createRequest(data, callback);
  }  

  static create(data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', this.URL);
    xhr.send();
    createRequest(data, callback);
  }

  static remove(data, callback ) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', this.URL);
    xhr.send();
    createRequest(data, callback);
  }
}
