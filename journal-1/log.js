// import ".styles.css";
import buildingsData from "./list.js";

// Some constant strings
const SECURITY_CHECK = " CONDUCTS SECURITY CHECK AT BLDG. ";
// const AIO = ". ALL IN ORDER.";
const HOURS = "HRS ";

const TRANSPORT = " CONDUCTS TRANSPORT REF. SHIFT CHANGE.";

// Textbox objects
const hoursSC_1 = document.getElementById("hoursSC_1");
const hoursSC_2 = document.getElementById("hoursSC_2");
const hoursTP_1 = document.getElementById("hoursTP_1");
const hoursTP_2 = document.getElementById("hoursTP_2");
const building = document.getElementById("bldg");
const outputBox = document.getElementById("outputBox");
let invalidBoxCount = 0;

// Event objects
const sortBox = document.getElementById("sortbutton");
const SCmerge = document.getElementById("scmergebutton");
const TPmerge = document.getElementById("tpmergebutton");
const clear = document.getElementById("clearbutton");
const copyText = document.getElementById("copybutton");

// Helper functions
function justSort(arr) {
  return arr.slice(0).sort();
}

function SCmergeText() {
  const hoursSCValue = hoursSC_1.value + "-" + hoursSC_2.value;
  const patrol = document.getElementById("patrol-sc");
  const patrolValue = patrol.options[patrol.selectedIndex].value;
  const buildingValue = buildingsData[building.value];
  const fullText =
    hoursSCValue + HOURS + patrolValue + SECURITY_CHECK + buildingValue + ".";
  return fullText;
}

function TPmergeText() {
  const hoursTPValue = hoursTP_1.value + "-" + hoursTP_2.value;
  const patrol = document.getElementById("patrol-tp");
  const patrolValue = patrol.options[patrol.selectedIndex].value;
  const fullText = hoursTPValue + HOURS + patrolValue + TRANSPORT;
  return fullText;
}

// Event handlers
if (SCmerge) {
  SCmerge.addEventListener("click", onSCMergeClick);
}

if (TPmerge) {
  TPmerge.addEventListener("click", onTPMergeClick);
}

if (clear) {
  clear.addEventListener("click", onClearClick);
}

if (sortBox) {
  sortBox.addEventListener("click", onSortBoxClick);
}

if (copyText) {
  copyText.addEventListener("click", onCopyTextClick);
}

// Event functions
function onSCMergeClick(event) {
  if (invalidBoxCount === 0) {
    const line = SCmergeText();
    outputBox.value += line + "\n";
  }
  // lineArray.push(line);
}

function onTPMergeClick(event) {
  if (invalidBoxCount === 0) {
    const line = TPmergeText();
    outputBox.value = line + "\n";
  }
}

function onClearClick(event) {
  hoursSC_1.value = "";
  hoursSC_2.value = "";
  building.value = "";
  outputBox.value = "";
}

function onSortBoxClick() {
  const lineArray = outputBox.value.split("\n");
  const temp = lineArray.map(str => [str.slice(0, 9), str.slice(9)]);
  const sortedTemp = justSort(temp);
  const almostArray = sortedTemp.map(element => element.join(""));
  const finalArray = almostArray.join("\n");
  outputBox.value = finalArray + "\n";
}

function onCopyTextClick() {
  outputBox.select();
  document.execCommand("copy");
  alert("Copied in clipboard.");
}
