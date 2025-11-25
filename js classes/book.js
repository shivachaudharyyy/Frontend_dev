class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false;
  }

  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      console.log(`${this.title} has been issued.`);
    } else {
      console.log(`${this.title} is already issued.`);
    }
  }

  returnBook() {
    this.isIssued = false;
    console.log(`${this.title} has been returned.`);
  }
}

const library = [
  new Book("JS Basics", "John Doe", "111"),
  new Book("CSS Mastery", "Jane Smith", "222"),
  new Book("Python Guide", "Alan Turing", "333")
];

// Display available books
console.log("Available Books:");
library.filter(b => !b.isIssued).forEach(b => console.log(b.title));

// Issue book by ISBN
function issueByISBN(isbn) {
  const book = library.find(b => b.ISBN === isbn);
  if(book) book.issueBook();
  else console.log("Book not found");
}

issueByISBN("222");