const createRequest = (options = {
  url: '',
  data: {},
  method: '',
  callback: (err, response) => {
    console.log(this.err);
    console.log(this.response);
  }
}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  let keys = [];
  let values = [];
  for (item in data) {
    keys.push(item);
    values.push(data[item]);
  }

  if (this.method === 'GET') {
    let urlString = `${this.url}?`
    for (let i = 0; i < keys.length; i++) {
      urlString += `${keys[i]}=${values[i]}&`;
    }
    const urlComplete = urlString.substring(0, urlString.length - 1);
    xhr.open(this.method, urlComplete);
    xhr.send();

  } else {
    formData = new FormData;
    for (let i = 0; i < keys.length; i++) {
      formData.append(keys[i], values[i]);
    }
    xhr.open(this.method, this.url);
    xhr.send(formData);
  }
};