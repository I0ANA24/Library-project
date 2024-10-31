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

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function submitForm() {
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", e => {
        handleNewBookForm(e);
    });
}

function handleNewBookForm(buttonEvent) {
    let titleInput = document.getElementById("title");
    let authorInput = document.getElementById("author");
    let pagesInput = document.getElementById("nofpages");

    if(!titleInput.checkValidity() || !authorInput.checkValidity() || !pagesInput.checkValidity()) {
        return;
    }

    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;

    addBookToLibrary(title, author, pages);

    let formContainer = document.getElementById("new-book-form");
    buttonEvent.preventDefault();
    addContainer.classList.toggle("hide");
    formContainer.reset();
}

function addBookToLibrary(title, author, pages) {
    let libraryContainer = document.getElementById("container");
    // <div class="book-card">
    //     <h3>The Hobbit</h3>
    //     <p><b>Author:</b> J.R.R. Tolkien</p>
    //     <p><b>Pages:</b> 259</p>
    //     <i class="fa-solid fa-trash" style="color: #97150c; font-size: 1.5em;"></i>
    //     <button class="mark-read">Mark read</button>
    // </div>

    const newBookCard = document.createElement('div');
    newBookCard.classList.toggle("book-card");
    newBookCard.classList.toggle("red-border");
    libraryContainer.appendChild(newBookCard);

    const newTitle = document.createElement('h3');
    newTitle.textContent = title;
    newBookCard.appendChild(newTitle);

    const newAuthor = document.createElement('p');
    const boldText = document.createElement('b');
    boldText.textContent = 'Author: ';
    newAuthor.appendChild(boldText);
    newAuthor.appendChild(document.createTextNode(author));
    newBookCard.appendChild(newAuthor);

    const newPages = document.createElement('p');
    const boldText1 = document.createElement('b');
    boldText1.textContent = 'Pages: ';
    newPages.appendChild(boldText1);
    newPages.appendChild(document.createTextNode(pages));
    newBookCard.appendChild(newPages);

    const newMarkButton = document.createElement('button');
    newMarkButton.classList.toggle("mark-read");
    newMarkButton.textContent = "Mark read";
    newBookCard.appendChild(newMarkButton);

    const newTrashButton = document.createElement('i');
    newTrashButton.classList.toggle("fa-solid");
    newTrashButton.classList.toggle("fa-trash");
    newTrashButton.style.color = "#97150c";
    newTrashButton.style.fontSize = "1.5em";
    newBookCard.appendChild(newTrashButton);

    newTrashButton.addEventListener("click", () => {
        newBookCard.remove();
    });

    newMarkButton.addEventListener("click", () => {
        newBookCard.classList.toggle("red-border");
        if(!newBookCard.classList.contains("red-border"))
            newMarkButton.textContent = "Mark unread";
        else
            newMarkButton.textContent = "Mark read";
    });
}

function createInitialBooks() {
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 259);
    addBookToLibrary("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 251);
    addBookToLibrary("The Satsuma Complex", "Bob", 320);
    addBookToLibrary("Meditations", "Marcus Aurelius", 500);
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 265);
    addBookToLibrary("Hunger Games", "Suzanne Collins", 265);
    addBookToLibrary("The Last Wish", "A Sapkowski", 290);
}

createInitialBooks();
toggleHide();
submitForm();