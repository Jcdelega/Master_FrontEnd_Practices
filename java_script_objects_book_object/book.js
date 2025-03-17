/*
  Cada libro debe ser un objeto con las siguientes propiedades: 
  titulo: (string) el título del libro, 
  autor: (string) el autor del libro, 
  anio: (number) el año de publicación, 
  estado: (string) el estado del libro, 
  que puede ser 'disponible' o 'prestado'.

  Each book should be an object with the following properties:

  title: (string),
  autor: (string),
  year: (number),
  availability: boolean,

  It should has a method to show its own information:
  Example: `The title of the book is [title], written by [autor] in , availability is [availability].`

  Optional: Add a property with the chapters list and some methods to add or delete chapters

  También debe tener un método describirLibro: 
(method) método para imprimir la información básica del libro. 
Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'

Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.

*/

class Book {
  constructor(title, autor, year, availability) {
    if (typeof title !== "string" || typeof autor !== "string") {
      throw new Error("Title and author must be strings.");
    }
    if (typeof year !== "number") {
      throw new Error("Publishing year must be a number.");
    }
    if (typeof availability !== "boolean") {
      throw new Error("Its availability must be a boolean value");
    }
    this.title = title;
    this.year = year;
    this.autor = autor;
    this.availability = availability;
  }
  showInformtation() {
    return `The title of the book is ${this.title}, written by ${this.autor} in ${this.year} , availability is ${this.availability}.`;
  }
}

class bookWithChapters extends Book {
  constructor(title, autor, year, availability) {
    super(title, autor, year, availability);
    this.chapters = [];
  }

  //Methods

  getchapters() {
    return this.chapters;
  }
  insertChapter(chapter) {
    if (typeof chapter !== "string") {
      throw new Error("Chapter must be a string.");
    }
    this.chapters.push(chapter);
  }
  deleteChapter(chapter) {
    const index = this.chapters.indexOf(chapter);
    if (index !== -1) {
      this.chapters.splice(index, 1);
    } else {
      console.log(`Chapter "${chapter}" not found.`);
    }
  }
  showInformtation() {
    return `The title of the book is ${this.title}, written by ${
      this.autor
    } in ${this.year} , availability is ${
      this.availability
    }, and some of ist chapters are: \n\n${this.getchapters().join("\n")}.`;
  }
}

let lordOfRings = new Book("Lord of the Rings", "J.R.R. Tolkien", 1937, true);
let theCallingEndGame = new bookWithChapters(
  "The Calling End Game",
  "James Frey and Nils Johnson-Shelton",
  2014,
  false
);

theCallingEndGame.insertChapter("Chapter 1 The calling");
theCallingEndGame.insertChapter("Chapter 2 The Cahokian");
theCallingEndGame.insertChapter("Chapter 3 The Mu");
theCallingEndGame.insertChapter("Chapter 4 An");

const infoTheCalling = theCallingEndGame.showInformtation();
const infoLordOfRings = lordOfRings.showInformtation();

console.log(infoLordOfRings, "\n\n" + infoTheCalling);

theCallingEndGame.deleteChapter("Chapter 2 The Cahokian");
const infoTheCallingUpdated = theCallingEndGame.showInformtation();
console.log(infoTheCallingUpdated);

document.getElementById("objects").innerHTML = infoTheCallingUpdated;

theCallingEndGame.insertChapter(56);

