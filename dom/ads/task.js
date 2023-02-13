const span = Array.from(document.querySelectorAll(".rotator__case "));
console.log(span);

let counter = 0;

setInterval(() => {
  span[counter].classList.remove("rotator__case_active");
  counter === span.length - 1 ? (counter = 0) : counter++;
  span[counter].classList.add("rotator__case_active");
}, 1000);
