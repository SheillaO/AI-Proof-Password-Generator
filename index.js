

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
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
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function getCharacters() {
  let randomCharacter = Math.floor(Math.random() * characters.length);
  return characters[randomCharacter];
}

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let savedPasswordEl = document.getElementById("saved-password")
let passwordLength = 15
let copiedCount = 0
let passwordHistory = []

function updateLength() {
    let slider = document.getElementById("length-slider")
    passwordLength = slider.value
    document.getElementById("length-display").textContent = passwordLength
}

function generatePasswords() {
  let pass1 = generatePassword();
  let pass2 = generatePassword();

  password1El.textContent = pass1;
  password2El.textContent = pass2;

  passwordHistory.push(pass1);
  if (passwordHistory.length > 5) {
    passwordHistory.shift();
  }
  updateHistory();
}

function generatePassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += getCharacters();
  }
  return password;
}

function updateHistory() {
  let historyEl = document.getElementById("history");
  if (historyEl && passwordHistory.length > 0) {
    historyEl.textContent = "Recent: " + passwordHistory.join(" • ");
  }
}

function savePassword(password) {
  if (password === "Click generate above") {
    if (savedPasswordEl) {
      savedPasswordEl.textContent = "⚠️ Generate a password first!";
    }
    return;
  }

  
  copiedCount += 1;
  let copyCountEl = document.getElementById("copy-count");
  if (copyCountEl) {
    copyCountEl.textContent = copiedCount + " passwords copied";
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(password)
      .then(function () {
        if (savedPasswordEl) {
          savedPasswordEl.textContent = "✅ Copied: " + password;
        }
      })
      .catch(function (err) {
        if (savedPasswordEl) {
          savedPasswordEl.textContent =
            "📋 Password: " + password + " (Copy manually)";
        }
      });
  } else {
    if (savedPasswordEl) {
      savedPasswordEl.textContent =
        "📋 Password: " + password + " (Copy manually)";
    }
  }
}




