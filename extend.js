class SuperArray extends Array{
    isEmpty(){
        return this.length === 0
    }
}

class SuperString extends String{

}

let students = new SuperArray();

console.log(students.isEmpty())



