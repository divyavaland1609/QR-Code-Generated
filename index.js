let imgbox =document.getElementById("imgbox");
let qrimage =document.getElementById("imgbox");
let qrtext =document.getElementById("imgbox");


function generateQR(){
    qrimage.src="C:\Users\Admin\Desktop\QR Code Generated\QRcode.png" +qrtext.value;
    // qrimage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&datahttps://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrtext.Value;
    imgbox.classList.add("show-img")
}