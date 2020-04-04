const axios = require("axios");

var URL = "https://jsonplaceholder.typicode.com/posts";

axios
  .get(URL)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
