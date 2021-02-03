(function() {
  'use strict';
  const BASE_URL = "https://api.github.com/users/PatrickBoynton";

  const generateAside = (data) => {
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
  .then(data => generateAside(data));

const generateOrgUrl = (data) => {
  const source = document.querySelector("#orgs").innerHTML;
  const template =  Handlebars.compile(source);
  const context = { orgs: data };
  const html = template(context);
  document.querySelector("#org-url").innerHTML = html;
}

fetch(`${BASE_URL}/orgs`, {
  headers: {
    Authorization: GITHUB_TOKEN
  }
})
.then(response => response.json())
.then(data => generateOrgUrl(data));

const generateRepoList = (data) => {
  const source = document.querySelector("#repo").innerHTML;
  const template = Handlebars.compile(source);
  const context = { repos: data }
  const html = template(context);
  console.log(data);
  document.querySelector(".repos").innerHTML = html;
}

fetch(`${BASE_URL}/repos`, {
  headers: {
    Authorization: GITHUB_TOKEN
  }
})
.then(response => response.json())
.then(data => {generateRepoList(data)});
}());
