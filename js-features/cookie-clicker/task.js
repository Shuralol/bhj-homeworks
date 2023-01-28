const cookie = document.getElementById("cookie");

let clicker__counter = document.getElementById("clicker__counter");
let number = 0;
cookie.onclick = function () {
  number += 1;
};

let count = 0;
cookie.onclick = function () {
  if (count % 2 === 0) {
    cookie.width = 500;
  } else {
    cookie.width = 300;
  }
  count++;
  clicker__counter.textContent = count;
};
