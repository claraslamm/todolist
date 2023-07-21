const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if(inputBox.value === '') { //if input box is empty
    alert("You must write something!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; //reset to default on input box
  saveData();
}

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") { //if we click on LI
    e.target.classList.toggle("checked"); //shd add checked
    saveData();
  }
  else if(e.target.tagName === "SPAN") { // if we click on span elem
    e.target.parentElement.remove(); //remove elem
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();