/* const minusPlus = document.querySelector(
  ".product__quantity-controls"
).children;
console.log(minusPlus[0]);

const minusPlus1 = document.querySelectorAll(".product__quantity-controls");
 console.log(minusPlus1);


minusPlus[0].addEventListener("click", function () {
  console.log("минус клик");
  if (parseInt(minusPlus[1].innerText) > 1) {
    minusPlus[1].innerText = --minusPlus[1].innerText;
  }
});

minusPlus[2].addEventListener("click", function () {
  console.log("плюс клик");
  minusPlus[1].innerText = ++minusPlus[1].innerText;
}); */





 window.addEventListener("click", function (event) {
  if (event.target/*тут должен быть dataset.и что то еще  */) {
    console.log("клик виндов");

    console.log(event.target);

    const counterWrapper = event.target.closest(".product__quantity-controls");

    const counter = counterWrapper.querySelector(".product__quantity-value");
 console.log(counter)
    counter.innerText = ++counter.innerText;
  }
  if(event.target/*тут должен быть dataset.и что то еще  */) {
    counter.innerText = --counter.innerText;
  }
}); 
