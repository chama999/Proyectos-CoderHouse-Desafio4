class User {
    constructor(name, lastName, Books, pets) {
        this.name = name;
        this.lastName = lastName;
        this.Books = Books;
        this.pets = pets;
    }
    getFullName() {
        //retorno una concatenación entre el nombre y apellido del usuario
        return this.name + " " + this.lastName;
    }
    addPet(pet) {
        //agrego a pets, el pet que viene cómo parámetro.
        this.pets.push(pet);
    }
    countPets() {
        //retorno la cantidad de elementos en pets
        return this.pets.length;
    }
    addBook(book, author) {
        // declaro el objeto {libro=book, autor=autor}
       this.Books.push({
          book,
          author,
        });
    }
    getBookNames() {
        return this.Books
    }
}   

//inicializo la clase con algunos datos
user = new User("Gastón", //nombre
                "Hortas", //apellido
                [{book:'Harry Potter y la piedra filosofal',author:'J.K. Rowling'}, //libros
                {book:"El Hobbit", author: "J.R.R Tolkien"},
                {book:"Game of Thrones", author:"George R. Martin"}], 
                ["Ragnar","Nina", "Iron","Oreo"]); //mascotas
//imprimo el nombre y apellido del usuario
console.log(user.getFullName());
//imprimo pets para ver cuantos hay
console.log(user.pets);
//agrego a la mascota Tortuga.
user.addPet("Tortuga");
//Deberia aparecer la tortuga que acabo de agregar.
console.log(user.pets)
//cuento mascotas, deberian ser 5, porque agregue a Tortuga.
console.log(user.countPets());
// impprimo los libros que tiene el usuario
libros=user.getBookNames();
console.log(libros);
//agrego un libro y su autor
user.addBook("The hunger games", "Suzanne Collins");  //agrego libro y autor
//imprimo los libros y autor después de agregar el libro anterior
libros=user.getBookNames();
console.log(libros);
//imprimo todos los libros que tiene el usuario:
for (let i=0; i<user.Books.length; i++){
    console.log(`${user.Books[i].book} - ${user.Books[i].author}`);
}

// //for each
// user.Books.forEach(function(book){
//     console.log(book.book + " - " + book.author);
// }   );

