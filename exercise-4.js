const capitalize=(str)=>{
    if(typeof str==="string"){
        return str.length!==0?str[0].toUpperCase() + str.slice(1):"Empty string"
      }else{
        throw new Error("Not a string")
      }
}
module.exports=capitalize