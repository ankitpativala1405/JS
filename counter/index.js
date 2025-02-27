let countprojects = 0;
let valueofprojects = Number(document.getElementById("projects").innerHTML);
let counterprojects = setInterval(() => {
  countprojects++;
  document.getElementById("projects").innerHTML = countprojects;
  if (countprojects === valueofprojects) {
    clearInterval(counterprojects);
  }
}, 50);

let counthappyclients = 0;
let valueofhappyclients = Number(
  document.getElementById("happyclients").innerHTML
);
let counterhappyclients = setInterval(() => {
  counthappyclients++;

  document.getElementById("happyclients").innerHTML = counthappyclients;
  if (counthappyclients === valueofhappyclients) {
    clearInterval(counterhappyclients);
  }
}, 50);

let counttrainedstudents = 0;
let valueoftrainedstudents = Number(
  document.getElementById("trainedstudents").innerHTML
);
let countertrainedstudents = setInterval(() => {
  counttrainedstudents++;

  document.getElementById("trainedstudents").innerHTML = counttrainedstudents;
  if (counttrainedstudents === valueoftrainedstudents) {
    clearInterval(countertrainedstudents);
  }
}, 50);

let countvisitedcountries = 0;
let valueofvisitedcountries = Number(
  document.getElementById("visitedcountries").innerHTML
);
let countervisitedcountries = setInterval(() => {
  countvisitedcountries++;

  document.getElementById("visitedcountries").innerHTML = countvisitedcountries;
  if (countvisitedcountries === valueofvisitedcountries) {
    clearInterval(countervisitedcountries);
  }
}, 50);
