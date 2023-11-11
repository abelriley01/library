
let myLibrary= [
    {
        title: "My Book",
        author: "Me ",
        pages: "200",
        read: true
    }
];


function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'}`;

}



function buildLibraryBox(array){
    const outputDiv = document.getElementById("output");

    array.forEach(function(Book){
        const tile = document.createElement("div");

        tile.textContent= Book.info();

        outputDiv.appendChild(tile);
        });
    }

buildLibraryBox(myLibrary);


  document.getElementById("openForm").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "block";
  });


  document.getElementById("closeForm").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none";
  });

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    buildLibraryBox(myLibrary);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;

    document.getElementById("popupForm").style.display = "none";
});
}