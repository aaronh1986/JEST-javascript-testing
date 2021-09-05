fetch('https://jsonplaceholder.typicode.com/photos/70')
  .then(response => response.json())
  .then(json => console.log(json))