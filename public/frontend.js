async function validate() {
    let name = document.getElementById('Name').value.trim();
    let lastName = document.getElementById('LastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    console.log("inside frontend: " + name + " " + lastName + " " + email + " " + password);

    let message = "";

    if (name === "" || lastName === "" || email === "" || password === "") {
        console.log("all fields must be not empty")
        message += "all fields must be not empty\n"
    }

    //ai generated regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("not an email")
        message += "not an email\n"
    }
    if (!/[A-Z]/.test(password)) {
        console.log("password doesn't have a capital letter")
        message += "password doesn't have a capital letter\n"
    }
    //ai generated regex
    if (!/\d/.test(password)) {
        console.log("password doesn't have at least one digit")
        message += "password doesn't have at least one digit\n"
    }
    //ai generated regex
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        console.log("password has no special character")
        message += "password has no special character\n"
    }

    if (message) {
        document.getElementById('error').innerText = message;
        return;
    } else {
        console.log("sending request: "+ name + " " + lastName + " " + email + " " + password);

        let response = await fetch('/validate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, lastName, email, password})
        })

        message = await response.json()

        if (message.success) {
            window.location.href = '/';
        } else {
            document.getElementById('error').innerText = message.message;
        }
    }
    return;
}

async function validateProfile() {
    let name = document.getElementById('Name').value.trim();
    let lastName = document.getElementById('LastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    let message = "";

    if (name === "" || lastName === "" || email === "" || password === "") {
        console.log("all fields must be not empty")
        message += "all fields must be not empty\n"
    }

    //ai generated regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("not an email")
        message += "not an email\n"
    }
    if (!/[A-Z]/.test(password)) {
        console.log("password doesn't have a capital letter")
        message += "password doesn't have a capital letter\n"
    }
    //ai generated regex
    if (!/\d/.test(password)) {
        console.log("password doesn't have at least one digit")
        message += "password doesn't have at least one digit\n"
    }
    //ai generated regex
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        console.log("password has no special character")
        message += "password has no special character\n"
    }

    if (message) {
        document.getElementById('error').innerText = message;
        return;
    } else {
        //console.log(name + " " + lastName + " " + email + " " + password);

        let response = await fetch('/validateEdit', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, lastName, email, password})
        })

        message = await response.json()

        if (message.success) {
            window.location.href = '/profile';
        } else {
            document.getElementById('error').innerText = message;
        }
    }
    return;
}

async function validateCustomerEdit() {
    let id = document.getElementById('Id').value;
    let name = document.getElementById('Name').value.trim();
    let lastName = document.getElementById('LastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let previousId = document.getElementById('previousIdId').value;

    let message = "";

    if (id === "" ||name === "" || lastName === "" || email === "" || password === "") {
        console.log("all fields must be not empty")
        message += "all fields must be not empty\n"
    }

    if(id<0){
        console.log("id cannot be less than 0");
        message+= "id cannot be less than 0";
    }
    //ai generated regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.log("not an email")
        message += "not an email\n"
    }
    if (!/[A-Z]/.test(password)) {
        console.log("password doesn't have a capital letter")
        message += "password doesn't have a capital letter\n"
    }
    //ai generated regex
    if (!/\d/.test(password)) {
        console.log("password doesn't have at least one digit")
        message += "password doesn't have at least one digit\n"
    }
    //ai generated regex
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        console.log("password has no special character")
        message += "password has no special character\n"
    }

    if (message) {
        document.getElementById('error').innerText = message;
        return;
    } else {
        //console.log(name + " " + lastName + " " + email + " " + password);

        let response = await fetch('/editCustomer', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id, name, lastName, email, password, previousId})
        })

        message = await response.json()

        if (message.success) {
            window.location.href = '/customersList';
        } else {
            document.getElementById('error').innerText = message;
        }
    }
    return;
}

async function validateBookEdit(){
    let bookId = document.getElementById('Id').value;
    let Title = document.getElementById('Title').value.trim();
    let Genre = document.getElementById('Genre').value.trim();
    let Author = document.getElementById('Author').value.trim();
    let Price = document.getElementById('Price').value.trim();
    let Img = document.getElementById('img').value;
    let previousId = document.getElementById('previousId').value;

    let message = "";

    if(bookId === "" || Title === "" || Genre === "" || Author === "" || Price === "" || Img === ""){
        console.log("Every field must be not empty");
        message+="Every field must be not empty\n";
    }

    if(bookId < 0){
        console.log("Id cannot be less than 0");
        message+="Id cannot be less than 0\n";
    }

    if(Author < 0){
        console.log("Author Id cannot be less than 0");
        message+="Author Id cannot be less than 0\n";
    }

    if(Price < 0){
        console.log("Price cannot be less than 0");
        message+="Price cannot be less than 0\n";
    }

    if (message) {
        document.getElementById('error').innerText = message;
        return;
    }

    let response = await fetch('/editBook', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({bookId, Title, Genre, Author, Price, Img, previousId})
    })

    message = await response.json()

    if (message.success) {
        window.location.href = '/books';
    } else {
        document.getElementById('error').innerText = message;
    }


}

async function validateAuthorEdit(){
    let authorId = document.getElementById('Id').value;
    let authorName = document.getElementById('authorName').value.trim();
    let LastName = document.getElementById('LastName').value.trim();
    let previousId = document.getElementById('previousId').value;

    let message = '';

    if(authorId === "" || authorName === "" || LastName === ""){
        console.log("Every field must be not empty");
        message+="Every field must be not empty\n";
    }

    if(authorId < 0){
        console.log("Id cannot be less than 0");
        message+="Id cannot be less than 0\n";
    }

    if (message) {
        document.getElementById('error').innerText = message;
        return;
    }

    let response = await fetch('/editAuthor', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({authorId, authorName, LastName, previousId})
    })

    message = await response.json()

    if (message.success) {
        window.location.href = '/authorList';
    } else {
        document.getElementById('error').innerText = message;
    }
}

async function validateCreateBook(){
    let Title = document.getElementById('Title').value.trim();
    let Genre = document.getElementById('Genre').value.trim();
    let Author = document.getElementById('Author').value;
    let Price = document.getElementById('Price').value;
    let Img = document.getElementById('img').value;

    let message = "";

    if(Title === "" || Genre === "" || Author === "" || Price === "" || Img === ""){
        console.log("Every field must be not empty");
        message+="Every field must be not empty\n";
    }

    if(Author < 0){
        console.log("Author Id cannot be less than 0");
        message+="Author Id cannot be less than 0\n";
    }

    if(Price < 0){
        console.log("Price cannot be less than 0");
        message+="Price cannot be less than 0\n";
    }

    if (message) {
        document.getElementById('error').innerText = message;
        return;
    }

    let response = await fetch('/createBook', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({Title, Genre, Author, Price, Img})
    })

    message = await response.json()

    if (message.success) {
        window.location.href = '/books';
    } else {
        document.getElementById('error').innerText = message;
    }
}

async function validateCreateAuthor(){
    let authorName = document.getElementById('Name').value.trim();
    let LastName = document.getElementById('LastName').value.trim();

    let message = "";

    if(authorName === "" || LastName === ""){
        console.log("Every field must be not empty");
        message+="Every field must be not empty\n";
    }

    if (message) {
        document.getElementById('error').innerText = message;
        return;
    }

    let response = await fetch('/createAuthor', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({authorName, LastName})
    })

    message = await response.json()

    if (message.success) {
        window.location.href = '/authorList';
    } else {
        document.getElementById('error').innerText = message;
    }

}

async function validateCreateCustomer(){
    let Name = document.getElementById('Name').value.trim();
    let LastName = document.getElementById('LastName').value.trim();
    let Email = document.getElementById('Email').value.trim();
    let Password = document.getElementById('Password').value.trim();
    let Admin = document.getElementById('Admin').checked;

    if(Admin){
        console.log("true");
    }

    let message = "";

    if (Name === "" || LastName === "" || Email === "" || Password === "") {
        console.log("all fields must be not empty")
        message += "all fields must be not empty\n"
    }

    //ai generated regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
        console.log("not an email")
        message += "not an email\n"
    }
    if (!/[A-Z]/.test(Password)) {
        console.log("password doesn't have a capital letter")
        message += "password doesn't have a capital letter\n"
    }
    //ai generated regex
    if (!/\d/.test(Password)) {
        console.log("password doesn't have at least one digit")
        message += "password doesn't have at least one digit\n"
    }
    //ai generated regex
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(Password)) {
        console.log("password has no special character")
        message += "password has no special character\n"
    }

    if (message) {
        document.getElementById('error').innerText = message;
        return;
    } else {
        //console.log("sending request: "+ name + " " + lastName + " " + email + " " + password);

        let response = await fetch('/createCustomer', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({Name, LastName, Email, Password, Admin})
        })

        message = await response.json()

        if (message.success) {
            window.location.href = '/customersList';
        } else {
            document.getElementById('error').innerText = message.message;
        }
    }
    return;
}