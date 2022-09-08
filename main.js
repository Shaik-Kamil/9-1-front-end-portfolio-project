const url = `https://v6.exchangerate-api.com/v6/0c6e375cb6d28cd0665322a9/latest/USD`;

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
