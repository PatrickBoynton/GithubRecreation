(function() {
  'use strict';
  const BASE_URL = "https://api.github.com/users/PatrickBoynton";
  const GITHUB_TOKEN = "";

  fetch(`${BASE_URL}`, {
    headers: {
      Authorization: "8a0aedf8f922034f559aba3cb0b9e92e8d6339dd"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data));

}());
