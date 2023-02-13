const arr = Array.from(document.querySelectorAll(".tab"));
const arr1 = Array.from(document.querySelectorAll(".tab__content"));

arr.forEach((item, index) => {
  item.addEventListener("click", () => {
    arr.forEach((elem) => elem.classList.remove("tab_active"));
    item.classList.add("tab_active");
    arr1.forEach((elem) => elem.classList.remove("tab__content_active"));
    arr1[index].classList.add("tab__content_active");
  });
});
