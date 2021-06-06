var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");
var circle = document.querySelector("#circle");
var btn = document.querySelector("#btn");
var code = document.querySelector("#code");
var pallette = document.querySelector("#pallette");
var save = document.querySelector("#save");
var color = document.querySelector(".color");
var text = document.querySelector("#text");

var currentColor = "rgb(255, 255, 255)";
var palletteColor = "rgb(255, 255, 255)";

btn.addEventListener("click", function () {
  currentColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  circle.style.backgroundColor = currentColor;
  circle.style.cursor = "pointer";
  code.textContent = currentColor;
});

circle.addEventListener("click", function () {
  palletteColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  pallette.innerHTML += `
  <div id="inside">
  <div class="color">
      <div style="background-color:${palletteColor};" id="save"></div>
      <h5 id="text">${palletteColor}</h5>
  </div>
</div>
    `;
});
