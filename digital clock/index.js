
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

  let monthNames = [
    "01", "02", "03", "04", "05", "06", 
    "07", "08", "09", "10", "11", "12"
  ];

  document.getElementById("shawdate").innerHTML = date.getDate();
  document.getElementById("shawmonth").innerHTML = monthNames[date.getMonth()];
  document.getElementById("shawyear").innerHTML = date.getFullYear();
  document.getElementById("shawhour").innerHTML = innerhtmlhour;
  document.getElementById("shawminutes").innerHTML = date.getMinutes();
  document.getElementById("shawseconds").innerHTML = date.getSeconds();
  document.getElementById("shawmiliseconds").innerHTML = date.getMilliseconds();
  document.getElementById("shawampm").innerHTML = innerhtmlampm;

});
