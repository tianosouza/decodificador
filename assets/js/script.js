const body = document.querySelector('body');
const imgTexEncry = document.getElementById('img__search');

addEventListener('click', function (event) {
    if (event.target !== body){
        decodeText;
        imgTexEncry.setAttribute('style', 'display: none');
    }
})

function decodeText() {
    const encodedTextElement = document.getElementById("decode__text");
    const encodedText = encodedTextElement.value.toLowerCase();
    const decodedResultElement = document.getElementById("encrypted");
    const statusDecoder = document.getElementById("status");
    const imgTexEncry = document.getElementById('img__search');

    const decodedText = decode(encodedText);
    
    decodedResultElement.innerText = decodedText;

    if (decodedText) {
        imgTexEncry.setAttribute('style', 'display:none');
        statusDecoder.innerHTML = "Mensagem Criptografada!";
    }

    if (decodedText === "") {
        statusDecoder.innerHTML = "Você precisa digitar alguma palavra para criptografar!";
        statusDecoder.setAttribute('style', 'color: red', 'font-weight: 700')
    }
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
    const decodedResultElement = document.getElementById("encrypted");

    encodedTextElement.value = "";
    
    decodedResultElement.innerHTML = encodedText;
}

