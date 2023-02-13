const clickEl = document.querySelectorAll(".menu__link");

clickEl.forEach((item) => {
  item.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    /* console.log(li) */
    const ul = li.querySelector("ul");
    console.log(ul);
    if (ul) {
      event.preventDefault();
      ul.classList.toggle("menu_active");
    }
  });
});
