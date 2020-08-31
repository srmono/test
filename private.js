class Laptop{
    #powerRange = 100; // the range of power inside

    #checkPower(value){
        if(value > 100 ) throw new Error("value must be less than 100");
        if(value < 0 ) throw new Error("value is Negative Number");
    }
}

// you created a laptop 
let hpLaptop = new Laptop(); 

//add powerRange 
hpLaptop.#powerRange = 200;  

