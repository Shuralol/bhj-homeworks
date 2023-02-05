const clickEl = document.querySelectorAll(".menu__link");

clickEl.forEach((item) => {
  item.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    const ul = li.querySelector("ul");
    if (ul) {
      event.preventDefault();
      ul.classList.toggle("menu_active");
    }
  });
});
