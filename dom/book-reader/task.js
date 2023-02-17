const book = document.getElementById("book");

const boxSize = document.querySelector(".book__control_font-size");
const arrLinkSize = Array.from(boxSize.querySelectorAll("a.font-size"));

arrLinkSize.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    arrLinkSize.forEach((elem) => {
      elem.classList.remove("font-size_active");
    });
    item.classList.add("font-size_active");
    const zzz = book.classList.value.split(" ")
    const arrList = book.classList.value.split(" ");
    arrList.forEach((elem) => {
      if (elem.includes("book_fs")) {
        book.classList.remove(elem);
      }
    });
    if (item.dataset.size) {
      book.classList.add("book_fs-" + item.dataset.size);
    }
  });
});
