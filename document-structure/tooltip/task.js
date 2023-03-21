const counters = document.querySelectorAll(".product__quantity-value");

counters.forEach((count) => {
  const minus = count
    .closest(".product")
    .querySelector(".product__quantity-control_dec");
  const plus = count
    .closest(".product")
    .querySelector(".product__quantity-control_inc");

  minus.addEventListener("click", () => {
    if (parseInt(count.innerText) > 1) {
      --count.innerText;
    }
  });

  plus.addEventListener("click", () => {
    ++count.innerText;
  });
});

const arrSetBasket = document.querySelectorAll(".product__add");
const arrBasket = document.querySelectorAll(".product");
const contBasket = document.querySelector(".cart__products");

arrBasket.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("cart__product");
  div.dataset.id = index + 1;
  const img = item.querySelector(".product__image").src;
  const count = 0;
  div.innerHTML = `
  <img class="cart__product-image" src=${img}>
  <div class="cart__product-count">${count}</div>
  `;
  div.hidden = true;
  contBasket.append(div);
});

const renderBasket = (count, id) => {
  const arrProduct = Array.from(document.querySelectorAll(".cart__product"));
  const product = arrProduct.filter((item) => item.dataset.id === id)[0];
  const val = product.querySelector(".cart__product-count");
  val.innerHTML = +val.innerHTML + +count;
  product.hidden = false;
};

const getDataCard = (e) => {
  const count = e.target.previousElementSibling.querySelector(
    ".product__quantity-value"
  ).textContent;
  const id = e.target.closest(".product").dataset.id;
  renderBasket(count, id);
};

arrSetBasket.forEach((item) => item.addEventListener("click", getDataCard));
