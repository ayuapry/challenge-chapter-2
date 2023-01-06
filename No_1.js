console.log("Nomor1")
function changedWord (selectedText, changedText, text){
    return text.replaceAll(selectedText, changedText); 
    //The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
}

const kalimat1 = 'Anidni sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung Bromo tak akan mampu manggambarkan besarnya cintaku padamu'

console.log(changedWord('mencintai','membenci', kalimat1)) 
console.log(changedWord('Bromo','Semeru', kalimat2))
