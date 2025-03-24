let conatainer = JSON.parse(localStorage.getItem("news")) || [];

let data = '';  

for (let i = 0; i < conatainer.length; i++) {
  let news = conatainer[i];
  data += `<div id="datalist">
           <h1>${news.title}</h1>
           <img src="${news.image1}" alt="">
           <img src="${news.image2}" alt="">
           <p>${news.containt}</p>
           </div>`;
}


document.getElementById("datalist").innerHTML = data;
