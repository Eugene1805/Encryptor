function vigenereEncrypt(text, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encrypted = '';
    text = text.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < text.length; i++) {
        const letter = text[i];
        if (alphabet.includes(letter)) {
            const textIndex = alphabet.indexOf(letter);
            const keyIndex = alphabet.indexOf(key[j % key.length]);
            encrypted += alphabet[(textIndex + keyIndex) % alphabet.length];
            j++;
        } else {
            encrypted += letter;
        }
    }
    return encrypted;
}

function vigenereDecrypt(text, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decrypted = '';
    text = text.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < text.length; i++) {
        const letter = text[i];
        if (alphabet.includes(letter)) {
            const textIndex = alphabet.indexOf(letter);
            const keyIndex = alphabet.indexOf(key[j % key.length]);
            decrypted += alphabet[(textIndex - keyIndex + alphabet.length) % alphabet.length];
            j++;
        } else {
            decrypted += letter;
        }
    }
    return decrypted;
}

function encrypt(){
    const text = document.querySelector(".inputArea").value
    const encrypted = vigenereEncrypt(text, 'KEY')
    document.querySelector(".outputArea").value = encrypted
}

function decrypt(){
    const text = document.querySelector(".inputArea").value
    const decrypted = vigenereDecrypt(text, 'KEY')
    document.querySelector(".outputArea").value = decrypted
}

function copy(){
    const text = document.querySelector(".outputArea").value
    navigator.clipboard.writeText(text)
}

function clear(){
    document.querySelector(".inputArea").value = ""
    document.querySelector(".outputArea").value = ""
}

document.querySelector(".encryptBtn").addEventListener("click", encrypt)
document.querySelector(".decryptBtn").addEventListener("click", decrypt)
document.querySelector(".copyBtn").addEventListener("click", copy)
document.querySelector(".clearBtn").addEventListener("click", clear)