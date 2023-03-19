const cell = document.createElement("div");
cell.classList.add("cell");
const box = 48;
// cell.innerHTML = "data";
for (let i = 0; i < box; i++) {
  for (let j = 0; j < box; j++) {
    document
      .querySelector(".grid")
      .insertAdjacentHTML("beforeend", `<div class = "${i}-${j} cell"></div>`);
  }
}
let color = "black";
document.addEventListener("keydown", (e) => {
  if (e.key == "enter") color = document.getElementById("box").value;
});
document.querySelector(".btn").addEventListener("click", () => {
  color = document.getElementById("box").value;
});
document.querySelector(".grid").addEventListener("click", (e) => {
  console.log(color);
  console.log(e.target);
  if (!e.target.classList.contains("grid"))
    e.target.style.backgroundColor = color;
});