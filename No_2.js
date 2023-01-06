console.log("Nomor2")
const checkTypeNumber = (givenNumber) =>{
    if(givenNumber == null){
        return "Error: Bro where is the parameter?"
    }
    else{ 
        if(typeof(givenNumber) == 'number'){
            if(givenNumber % 2 == 0){
                return 'GENAP'
            }else{
                return 'GANJIL'
            }
        }else{
            return 'Error: Invalid data type'
        }

    }
}
console.log(checkTypeNumber(10))      //Expecteed Output: Genap
console.log(checkTypeNumber(3))       //Expecteed Output: Ganjil
console.log(checkTypeNumber("3"))     //Expecteed Output: Invalid
console.log(checkTypeNumber({}))      //Expecteed Output: Invalid
console.log(checkTypeNumber([]))      //Expecteed Output: Invalid
console.log(checkTypeNumber())        //Expecteed Output: Error: Bro where is the parameter?
console.log(" ")