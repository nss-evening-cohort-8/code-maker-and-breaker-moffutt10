// Print to Dom Function
const printToDom = (stringToPrint, selectedDiv) => {
    document.getElementById(selectedDiv).innerHTML += stringToPrint;
};

// Variables to connect back into DOM
let finalSecret;

// Define value from user words input, and turn it into an array
const encryptMyWords = () => {
    let toConvert = document.getElementById('wordsInput').value.toString();
    let wordsArray = toConvert.split('');
    wordsArray.forEach(function(element) {
        let value = wordsArray.charCodeAt();
    });
}

    
//     charCodeAt(i).toString();
//         console.log(value);
//     }
//     printToDom(value, 'outputDataSecret');
// }


// Button Event Listeners
document.getElementById('encryptButton').addEventListener("click", (e) => {
    e.preventDefault();
    encryptMyWords();
})