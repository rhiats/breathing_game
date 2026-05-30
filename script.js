const circle = document.getElementById("circle");
const instruction = document.getElementById("instruction");
const startBtn = document.getElementById("startBtn");

function startBreathing() {

  instruction.innerText = "Breathe In";
  circle.classList.add("expand");

  setTimeout(() => {
    instruction.innerText = "Hold";

    setTimeout(() => {
      instruction.innerText = "Breathe Out";
      circle.classList.remove("expand");

    }, 2000);

  }, 4000);
}

startBtn.addEventListener("click", () => {

  startBreathing();

  setInterval(startBreathing, 10000);
});