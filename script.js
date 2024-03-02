class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
}

class Bookstore {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayBooks() {
        const booksList = document.getElementById('booksList'); 
        booksList.innerHTML = ''; 

        this.books.forEach(book => {
            const bookInfo = document.createElement('div'); 
            bookInfo.textContent = `Title: ${book.title}, Author: ${book.author}, Price: ${book.price}, Quantity: ${book.quantity}`;
            booksList.appendChild(bookInfo); 
        });
    }

    calculateTotalValue() {
        let totalValue = 0;
        this.books.forEach(book => {
            totalValue += book.price * book.quantity;
        });
        console.log(`Общая стоимость: $${totalValue}`);
    }
}

const bookstore = new Bookstore();

const book1 = new Book("Book 1", "Author 1", 10, 5);
const book2 = new Book("Book 2", "Author 2", 15, 3);
const book3 = new Book("Book 3", "Author 3", 20, 2);

bookstore.addBook(book1);
bookstore.addBook(book2);
bookstore.addBook(book3);

function addBook() {
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const priceInput = document.getElementById("price");
    const quantityInput = document.getElementById("quantity");

    const title = titleInput.value;
    const author = authorInput.value;
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(quantityInput.value);

    const book = new Book(title, author, price, quantity);
    bookstore.addBook(book);
    bookstore.displayBooks();
    titleInput.value = "";
    authorInput.value = "";
    priceInput.value = "";
    quantityInput.value = "";
}

bookstore.calculateTotalValue();
document.getElementById("addButton").addEventListener("click", addBook);