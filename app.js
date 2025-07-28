let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll(".calculator button");
const toggleBtn = document.getElementById("themeToggle");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleInput(e.target.innerHTML);
  });
});

function handleInput(value) {
  if (value === "=" || value === "Enter") {
    try {
      string = eval(string);
    } catch {
      string = "Error";
    }
    input.value = string;
  } else if (value === "AC" || value === "Delete") {
    string = "";
    input.value = string;
  } else if (value === "DEL" || value === "Backspace") {
    string = string.substring(0, string.length - 1);
    input.value = string;
  } else if (/^[0-9+\-*/.%]$/.test(value) || value === "00" || value === ".") {
    string += value;
    input.value = string;
  }
}

document.addEventListener("keydown", function (e) {
  const key = e.key;
  const validKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "00",
    ".",
    "+",
    "-",
    "*",
    "/",
    "%",
    "Enter",
    "Backspace",
    "Delete",
  ];

  if (validKeys.includes(key)) {
    handleInput(key);
    e.preventDefault();
  } else {
    e.preventDefault();
  }
});

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  document.body.classList.toggle("light");

  toggleBtn.innerText = document.body.classList.contains("light")
    ? "🌙 Dark Mode"
    : "☀️ Light Mode";
});
