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
  
    array.forEach(function (book, index) {
      const tile = document.createElement("div");
      tile.classList.add("book-tile"); // Add a class for styling
  
      // Create HTML content for the book tile, including a button
      tile.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>${book.read ? 'Read' : 'Not Read'}</p>
        <button class="readStatusBtn">Toggle Read Status</button>
        <button class="deleteButton" data-index="${index}">Delete Book</button>
      `;
  
      // Add the tile to the outputDiv
      outputDiv.appendChild(tile);
  
      // Attach an event listener to the button
      const toggleButton = tile.querySelector(".readStatusBtn");
      toggleButton.addEventListener("click", function () {
        // Toggle the "read" status when the button is clicked
        book.read = !book.read;
  
        // Rebuild the library box to reflect the updated data
        buildLibraryBox(array);

    
      });
      
      const deleteButton = tile.querySelector(".deleteButton");
      deleteButton.addEventListener("click", function () {
        const bookIndex = parseInt(this.getAttribute("data-index"), 10);

        array.splice(bookIndex, 1);

        buildLibraryBox(array);
      })
    });
  
    // Add a class to the outputDiv to enable grid layout
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
