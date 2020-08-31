class Book{
    constructor(title){
        this.title = title
    }

    get title(){
        return this._name
    }

    set title(value){
        if(value.length < 4){
            alert("title is too short");
            return null;
        }
        this._title = value
    }
}

var js = new Book("JavaScript");





