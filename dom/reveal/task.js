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

/* div.forEach((item) => {
  item.addEventListener("scroll", () => {
    item.addEventListener.window.innerHeight()
  });
});
 */
/* function isVisible(el) {
  const { top, bottom } = el.getBoundingClientRect();

  if (bottom <0 ) {
    div.classList.remove("reveal_active");
  }

  if (top > window.innerHeight) {
    div.classList.add("reveal_active");
  }
}

setInterval(() => {
  console.log(isVisible(div));
}, 1000);
 */

/* setInterval(() => {
  const { top, bottom } = div.getBoundingClientRect();
  console.log(top, bottom);
  div.classList.add("reveal_active");
}, 1000); */
