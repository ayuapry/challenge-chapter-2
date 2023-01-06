console.log("Nomor3")

function checkEmail(email){
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //*@\w untuk pencarian karakter global @ diikut kata
    let regexCheck = /^(\w+)@/;

    if (email != null){
        if(typeof(email) == 'string'){
            if(validRegex.test(email)){  //The test() method tests for a match in a string.
                return "Valid";
            }else if(regexCheck.test(email)){
                return "Doesnt Match Pattern";
            }else{
                return "Invalid";
            }
        }else{
            return "Email Must be a String";
        }
    } else{
        return "Email Cannot be Empty";
    }
}


console.log(`Status: ${checkEmail("ayuapry@binar.co.id")}`)
console.log(`Status: ${checkEmail('ayuapry@binar.com')}`)
console.log(`Status: ${checkEmail('ayuapry@binar')}`)       //error karena tidak ada 2s.d3 huruf setelah kata ke3
console.log(`Status: ${checkEmail('ayuapry')}`)             //tidak ada karakter @
console.log(`Status: ${checkEmail(290)}`)
// console.log(checkTypeNumber(checkEmail(3322)))
// Dbuat ke dalam bentuk komentar karna jika dijalankan akan error, error karena tidak ada function checkTypeNumber 
console.log(checkEmail())
