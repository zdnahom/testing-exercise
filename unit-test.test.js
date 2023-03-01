const exerciseOne=require('./exercise-1')

it("length meet the conditions",()=>{
    expect(exerciseOne("nahom")).toBe(5);
})
it("condition not met",()=>{
    expect(()=>exerciseOne("")).toThrow(Error)
    expect(()=>exerciseOne("nahomzerihun")).toThrow(Error)
})