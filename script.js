const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box"); // This won't update dynamically with new notes.

// Add a function to create new notes.
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    // Set attributes for the note.
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    // Set the delete image.
    img.src = "image/delete.png";
    img.className = "delete-btn"; // Optional: Add a class for styling

    // Append note and delete button properly.
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    // Add an event listener to delete the note when the delete button is clicked.
    img.addEventListener("click", () => {
        notesContainer.removeChild(inputBox);
    });
});
