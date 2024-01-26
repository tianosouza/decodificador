
function decodeText() {
    const encodedTextElement = document.getElementById("decoder__text");
    const encodedText = encodedTextElement.value.toLowerCase();
    const decodedResultElement = document.getElementById("decoder");
    const statusDecoder = document.getElementById("status");

    const decodedText = decode(encodedText);
    
    decodedResultElement.innerText = decodedText;
    statusDecoder.innerHTML = "Mensagem Criptografada";
    
    encodedTextElement.addEventListener('click', function() {
        statusDecoder.innerHTML = "Nenhuma mensagen encontrada";
        // decodedResultElement.value = "";
    });
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


function copyButton () {
    const encodedTextElement = document.getElementById("decoder__text");
    const encodedText = encodedTextElement.value.toLowerCase();
    return decode(encodedText);
}

function encodeText () {
    const encodedTextElement = document.getElementById("decoder__text");
    const encodedText = encodedTextElement.value.toLowerCase();
    const decodedResultElement = document.getElementById("decoder");
    const statusDecoder = document.getElementById("status");

    encodedTextElement.value = "";

    statusDecoder.innerHTML = "Mensagem descriptografada";
    
    decodedResultElement.innerHTML = encodedText;
}

