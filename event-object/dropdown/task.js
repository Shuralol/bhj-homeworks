const dropdown = document.querySelectorAll(".dropdown__value");
const arr = Array.from(document.querySelectorAll(".dropdown__link"));

arr.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const text = event.target.textContent;
    const parent = event.target.closest(".dropdown");
    const div = parent.querySelector(".dropdown__value");
    div.textContent = text;
  });
});

dropdown.forEach((item) => {
  item.addEventListener("click", (event) => {
    const li = event.target.closest(".dropdown");
    const ul = li.querySelector("ul");
    if (ul) {
      event.preventDefault();
      ul.classList.toggle("dropdown__list_active");
    }
  });
});
