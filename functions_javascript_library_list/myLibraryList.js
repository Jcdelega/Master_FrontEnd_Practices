/*Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.

Create a function addBook(title) to add a book into an array called booksToRead


Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

Create a function printReadedBooks(), this function must print the list of readed books;
*/

const listToShow = document.getElementById("booksToShow")

booksToRead = [];


//Function to add books into my array
const addBook = (title, bookArrayToInsert) => bookArrayToInsert.push(title);

//Function to print the added books from my array to the DOM  
const printReadedBooks = ( arrayToShow, elementToInsert ) => {
    elementToInsert.innerHTML = arrayToShow.map(book => `<li>${book}</li>`).join("");
}

document.getElementById("getTitle").addEventListener('click',()=>{
    addBook(document.getElementById("bookToAdd").value, booksToRead);
    document.getElementById("bookToAdd").value = null; 
}
);

document.getElementById("showCollection").addEventListener('click', ()=>{
    printReadedBooks(booksToRead,listToShow)
    console.log(booksToRead);
}
);
