class BookModel {
  constructor() {
      this.books = [
          {
              id: 1,
              name: "1984 by George Orwell",
              description: "A dystopian masterpiece exploring themes of surveillance, freedom, and totalitarianism. A must-read for fans of thought-provoking literature."
          },
          {
              id: 2,
              name: "To Kill a Mockingbird by Harper Lee",
              description: "A timeless classic highlighting racial injustice and the power of empathy through the eyes of young Scout Finch in the Deep South."
          },
          {
              id: 3,
              name: "The Great Gatsby by F. Scott Fitzgerald",
              description: "A tragic love story set in the Jazz Age, examining themes of ambition, wealth, and the elusive American Dream."
          },
          {
              id: 4,
              name: "Pride and Prejudice by Jane Austen",
              description: "A witty and romantic novel exploring societal norms and relationships, centered around the unforgettable Elizabeth Bennet and Mr. Darcy."
          },
          {
              id: 5,
              name: "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
              description: "A fascinating journey through human history, exploring how biology, culture, and technology have shaped the world we live in."
          }
      ];
  }

  getAllBooks() {
      return this.books;
  }

  addBook(book) {
      this.books.push(book);
  }
}

module.exports = new BookModel();
