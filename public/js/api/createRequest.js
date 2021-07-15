const createRequest = (options = {
  url: 'https://example.com',
  data: {},
  method: '',
  callback: (err, response) => {
    console.log('Ошибка, если есть', this.err);
    console.log('Данные, если нет ошибки', this.response);
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
    let urlString = `https://example.com?`
    for (let i = 0; i < keys.length; i++) {
      urlString += `${keys[i]}=${values[i]}&`;
    }
    const url = urlString.substring(0, urlString.length - 1);
    xhr.open(this.method, url);
    xhr.send();

  } else {
    formData = new FormData;
    for (let i = 0; i < keys.length; i++) {
      formData.append(keys[i], values[i]);
    }
    xhr.open(this.method, 'https://example.com');
    xhr.send(formData);
  }
};