// Print to Dom Function
const printToDom = (stringToPrint, selectedDiv) => {
    document.getElementById(selectedDiv).innerHTML += stringToPrint;
};


// Define value from user words input, and turn it into an array
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


// Button Event Listeners
document.getElementById('encryptButton').addEventListener("click", (e) => {
    e.preventDefault();
    encryptMyWords();
})