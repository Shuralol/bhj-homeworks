let modal = document.getElementById("modal_main");
let modal1 = document.getElementById("modal_success");
let close = document.getElementsByClassName("modal__close_times");

close[0].onclick = function () {
  modal.classList.remove("modal_active");
};
close[1].onclick = function () {
  modal1.classList.remove("modal_active");
};

let click = document.querySelector(".show-success");
click.onclick = function () {
  modal.classList.remove("modal_active");
  modal1.classList.add("modal_active");
  return false;
};
