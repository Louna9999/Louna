const premierMot = (string) => {
    var mot =''
    let i = 0
    while (string[i]!==' '){
        mot += string[i]
        i = i + 1
    }
    return ( mot );
}
 
export default premierMot;