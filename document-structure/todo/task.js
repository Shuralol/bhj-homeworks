const taskAdd = document.getElementById("tasks__list");
console.log(taskAdd);
const addSubmit = document.getElementById("tasks__add");
const inputAdd = document.getElementById("task__input");
console.log(inputAdd);

const getNewTask = (e) => {
  e.preventDefault();
 
  if (inputAdd.value.trim().length) {
    const text = document.createElement("div");
    text.insertAdjacentHTML(
      "beforeEnd",
      `<div class="task">
      <div class="task__title">
        ${inputAdd.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
      </div> `
    );
    taskAdd.prepend(text);
    inputAdd.value = "";
    const removeBtn = text.querySelector(".task__remove");
    removeBtn.addEventListener("click", () => text.remove());
  }
};

addSubmit.addEventListener("click", getNewTask);
