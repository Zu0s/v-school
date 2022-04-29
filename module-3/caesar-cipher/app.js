const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

// const newInput
function encrypt() {
    let editedInput = [...input]
    
    for (var i = 0; i < editedInput.length; i++) {
        
        let shiftIndex = alphabet.indexOf(editedInput[i]) + shift
        let shiftedLetter

        if (editedInput[i] === ' ' ) {
            shiftedLetter = ' '
        } else {
            if (shiftIndex <= 25) {
                shiftedLetter = alphabet[shiftIndex] 
            } else {
                while(shiftIndex > 25) { shiftIndex = shiftIndex - 26 } // just allows you input big numbers
                shiftedLetter = alphabet[shiftIndex]
            }
        }

        // console.log(`original value= ${editedInput[i]} new value= ${shiftedLetter}`) // this is just saying what moved to what. A grand key as to say
        editedInput[i] = shiftedLetter
    }

    const newString = editedInput.join()
    const commaRemoved = newString.replaceAll(',', '')
    console.log(commaRemoved)
}
encrypt()
