const div = Array.from(document.querySelectorAll(".reveal"));
console.log(div);

window.addEventListener("scroll", () => {
  div.forEach((elem) => {
    const { top, bottom } = elem.getBoundingClientRect();
    if (top > 0 && bottom < window.innerHeight) {
      elem.classList.add("reveal_active");
    }
  });
});

