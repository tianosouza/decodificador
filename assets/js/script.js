function encrypt (text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat')
}

function decrypt (text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u')
}

function textUpercase(text) {
    return /[A-ZÁÉÍÓÚÀÃÕÂÊÎÔÛÄËÏÖÜÇ]/.test(text) || /[áéíóúàãõâêîôûäëïöüç]/.test(text);
}

addEventListener('click', function (event) {
    const textTyped = document.getElementById('decode__text');
    const alert = document.getElementById('text__alert');
    const statusDecode = document.getElementById("status");
    const resEncrypted = document.getElementById('encrypted');

    if (event.target == textTyped ) {
        alert.setAttribute('style', 'color: #0A3871');
        statusDecode.setAttribute('style', 'color: #0A3871');        
        statusDecode.innerHTML= 'Nenhuma mensagem encontrada';
        resEncrypted.innerHTML='';
    }
})

function encryptText () {
    const textTyped = document.getElementById('decode__text').value;
    const resEncrypted = document.getElementById('encrypted');
    const statusDecode = document.getElementById("status");
    const btnPast = document.getElementById('btn__paste');
    const alert = document.getElementById('text__alert');
    const imgSearch = document.getElementById('img__search');

    if ( textUpercase(textTyped)) {
        alert.setAttribute('style', 'color: red; font-weight: bolder');
        document.getElementById('decode__text').value = '';
        return;
    }       
   
    if  (textTyped){
        let result = encrypt(textTyped);
        resEncrypted.innerText = result;
        statusDecode.innerHTML = 'Mensagen Criptografada';
        imgSearch.style.display='none';
        document.getElementById('decode__text').value = '';
    } else {
        statusDecode.setAttribute('style', 'color: red');
        statusDecode.innerHTML= 'Você precisa digitar alguma palavra';
        imgSearch.style.display='block';
        document.getElementById('decode__text').value = '';
    }


    if (encrypt(textTyped)) {
        btnPast.setAttribute('style', 'display: block');
    } else {
        btnPast.setAttribute('style', 'display: none');
    }    

}

function decryptText () {
    const textTyped = document.getElementById('decode__text').value;
    const resEncrypted = document.getElementById('encrypted');
    const statusDecode = document.getElementById("status");

    let result;

    if (textTyped) {
        result = decrypt(textTyped);
        resEncrypted.innerText = result;
        statusDecode.innerHTML = "Mensagem Decriptografada!";
        document.getElementById('decode__text').value = '';
    }

}

function  pasteText() {
    const btnPast = document.getElementById('btn__paste');
    const resEncrypted = document.getElementById('encrypted');
    const body = document.querySelector('body');
    const imgSearch = document.getElementById('img__search');
    const statusDecode = document.getElementById("status");
    
    navigator.clipboard.writeText(resEncrypted.textContent);
    imgSearch.style.display = 'none';
    statusDecode.innerHTML = 'Mensagem copiada!';
    resEncrypted.innerHTML = '';   
}
