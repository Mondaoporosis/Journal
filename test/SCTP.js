// String to be changed
let str = "original string";
let tmp = "temporary string";

// Textbox objects
const outputBox = document.getElementById("outputBox");

// Event objects
const SC = document.getElementById("seccheck");
const TP = document.getElementById("transport");

// Event handlers
if (SC) {
  SC.addEventListener("click", onSCClick);
}

if (TP) {
  TP.addEventListener("click", onTPClick);
}

// Event functions
function onSCClick(event) {
  str = "SECURITY CHECK";
  outputBox.value = str;
}

function onTPClick(event) {
  str = "TRANSPORT";
  outputBox.value = str;
}
