const checkbox1 = Array.from(document.querySelectorAll(".interest__check"));

checkbox1.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const li = e.target.closest("LI");
    const ul = li.querySelector("UL");
    const check = e.target.checked;
    if (ul) {
      const input = ul.querySelectorAll("INPUT");
      input.forEach((item) => (item.checked = check));
    }
    const liParent = li.closest("UL").closest("LI");
    if (liParent) {
      const arrInput = Array.from(
        li.closest("UL").querySelectorAll(".interest__check")
      );
      if (arrInput) {
        if (arrInput.every((item) => item.checked === check)) {
          liParent.querySelector("INPUT").indeterminate = false;
          liParent.querySelector("INPUT").checked = check;
        } else {
          liParent.querySelector("INPUT").indeterminate = true;
        }
      }
    }
  });
});
