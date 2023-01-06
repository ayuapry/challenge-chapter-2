function getSplitName(personName) {
    if (typeof(personName) == 'string') {
        const fullname = personName.split(' ');

        if (fullname.length <= 3) {
            if (fullname.length == 3) {
                const objek = {
                    firstName : fullname[0],
                    middleName : fullname[1],
                    lastName : fullname[2],
                };
                return objek;
            } else if (fullname.length == 2) {
                const objek = {
                    firstName : fullname[0],
                    middleName : null,
                    lastName : fullname[1],
                };
                return objek;
            } else {
                const objek = {
                    firstName : fullname[0],
                    middleName : null,
                    lastName : null,
                };
                return objek;
            }
        } else {
            return 'ERROR : This function is only for 3 characters name'
        }
    } else {
        return "Error: The Parameter must be filled with string value";
    }
}
console.log(" ")
console.log(getSplitName('Aprido Syawindra Pratama'))
console.log(getSplitName('Ayu Apriyanti'))
console.log(getSplitName('Fardi'))
console.log(getSplitName('Audy Caesar Hrtawan Rasyid'))
console.log(getSplitName(0))
console.log(" ")
