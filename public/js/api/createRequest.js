const createRequest = (options = {
  url: '',
  data: {},
  method: '',
  callback: (err, response) => {
    if (xhr.readystate === xhr.DONE && xhr.status === 200) { 
      const response = xhr.response;                //ЧТО ДЕЛАТЬ С УСПЕШНЫМ RESPONSОМ ТОЖЕ НЕПОНЯТНО, В КОЛЛБЭКЕ КАКОЙ-ТО БАРДАК ТВОРИТСЯ,
                                                    // ПРОВЕРИТЬ УСПЕШНОСТЬ ОТВЕТА И ЗАПИХНУТЬ КУДА-ТО ЕГО ТЕЛО???
    } else {
      console.log(`произошла ошибка${err}`);
    }
  }
}) => {
  const xhr = new XMLHttpRequest(); //ТЕЛО ФУНКЦИИ С ПРОВЕРКОЙ МЕТОДА
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
    try {
      xhr.send();           //ЛОВИМ ОШИБКУ, И НЕПОНЯТНО, ЧТО С НЕЙ ДЕЛАТЬ, НА ВСЯКИЙ СЛУЧАЙ КЛАДЕМ В ПЕРЕМЕННУЮ
    } catch (e) {
          let err = e.name;
    }

  } else {
    formData = new FormData;            
    for (let i = 0; i < keys.length; i++) {
      formData.append(keys[i], values[i]);
    }
    xhr.open(this.method, this.url);
    try {
      xhr.send(formData);
    } catch (e) {
                     //АНАЛОГИЧНАЯ СИТУАЦИЯ, ПИСАТЬ НЕ СТАЛ
    }
  }

};