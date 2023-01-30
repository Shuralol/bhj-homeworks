"use strict";
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
for (let i = 0; i < 9; i++) {
  const hole = getHole(i + 1);
  hole.onclick = function () {
    if (hole.className.includes("hole_has-mole") === true) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }

    if (dead.textContent === "10") {
      alert("Вы победили!");
      dead.textContent = 0;
      lost.textContent = 0;
    } else if (lost.textContent === "5") {
      alert("Вы проиграли");
      dead.textContent = 0;
      lost.textContent = 0;
    }
  };
}

function getHole(index) {
  return document.getElementById(`hole${index}`);
}
