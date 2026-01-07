const sqlite3 = require('sqlite3').verbose();
//let file = FIle  ('./db/projectDb.db');

let db = new sqlite3.Database('../db/projectDb.db');

db.all('SELECT * FROM Author', (err, row) =>{
    if(err){

        console.log(err);
        console.log("Error occurred. Initializing the database");
        initialize();
    }else
        if(row === null){
            console.log("Row was empty. Initializing the database");
            initialize();
        }
        else {
            console.log(row);
            console.log("Database exists and is initialized");
        }
});

function initialize() {
    db.serialize(() => {
        console.log("initializing...")

        db.run('CREATE TABLE Author(authorId INTEGER PRIMARY KEY AUTOINCREMENT, authorName VARCHAR, LastName VARCHAR)');

        db.run('CREATE TABLE Book(bookId INTEGER PRIMARY KEY AUTOINCREMENT, Title VARCHAR, Genre VARCHAR, author INT, price INTEGER, img VARCHAR, FOREIGN KEY (author) REFERENCES Author(authorId))');

        db.run('CREATE TABLE Customer(customerId INTEGER PRIMARY KEY AUTOINCREMENT, Name VARCHAR, LastName VARCHAR, email VARCHAR, password VARCHAR, admin BOOL)');

        db.run('CREATE TABLE CART(cartId INTEGER PRIMARY KEY AUTOINCREMENT, book INTEGER, customer INTEGER, additionDate VARCHAR, FOREIGN KEY (book) REFERENCES Book(bookId), FOREIGN KEY (customer) REFERENCES Customer(customerId))');


        db.run('INSERT INTO Author(authorName, LastName) VALUES ( "author1_name", "author1_lastname")');
        db.run('INSERT INTO Author(authorName, LastName) VALUES ("author2_name", "author2_lastname")');
        db.run('INSERT INTO Author(authorName, LastName) VALUES ("author3_name", "author3_lastname")');

        db.run('INSERT INTO Book(Title, Genre, author, price, img) VALUES ("Book1", "genre1", 3, 100, "img here")');
        db.run('INSERT INTO Book(Title, Genre, author, price, img) VALUES ("Book2", "genre2", 3, 999, "img here")');
        db.run('INSERT INTO Book(Title, Genre, author, price, img) VALUES ("Book3", "genre3", 2, 10, "img here")');
        db.run('INSERT INTO Book(Title, Genre, author, price, img) VALUES ("Book4", "genre4", 1, 50, "img here")');

        db.run('INSERT INTO Customer(Name, LastName, email, password, admin) VALUES ("customer1_name", "customer1_lastname", "email1@gmail.com", "Pa$$word1)", 0)');
        db.run('INSERT INTO Customer(Name, LastName, email, password, admin) VALUES ("customer2_name", "customer2_lastname", "email2@gmail.com", "Pa$$word2)", 0)');
        db.run('INSERT INTO Customer(Name, LastName, email, password, admin) VALUES ("customer3_name", "customer3_lastname", "email3@gmail.com", "Pa$$word3)", 0)');
        db.run('INSERT INTO Customer(Name, LastName, email, password, admin) VALUES ("admin_name", "admin_lastname", "adminEmail1@gmail.com", "Pa$$word4)", 1)');

        let date = new Date;
        date = date.getDate() +"-"+ date.getMonth() +"-"+ date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
        //console.log(date.toString());
        //console.log(typeof date)

        db.run('INSERT INTO CART(book, customer, additionDate) VALUES (1, 2, "'+ date +'")');
        db.run('INSERT INTO CART(book, customer, additionDate) VALUES (2, 2, "'+ date +'")');
        db.run('INSERT INTO CART(book, customer, additionDate) VALUES (3, 1, "'+ date +'")');
        db.run('INSERT INTO CART(book, customer, additionDate) VALUES (4, 3, "'+ date +'")');
    });
}