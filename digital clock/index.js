setInterval(() => {
  let date = new Date();

  let hour=date.getHours()
  if(hour>=12){
    innerhtmlampm="PM"
  }
  else{
    innerhtmlampm="AM"
  }

  if(hour>12){
    innerhtmlhour=date.getHours()-12
  }
  else{
    innerhtmlhour=date.getHours()
  }

  document.getElementById("shawdate").innerHTML = date.getDate();
  document.getElementById("shawmonth").innerHTML = date.getMonth() + 1;
  document.getElementById("shawyear").innerHTML = date.getFullYear();
  document.getElementById("shawhour").innerHTML = innerhtmlhour;
  document.getElementById("shawminutes").innerHTML = date.getMinutes();
  document.getElementById("shawseconds").innerHTML = date.getSeconds();
  document.getElementById("shawmiliseconds").innerHTML = date.getMilliseconds();
  document.getElementById("shawampm").innerHTML = innerhtmlampm;

});
