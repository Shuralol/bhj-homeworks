/* const minusPlus = document.querySelector(
  ".product__quantity-controls"
).children;
console.log(minusPlus[0]); */

/* const minusPlus1 = document.querySelectorAll(
  ".product__quantity-controls"
); */ /* .nextSibling */ /* console.log(minusPlus1); 

 const aaa = minusPlus1.querySelectorAll(".product__quantity-control product__quantity-control_dec")
console.log(aaa) 

/*   const minusPlus2 = document.querySelector(
    ".product__quantity-controls"
  ).lastChild;
  console.log(minusPlus2);

const minus = document.querySelectorAll("product__quantity-control product__quantity-control_dec")
console.log(minus) */

/* minusPlus[0].addEventListener("click", function () {
  console.log("минус клик");
  if (parseInt(minusPlus[1].innerText) > 1) {
    minusPlus[1].innerText = --minusPlus[1].innerText;
  }
});

minusPlus[2].addEventListener("click", function () {
  console.log("плюс клик");
  minusPlus[1].innerText = ++minusPlus[1].innerText;
});
 */

window.addEventListener("click", function (event) {
  if (event.target) {
    console.log("клик виндов");

    console.log(event.target);

    const counterWrapper = event.target.closest(".product__quantity-controls");

    const counter = counterWrapper.querySelector(".product__quantity-value");

    counter.innerText = ++counter.innerText;
  }
  /* if(event.target) {
    counter.innerText = --counter.innerText;
  } */
});
