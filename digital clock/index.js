setInterval(() => {
  let date = new Date();

  document.getElementById("shawdate").innerHTML = date.getDate();
  document.getElementById("shawmonth").innerHTML = date.getMonth() + 1;
  document.getElementById("shawyear").innerHTML = date.getFullYear();
  document.getElementById("shawhour").innerHTML = date.getHours();
  document.getElementById("shawminutes").innerHTML = date.getMinutes();
  document.getElementById("shawseconds").innerHTML = date.getSeconds();
  document.getElementById("shawmiliseconds").innerHTML = date.getMilliseconds();
});
