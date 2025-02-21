function roll() {
  let diceside = [1, 2, 3, 4, 5, 6];
  let randomn = Math.floor(Math.random() * 6);
  document.getElementById("number").innerHTML = diceside[randomn];
}
