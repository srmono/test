class Laptop{
    _powerRange = 0; // the range of power inside

    set powerRange(value){
        if(value > 100 ) throw new Error("value must be less than 100")
        this._powerRange = value;
    }

    get powerRange(){
        return this._powerRange;
    }

    constructor(electricity){
        this.electricity = electricity
        alert(`Create a laptop, and electricity: ${electricity}`)
    }

}

// you created a laptop 
let hpLaptop = new Laptop(50);

//add powerRange 
hpLaptop.powerRange = 200;  

