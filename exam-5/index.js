let conatainer = JSON.parse(localStorage.getItem("news")) || [];

const uimaker = (conatainer) => {
  let data = "";

  for (let i = 0; i < conatainer.length; i++) {
    let news = conatainer[i];
    data += `<div class="news-item">
               <h1>${news.title}</h1>
               <img src="${news.image1}" alt="">
               <img src="${news.image2}" alt="">
               <p>${news.containt}</p>
               <p>${news.category}</p>
             </div>
             
             `;
  }

  let btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.addEventListener("click", () => {
    let index = conatainer.findIndex((item) => item.id === news.id);
    if (index > -1) {
      conatainer.splice(index, 1);
      localStorage.setItem("news", JSON.stringify(conatainer));
      uimaker(conatainer);
    }
  });

  document.getElementById("datalist").innerHTML = data;
};

uimaker(conatainer);

document.getElementById("sort").addEventListener("change", () => {
  let sortOption = document.getElementById("sort").value;

  if (sortOption === "latest") {
    conatainer.sort((a, b) => b.id - a.id);
  } else if (sortOption === "oldest") {
    conatainer.sort((a, b) => a.id - b.id);
  }

  uimaker(conatainer);
});

document.getElementById("search").addEventListener("input", () => {
  let search = document.getElementById("search").value;

  let filteredData = conatainer.filter(
    (news) =>
      news.title.toLowerCase().includes(search.toLowerCase()) ||
      news.containt.toLowerCase().includes(search.toLowerCase())
  );

  uimaker(filteredData);
});

document.getElementById("category").addEventListener("change", () => {
  let selectedCategory = document.getElementById("category").value;

  if (selectedCategory === "All Categories") {
    uimaker(conatainer);
  } else {
    let filteredData = conatainer.filter(
      (news) => news.category === selectedCategory
    );

    if (filteredData.length === 0) {
      document.getElementById("datalist").innerHTML =
        "<p>No news found for this category.</p>";
    } else {
      uimaker(filteredData);
    }
  }
});
