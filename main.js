(function() {
  'use strict';
  const BASE_URL = "https://api.github.com/users/PatrickBoynton";
  const GITHUB_TOKEN = "8a0aedf8f922034f559aba3cb0b9e92e8d6339dd";

  const generateHTML = (data) => {
    const source = document.querySelector("#profile").innerHTML;
    const template = Handlebars.compile(source);
    const context = data;
    const html = template(context);

    document.querySelector(".profile-container").innerHTML = html;
  }

  fetch(`${BASE_URL}`, {
    headers: {
      Authorization: GITHUB_TOKEN
    }
  })
  .then(response => response.json())
  .then(data => generateHTML(data));

}());
