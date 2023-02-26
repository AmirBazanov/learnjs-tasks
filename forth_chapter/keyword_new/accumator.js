function Accumulator(startingValue){
    this.value = startingValue;

    this.read = (value) =>{
        this.value += value
    };

}

let accumulator = new Accumulator(1);
accumulator.read(2);
accumulator.read(2);
console.log(accumulator.value);