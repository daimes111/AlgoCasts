// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //capitalizes first letter
    let newStr = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        //capitalizes any letter that has a space in front of it and adds to the word
        if (str[i - 1] === " ") {
            newStr += str[i].toUpperCase()
        //just adds the letter to the work/sentence
        } else {
            newStr += str[i]
        }
    }
    return newStr
}


module.exports = capitalize;
