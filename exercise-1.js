const stringLength=(str)=>{
    if( str.length >= 1 && str.length<=10){
        return str.length
    }else{
        throw new Error("Condition not met")
    }
}
module.exports = stringLength;
