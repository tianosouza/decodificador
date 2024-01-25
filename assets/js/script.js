
function decodeText() {
    const encodedTextElement = document.getElementById("decoder__text");
    const encodedText = document.getElementById("decoder__text").value.toLowerCase();
    const decodedResultElement = document.getElementById("decoder");

    const decodedText = decode(encodedText);
    
    decodedResultElement.innerText = decodedText;
    encodedTextElement.value = "";
}

function decode(encodedText) {
    let decodedText = "";

    for (let i = 0; i < encodedText.length; i++) {
        let currentChar = encodedText[i];

        switch (currentChar) {
            case 'e':
                decodedText += "enter";
                break;
            case 'i':
                decodedText += "imes";
                break;
            case 'a':
                decodedText += "ai";
                break;
            case 'o':
                decodedText += "ober";
                break;
            case 'u':
                decodedText += "ufat";
                break;
            default:
                decodedText += currentChar;
                break;
        }
    }

    return decodedText;
}
