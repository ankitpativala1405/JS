let products = JSON.parse(localStorage.getItem("products")) || [];

const getvalue = (id) => {
    return document.getElementById(id).value;
};

document.getElementById("myform").addEventListener("submit", (e) => {
    e.preventDefault();

    let product = {
        title: getvalue("title"),
        price: getvalue("price"),
        image: getvalue("image"),
        category: getvalue("category")
    };

    products.push(product); 

    localStorage.setItem("products", JSON.stringify(products));

    uimaker(products); 

})

const uimaker = (products) => {
    document.getElementById("container").innerHTML = ""
  
    products.forEach((product,index) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = product.title;

        let p = document.createElement("p");
        p.innerHTML = product.price;

        let image = document.createElement("img"); 
        image.src = product.image;

        let category = document.createElement("p");
        category.innerHTML = product.category;

        let dltbtn=document.createElement('button');
        dltbtn.innerHTML="delete"
        dltbtn.addEventListener("click",()=>{
            products.splice(index,1)
            uimaker(products)
            localStorage.setItem("products", JSON.stringify(products));
        })

        let div = document.createElement("div");
        div.append( image, h1, p, category,dltbtn);

        container.append(div); 
    });
};

 uimaker(products)

 document.getElementById("lth").addEventListener("click",()=>{

let temp=products.sort((a,b)=>a.price-b.price)
uimaker(temp)
 })

 document.getElementById("htl").addEventListener("click",()=>{
  let temp= products.sort((a,b)=>b.price-a.price)
  uimaker(temp)
 })

 const filterbycategory=(category)=>{
    if(category=="all"){
        uimaker(products);
      
    }else{
    let temp=products.filter((ele)=>ele.category==category)
    uimaker(temp)}
 }
 document.getElementById("kids").addEventListener("click", () => {
    filterbycategory("kids");
});
document.getElementById("mens").addEventListener("click", () => {
    filterbycategory("mens");
});
document.getElementById("womens").addEventListener("click", () => {
    filterbycategory("womens");
});
document.getElementById("all").addEventListener("click", () => {
    filterbycategory("all");
});