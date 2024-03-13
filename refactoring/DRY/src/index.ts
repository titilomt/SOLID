/**
 * Refactoring: DRY
 * - Don't Repeat Yourself
 * - Every piece of knowledge must have a single, unambiguous, authoritative representation within a system
 * - If you have the same code in two places, you're asking for trouble
 * - If you need to change the code, you'll need to change it in two places
 * - If you forget to change it in one place, you'll have a bug
 * - If you change it in one place and forget to change it in the other, you'll have a bug
 * - If you change it in one place and change it incorrectly in the other, you'll have a bug
 * - If you change it in one place and change it correctly in the other, you'll have unnecessary work
 */

const books = [
  {
    title: "Refactoring",
    author: "Martin Fowler",
    ISBN: "978-0-13-475759-9",
    quantity: 10,
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    ISBN: "978-0-13-235088-4",
    quantity: 5,
  },
  {
    title: "Design Patterns",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    ISBN: "978-0-201-63361-0",
    quantity: 3,
  },
];

// Find a book
function findBook(ISBN: string) {
  return books.find((book) => book.ISBN === ISBN);
}

// Adds a new book
function addBook(title: string, author: string, ISBN: string) {
  const book = findBook(ISBN);
  if (book) {
    throw new Error("Book already exists");
  }
  books.push({ title, author, ISBN, quantity: 1 });
}

// Updates book quantity
function updateBookQuantity(ISBN: string, quantity: number) {
  const book = findBook(ISBN);
  if (!book) {
    throw new Error("Book not found");
  }
  book.quantity = quantity;
}

// Deletes a book
function deleteBook(ISBN: string) {
  const book = findBook(ISBN);
  if (!book) {
    throw new Error("Book not found");
  }
  const index = books.indexOf(book);
  books.splice(index, 1);
}
