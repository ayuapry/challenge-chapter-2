function isValidPassword(givenPassword){
    let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w\W]{8,}$/; // (?=.*\d) there is at least a digit

    if(givenPassword != null) {
        if(typeof(givenPassword) == 'string') {
            if(pass.test(givenPassword)) {  //The test() method tests for a match in a string.
                return true ;
            } else {
                return false;
            }
        } else {
            return "ERROR : Password must be a string";
        }
    } else {
        return "ERROR : Password cannot be empty";
    }
}

console.log(isValidPassword('Meong2021')) //expected output true because there are uppercase,lowercase,number
console.log(isValidPassword('meong2021')) //false, no uppercase
console.log(isValidPassword('@eong'))     //false, no numbers
console.log(isValidPassword('Meong2'))    //false, there's only 6 letters
console.log(isValidPassword(0))           //error, its not string
console.log(isValidPassword())            //error, there's no password or null


