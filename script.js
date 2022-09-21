var addBtn = document.getElementById("add-btn");
var input = document.getElementById("user-input");
var ul = document.getElementsByTagName("ul")[0];
var emptyList = document.getElementById("empty");

// Check length of input field
function inputLength() {
  return input.value.length;
}

// Check how many li elements exist
function checkList() {
  return document.getElementsByTagName("li").length;
}

// Create new list item
function createListElement() {
// Create li element, style it and append it to ul
  var listElement = document.createElement("li");
  listElement.classList.add("list-item");
  listElement.append(document.createTextNode(input.value));
  ul.append(listElement);
  input.value = "";

// Create delete button, style it and append it to li
  var delBtn = document.createElement("button");
  delBtn.textContent = "\u00D7";
  delBtn.classList.add("del-btn");
  listElement.append(delBtn);
  
  // Hide empty list text if li's exist
  if (checkList() > 0) {
    emptyList.style.display = "none";
  }
  
  // Toggle line-through on click
  function toggleDone() {
    listElement.classList.toggle("done");
  }
  
  // Delete item
  function deleteItem() {
    listElement.remove();
    if (checkList() === 0) {
      emptyList.style.display = "block";
    }
  }
  
  listElement.addEventListener("click", toggleDone);
  delBtn.addEventListener("click", deleteItem);
}

// On click
function clickArrow() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// On keypreass enter
function pressEnter(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

addBtn.addEventListener("click", clickArrow);
input.addEventListener("keypress", pressEnter);
