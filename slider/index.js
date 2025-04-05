let slider = document.getElementById("mySlider");
let sliderValue = document.getElementById("sliderValue");

slider.oninput = function() {
  sliderValue.textContent = this.value;
}