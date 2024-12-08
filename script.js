let myLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Add Book to Library
function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

// Display Books
function displayBooks() {
    const libraryDisplay = document.getElementById("library-display");
    libraryDisplay.innerHTML = ""; // Clear previous content

    myLibrary.forEach((book, index) => {
        createBookCard(book, index);
    });
}

// Create Book Card
function createBookCard(book, index) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
        <div class="card-buttons">
            <button class="card-btn read-btn" onclick="toggleReadStatus(${index})">
                ${book.read ? "Mark as Unread" : "Mark as Read"}
            </button>
            <button class="card-btn delete-btn" onclick="removeBook(${index})">Delete</button>
        </div>
    `;
    document.getElementById("library-display").appendChild(bookCard);
}

// Toggle Read Status
function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

// Remove Book from Library
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Form Handling
const bookFormDialog = document.getElementById("book-form-dialog");
const bookForm = document.getElementById("book-form");
const newBookBtn = document.getElementById("new-book-btn");
const closeFormBtn = document.getElementById("close-form");

// Open the form
newBookBtn.addEventListener("click", () => {
    bookFormDialog.showModal();
});

// Close the form
closeFormBtn.addEventListener("click", () => {
    bookFormDialog.close();
});

// Handle Form Submission
bookForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    // Get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    // Create and add book
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    // Reset and close form
    bookForm.reset();
    bookFormDialog.close();
});

addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
addBookToLibrary(new Book("1984", "George Orwell", 328, false));
addBookToLibrary(new Book('Wicked','Gregory Maguire',512,false));
addBookToLibrary(new Book('Butter','Asako Yuzuki',464,true));