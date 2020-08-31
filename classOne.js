class Book{
    constructor(title){
        this.title = title
    }

    getTitle(){
        alert(this.title)
    }
}


// Book.prototype.getTitle

let scienceBook = new Book("Science");


// function Book(title){
//     this.title = title;
//     this.getTitle = function(){
//         alert(this.title)
//     }
// }
// Book.prototype

// var js = new Book("javascript")

// Class in expression

let User = class{

    sayHello(){
        alert("Hey welcome")
    }
}

var person = new User()


