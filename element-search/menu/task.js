const clickEl = document.querySelectorAll(".menu__link");

clickEl.forEach((item) => {
  item.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    const ul = li.querySelector("ul");
    if (ul) {
      event.preventDefault();
      if (ul.classList.contains("menu_active")) {
        ul.classList.remove("menu_active");
      } else {
        ul.classList.add("menu_active");
      }
    }
  });
});
