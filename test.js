// Get a reference to the button element
const addButton = document.getElementById("add-button");

// Add a click event listener to the button
addButton.addEventListener("click", function() {
  // Create a new list item element
  const newListItem = document.createElement("li");
  newListItem.textContent = "This is a new list item!";

  // Get a reference to the list element where you want to add the item
  const list = document.getElementById("my-list");

  // Append the new list item to the list element
  list.appendChild(newListItem);
});




// Get a reference to the element with the ID "welcome-message"
const messageElement = document.getElementById("welcome-message");

// Change the content of the element
messageElement.textContent = "Hello, there! Welcome to the website.";
