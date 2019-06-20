class Calculator{
    constructor(num1, num2)
    {
        this.num1 = num1;
        this.num2 = num2;
    }

    add()
    {
        return Number(this.num1) + Number(this.num2);
    }

    sub()
    {
        return Number(this.num1) - Number(this.num2);
    }

    mul()
    {
        return Number(this.num1) * Number(this.num2);
    }

    divi()
    {
        return Number(this.num1) / Number(this.num2);
    }

}

let calc = new Calculator(2, 3);

console.log(calc.add())
console.log(calc.sub())
console.log(calc.mul())
console.log(calc.divi())