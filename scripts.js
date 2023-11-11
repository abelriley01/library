let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'}`;
  };
}

function buildLibraryBox(array) {
  const outputDiv = document.getElementById("output");

  // Clear existing content
  outputDiv.innerHTML = "";

  array.forEach(function (book) {
    const tile = document.createElement("div");
    tile.classList.add("book-tile"); // Add a class for styling

    // Create HTML content for the book tile
    tile.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>${book.read ? 'Read' : 'Not Read'}</p>
    `;

    outputDiv.appendChild(tile);
  });
  outputDiv.classList.add("grid-layout");
}

// Function to open the form popup
document.getElementById("openForm").addEventListener("click", function () {
  document.getElementById("popupForm").classList.add("show-popup");
});

// Function to close the form popup
document.getElementById("closeForm").addEventListener("click", function () {
  document.getElementById("popupForm").classList.remove("show-popup");
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  buildLibraryBox(myLibrary);

  // Clear the form fields
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;

  // Close the form popup
  document.getElementById("popupForm").classList.remove("show-popup");
});
