const stringLength=require('./exercise-1')
const reverseString=require('./exercise-2')
const Calculator=require('./exercise-3')
const capitalize=require('./exercise-4')

// For the first Exercise
it("length meet the conditions",()=>{
    expect(stringLength("nahom")).toBe(5);
})
it("condition not met",()=>{
    expect(()=>stringLength("")).toThrow(Error)
    expect(()=>stringLength("nahomzerihun")).toThrow(Error)
})

// For the second Exercise
it("Reverse a string",()=>{
    expect(reverseString("nahom")).toBe("mohan");
})

//For the third Exercise
describe("Calculator test",()=>{
    let calculator;
    describe("addition test",()=>{
        
        it("1 + 2 is 3",()=>{
            calculator= new Calculator(1,2)
            expect(calculator.add()).toBe(3)
        })
        it("100 + 150 is 250",()=>{
            calculator= new Calculator(100,150)
            expect(calculator.add()).toBe(250)
        })
        it("75 + 25 is 100",()=>{
            calculator= new Calculator(75,25)
            expect(calculator.add()).toBe(100)
        })
    })
    describe("substraction test",()=>{
        
        it("1 - 2 is -1",()=>{
            calculator= new Calculator(1,2)
            expect(calculator.substract()).toBe(-1)
        })
        it("100 - 150 is -50",()=>{
            calculator= new Calculator(100,150)
            expect(calculator.substract()).toBe(-50)
        })
        it("75 - 25 is 50",()=>{
            calculator= new Calculator(75,25)
            expect(calculator.substract()).toBe(50)
        })
    })
    describe("multiplication test",()=>{
        
        it("1 * 2 is 2",()=>{
            calculator= new Calculator(1,2)
            expect(calculator.multiply()).toBe(2)
        })
        it("100 * 150 is 15000",()=>{
            calculator= new Calculator(100,150)
            expect(calculator.multiply()).toBe(15000)
        })
        it("75 * 25 is 1875",()=>{
            calculator= new Calculator(75,25)
            expect(calculator.multiply()).toBe(1875)
        })
    })
    describe("division test",()=>{
        
        it("1 / 2 is 0.5",()=>{
            calculator= new Calculator(1,2)
            expect(calculator.divide()).toBe(0.5)
        })
        it("100 / 10 is 10",()=>{
            calculator= new Calculator(100,10)
            expect(calculator.divide()).toBe(10)
        })
        it("Undefined",()=>{
            calculator= new Calculator(75,0)
            expect(()=>calculator.divide()).toThrow(Error)
        })
    })
})

describe("capitalize",()=>{
    describe("given a string",()=>{
        it("Not Empty string",()=>{
            expect(capitalize("nahom")).toBe("Nahom")
        })
        it("Empty string",()=>{
            expect(capitalize("")).toBe("Empty string")
        })
    })
    describe("given not a string",()=>{
        it("Throws an Error",()=>{
            expect(()=>capitalize(1)).toThrow(Error)
            expect(()=>capitalize(undefined)).toThrow(Error)
            expect(()=>capitalize()).toThrow(Error)
        })
    })
})