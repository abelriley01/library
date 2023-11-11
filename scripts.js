const addBookbutton = document.getElementById('addBook');
const modal = document.getElementById('myModal');
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");





const myLibrary= [];


function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return( title + " by " + author +", " + pages + "pages, " + read)
    }
}

function addBookToLibrary(){

}

addBookbutton.addEventListener('click',addBookToLibrary);

openButton.addEventListener("click", function(){
    modal.style.display ="block";
});

closeButton.addEventListener("click", function(){
    modal.style.display = "none";
});

window.addEventListener("click" , function(event){
    if(event.target === modal){
        modal.style.display = "none":
    }
});