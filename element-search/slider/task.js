const next = document.querySelectorAll(".slider__arrow");
const img = Array.from(document.querySelectorAll(".slider__item"));

next.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index === 0) {
      sliderNext("prev");
    } else {
      sliderNext("next");
    }
  });
});

function sliderNext(arrow) {
  let index = img.findIndex(
    (item) => item.classList.contains("slider__item_active") === true
  );
  img[index].classList.remove("slider__item_active");
  if (arrow === "next") {
    index === img.length - 1 ? (index = 0) : index++;
    /* img[index].classList.add("slider__item_active"); */
  }
  if (arrow === "prev") {
    index === 0 ? (index = img.length - 1) : index--;
  }
  img[index].classList.add("slider__item_active");
}
