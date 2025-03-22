let likes = JSON.parse(localStorage.getItem("likes")) || [];

const uimaker = (likes) => {
 
  const wishPage = document.getElementById("wishpage");
  wishPage.innerHTML = ""; 

  likes.map((ele, index) => {
    let h1 = document.createElement("h1");
    h1.innerHTML = ele.title;

    let p = document.createElement("p");
    p.innerHTML = ele.price;

    let image = document.createElement("img");
    image.src = ele.image;

    let category = document.createElement("p");
    category.innerHTML = ele.category;

    let dltbtn = document.createElement("button");
    dltbtn.innerHTML = "delete";
    dltbtn.addEventListener("click", () => {
      likes.splice(index, 1); 
      uimaker(likes);
      localStorage.setItem("likes", JSON.stringify(likes)); 
    });

    let div = document.createElement("div");
    div.append(h1, p, image, category, dltbtn);

    wishPage.append(div);
  });
};


uimaker(likes);
