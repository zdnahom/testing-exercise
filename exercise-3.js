class Calculator{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }
    add=()=>{
        return this.num1 + this.num2
    }
    substract=()=>{
        return this.num1 - this.num2
    }
    multiply=()=>{
        return this.num1 * this.num2
    }
    divide=()=>{
        if(this.num2!==0){
            return this.num1 / this.num2
        }else{
            throw new Error("Undefined : not divisble by zero")
        }
    }
}
module.exports=Calculator