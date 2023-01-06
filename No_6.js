console.log("Nomor6") 

function getAngkaTerbesarKedua(myArray) {
    if(myArray != undefined){
        if(Array.isArray(myArray) && myArray.length >=2 ){ 
            const setArray = Array.from(new Set(myArray)).sort((a, b) => a - b).reverse() //set itu tipe data unik unik dalam arti itu datanya gabisa duplikat //nah klo mau sort itu datanya harusnya array, makanya aku ubah set ke array dulu
            return Array.from(setArray)[1];
        }else{
            return "Error: Your Value must be array!"
        }
    }else{
        return "Error: Bro, Where is the parameter?"
    }
}

const dataAngka = [9,4,7,7,4,3,2,2,8]
const dataAngka2 = [9,7,10,2,9,8]

console.log(getAngkaTerbesarKedua(dataAngka))   //Expected Output: 8
console.log(getAngkaTerbesarKedua(dataAngka2))  //Expected Output: 9
console.log(getAngkaTerbesarKedua(0))           //Error bcs its not an array
console.log(getAngkaTerbesarKedua())            //Error bcs there's no parameter 
