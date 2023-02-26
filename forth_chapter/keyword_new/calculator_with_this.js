function Calculator() {

    this.read = (a,b) => {
        this.a = a
        this.b = b
    };

    this.sum = () => {
        return this.a + this.b;
    };

    this.mul = () => {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read(5,5);

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );