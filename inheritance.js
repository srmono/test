class Book{ // 1000 lines 
    constructor(title){
        this.title = title
    }

    getTitle(){
        alert(this.title)
    }
}

class BookNew extends Book{

    constructor(title,author){
        super(title);
        this.author = author;
    }

    hello(){
        alert(this.title)
    }

    getTitle(){
        super.getTitle(); //calls from parent
        alert(this.author)// local
    }
}

let science = new BookNew("Science","venkat")

