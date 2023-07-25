var inputText = document.querySelector('#inputText');
var qrcode = document.querySelector('#qrcode');
var generateBtn = document.querySelector('#generateBtn');
var imgBox = document.querySelector('.imgBox');

function generateQR(){
    if (inputText.value != ""){
    qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
    imgBox.classList.add('showImg');
    }
}

generateBtn.addEventListener('click', generateQR);