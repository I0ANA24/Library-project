const myLibrary = [];

let newBookButton = document.getElementById("new-button");
let addContainer = document.getElementById("add-container");
let closeButton = document.getElementById("close-button");

function toggleHide() {
    newBookButton.addEventListener("click", () => {
        addContainer.classList.toggle("hide");
    });
    
    closeButton.addEventListener("click", () => {
        addContainer.classList.toggle("hide");
    });
}

toggleHide();