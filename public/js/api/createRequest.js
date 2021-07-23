const createRequest = (options = {
 }) => {
  const xhr = new XMLHttpRequest(); 
   //options.callback = () => {};
  xhr.responseType = 'json';
  xhr.widthCredentials = true;
  let keys = [];
  let values = [];
  let urlComplete ='';
  for (item in options.data) {
    keys.push(item);
    values.push(options.data[item]);
  }

  if (options.method === 'GET') {
    let urlString = `${options.url}?`
    for (let i = 0; i < keys.length; i++) {
      urlString += `${keys[i]}=${values[i]}&`;
    }
    urlComplete = urlString.substring(0, urlString.length - 1);
    xhr.open(options.method, urlComplete);
    xhr.send();           
    
  } else {
    formData = new FormData;            
    for (let i = 0; i < keys.length; i++) {
      formData.append(keys[i], values[i]);
    }
    xhr.open(options.method, options.url);
    xhr.send(formData);
  }
   xhr.onload = () => {
    options.callback(null, xhr.response);
 }
};
