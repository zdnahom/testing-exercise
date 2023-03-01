const exerciseOne=require('./exercise-1')
const exerciseTwo=require('./exercise-2')

// For the first Exercise
it("length meet the conditions",()=>{
    expect(exerciseOne("nahom")).toBe(5);
})
it("condition not met",()=>{
    expect(()=>exerciseOne("")).toThrow(Error)
    expect(()=>exerciseOne("nahomzerihun")).toThrow(Error)
})

// For the second Exercise
it("Reverse a string",()=>{
    expect(exerciseTwo("nahom")).toBe("mohan");
})