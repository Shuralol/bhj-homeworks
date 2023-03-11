const allTips = Array.from(document.querySelectorAll(".has-tooltip"));

const toolTipsCreate = (item) => {
  const title = item.title;
  item.title = "";
  const objPos = item.getBoundingClientRect();
  item.insertAdjacentHTML("afterend", `<div class='tooltip'>${title}</div>`);
  const toolTipEl = item.nextElementSibling;
  toolTipEl.style.left = objPos.x + "px";
  toolTipEl.style.top = objPos.y + 20 + "px";
};

const toolTipsActive = (e) => {
  e.target.nextElementSibling.classList.toggle("tooltip_active");
};

allTips.map((item) => toolTipsCreate(item));
allTips.map((item) => item.addEventListener("click", toolTipsActive));
