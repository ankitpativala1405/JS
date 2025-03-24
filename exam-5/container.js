let conatainer = JSON.parse(localStorage.getItem("news")) || [];

const getvalue = (id) => {
  return document.getElementById(id).value;
};

document.getElementById("myform").addEventListener("submit", (event) => {
  event.preventDefault();

  let news = {
    title: getvalue("title"),
    image1: getvalue("image1"),
    image2: getvalue("image2"),
    containt: getvalue("containt"),
    id: Date.now(),
  };

  conatainer.push(news);

  localStorage.setItem("news", JSON.stringify(conatainer));

  uimaker(conatainer);
});

const uimaker = (conatainer) => {
  const containerElement = document.getElementById("conatainer");
  containerElement.innerHTML = "";

  conatainer.forEach((news) => {
    let title = document.createElement("h1");
    title.innerHTML = news.title;

    let image1 = document.createElement("img");
    image1.src = news.image1;

    let image2 = document.createElement("img");
    image2.src = news.image2;

    let containt = document.createElement("p");
    containt.innerHTML = news.containt;

    let div = document.createElement("div");
    div.append(title, image1, image2, containt);

    containerElement.append(div);
  });
};

uimaker(conatainer);
