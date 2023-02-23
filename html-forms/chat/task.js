const chatClick = document.querySelector(".chat-widget");
console.log(chatClick);

chatClick.addEventListener("click", (elem) => {
  elem.preventDefault();
  chatClick.classList.add("chat-widget_active");
});

const zzz = document.getElementById("chat-widget__input");
console.log(zzz);
const aaa = document.getElementById("chat-widget__messages");
console.log(aaa);

zzz.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    aaa.innerHTML += `<div class="message message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">${zzz.value}</div>
</div>`;
    zzz.value = "";
    arrABV(arr);

    aaa.innerHTML += `
  <div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">
    ${arrABV(arr)}
    </div>
  </div>`;
  }
  console.log(event.key);
});

const arr = [
  "привет",
  "как дела?",
  "какая прекрасная погода",
  "который сейчас час?",
  "чем занимаешься?",
  "вчера шел дождь",
  "за окном идет снег",
  "саша у клары",
  "украла коралы",
  "всем привет я ChatGPT",
];
function arrABV(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  let rValue = arr[rand];
  return rValue;
}

let time = new Date().toLocaleTimeString().slice(0, -3);
console.log(Date());
