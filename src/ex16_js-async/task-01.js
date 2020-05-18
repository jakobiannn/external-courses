function serverRequest(url = '', method = '', data = null) {
  let xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if(data !== null) {
    xhr.send(data);
  } else {
    xhr.send();
  }
  
  return xhr.response;
}
