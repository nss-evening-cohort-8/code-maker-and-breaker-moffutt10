// Print to Dom Function
const printToDom = (stringToPrint, selectedDiv) => {
    document.getElementById(selectedDiv).innerHTML += stringToPrint;
};

// Encrypter
const encryptMyWords = () => {
    let toConvert = document.getElementById('wordsInput').value;
    let wordsArray = toConvert.split('');
    wordsArray.forEach(function(element, index) {
        element.charCodeAt(0);
        let value = element.charCodeAt(0);
        if (index < wordsArray.length-1) {
            value += ',';
        }
        printToDom(value, 'outputDataSecret');
    })
};

// Decrypter
const decryptMyWords =() => {
    let toConvert = document.getElementById('secretInput').value.split(',');
    let blah = '';
    for (i=0; i<toConvert.length; i++) {
        blah += String.fromCharCode(toConvert[i]);
    }
    printToDom(blah, 'outputDataWords');
};

// Button Event Listeners
document.getElementById('encryptButton').addEventListener("click", (e) => {
    e.preventDefault();
    encryptMyWords();
});

document.getElementById('decryptButton').addEventListener("click", (e) => {
    e.preventDefault();
    decryptMyWords();
})