// Print to Dom Function
const printToDom = (stringToPrint, selectedDiv) => {
    document.getElementById(selectedDiv).innerHTML += stringToPrint;
};

// Encrypter
const encryptMyWords = () => {
    let toConvert = document.getElementById('wordsInput').value.split('');
    toConvert.forEach(function(element, index) {
        element.charCodeAt(0);
        let blah = element.charCodeAt(0);
        if (index < toConvert.length-1) {
            blah += ',';
        }
        printToDom(blah, 'outputDataSecret');
    })
};

// Decrypter
const decryptMyWords =() => {
    let toConvert = document.getElementById('secretInput').value.split(',');
    let blah = '';
    toConvert.forEach(function(element) {
        blah += String.fromCharCode(element);
    })
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