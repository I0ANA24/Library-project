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
    const book = new Book(title, author, pages);
    myLibrary.push(book);
    
    let libraryContainer = document.getElementById("container");
    // <div class="book-card">
    //     <h3>The Hobbit</h3>
    //     <p><b>Author:</b> J.R.R. Tolkien</p>
    //     <p><b>Pages:</b> 259</p>
    //     <button class="mark-read">Mark read</button>
    //     <i class="fa-solid fa-trash" style="color: #97150c; font-size: 1.5em;"></i>
    // </div>

    const newBookCard = document.createElement('div');
    newBookCard.classList.toggle("book-card");
    libraryContainer.appendChild(newBookCard);

    const newH3 = document.createElement('h3');
    newH3.textContent = title;
    newBookCard.appendChild(newH3);

    const newParagraph = document.createElement('p');
    const boldText = document.createElement('b');
    boldText.textContent = 'Author: ';
    newParagraph.appendChild(boldText);
    newParagraph.appendChild(document.createTextNode(author));
    newBookCard.appendChild(newParagraph);

    const newParagraph1 = document.createElement('p');
    const boldText1 = document.createElement('b');
    boldText1.textContent = 'Pages: ';
    newParagraph1.appendChild(boldText1);
    newParagraph1.appendChild(document.createTextNode(pages));
    newBookCard.appendChild(newParagraph1);

    const newButton = document.createElement('button');
    newButton.classList.toggle("mark-read");
    newButton.textContent = "Mark read";
    newBookCard.appendChild(newButton);

    const newI = document.createElement('i');
    newI.classList.toggle("fa-solid");
    newI.classList.toggle("fa-trash");
    newI.style.color = "#97150c";
    newI.style.fontSize = "1.5em";
    newBookCard.appendChild(newI);
}

toggleHide();
submitForm();