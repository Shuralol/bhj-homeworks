const taskAdd = document.getElementById("tasks__list");
console.log(taskAdd);
const addSubmit = document.getElementById("tasks__add");
const inputAdd = document.getElementById("task__input");
console.log(inputAdd);
const text = document.createElement("div");
console.log(text);

addSubmit.addEventListener("click", function (event) {
  event.preventDefault();
});

inputAdd.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && this.value != "") {
    event.preventDefault();
    text.insertAdjacentHTML(
      "beforeEnd",
      `<div class="task">
<div class="task__title">
  Сходить в магазин
</div>
<a href="#" class="task__remove">&times;</a>
</div> `
    );

    document.body.append(text);
    const close = document.querySelector(".task__remove");
    console.log(close);
    const div = document.querySelector(".task");
    console.log(div);

    close.addEventListener("click", function () {
      text.remove();
    });
  }
});
