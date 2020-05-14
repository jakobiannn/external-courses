async function postData(methodType = '', url = '', data = {}) {
  if (methodType === 'POST') {
    const response = await fetch(url, {
      method: methodType, 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  } else if (methodType === 'GET') {
    const response = await fetch(url, {
      method: methodType, 
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  return await response.json();  
}