class Entertainment {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  print() {
    console.log(`The creator of ${this.title} is ${this.author}`);
  }
}

class Book extends Entertainment {
  constructor(bookData) {
    super(bookData.title, bookData.author);
    this.pages = bookData.pages;
  }

  print() {
    super.print();
    console.log(`And this book has ${this.pages} pages`);
  }
}

class Movie extends Entertainment {
  constructor(title, author, year) {
    super(title, author);
    this.releaseYear = year;
  }

  print() {
    super.print();
    console.log(`And this movie was released in ${this.releaseYear}`);
  }
}

const someBook = new Book({
  title: 'Book title',
  author: 'Some author',
  pages: 199,
});

const someMovie = new Movie('Some movie', 'Movie author', 2021);

// the fact that our both inherited and overriden methods have the same name and exist together is called polymorphism
someBook.print();
someMovie.print();
