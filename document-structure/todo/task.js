const aaa = document.getElementById("tasks__list");
console.log(aaa);

const zzz = document.getElementById("task__input");
console.log(zzz);

const text = document.createElement("div");
console.log(text);

zzz.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    text.insertAdjacentHTML(
      "afterend",
      `<div class="task">
<div class="task__title">
  Сходить в магазин
</div>
<a href="#" class="task__remove">&times;</a>
</div> `
    );
  }
  console.log(event.key);
  
});
