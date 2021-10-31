// element variables
const textArea = document.querySelector("#textArea");
const upperBtn = document.querySelector("#upCase");
const lowerBtn = document.querySelector("#loCase");
const stBtn = document.querySelector("#stCase");
const toggleBtn = document.querySelector("#toggleCase");
const copyBtn = document.querySelector("#copy");
const clearBtn = document.querySelector("#clear");
let characterLength = document.querySelector("#characterLength");
let wordLength = document.querySelector("#wordLength");
let toggleMode = document.querySelector("#toggleMode");
// event listners
upperBtn.addEventListener("click", () => {
  textArea.style.textTransform = "uppercase";
});
lowerBtn.addEventListener("click", () => {
  textArea.style.textTransform = "lowercase";
});
stBtn.addEventListener("click", () => {
  // textArea.style.textTransform ="sentencecase";
});

copyBtn.addEventListener("click", () => {
  // textArea.style.textTransform ="sentencecase";
  textArea.select();
  textArea.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textArea.value);
});
clearBtn.addEventListener("click", () => {
  textArea.value = "";
});
function change() {
  console.log(textArea.value);
}
// textArea.addEventListener("change",()=>{
//     console.log(textArea.value)
//     characterLength.innerHTML = textArea.value.length + "Characters";
// });
wordLength.addEventListener("click", () => {
  textArea.value = "";
});

//change to dark mode
let darkMode = false;

toggleMode.addEventListener("click", () => {
  if (darkMode = false) {
    document.body.style.background = "white";
   return darkMode = true;
    
  } else {
    document.body.style.background = "black";
  return  darkMode = false;
  }
});
