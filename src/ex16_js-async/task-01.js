function serverRequest(url = '', method = '', data = null) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response)
      }
    }
    xhr.onerror = function() {
      reject(xhr.response);
    }
    xhr.send(JSON.stringify(data));
  })
}
