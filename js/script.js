var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
     showDivs((slideIndex += n));
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
     if (n > imgList.length) slideIndex = 1;
     else if (n < 1) slideIndex = imgList.length;

     for (i = 0; i < imgList.length; i++ ){
        imgList[i].style.display = 'none';
     }

     imgList[slideIndex - 1].style.display = 'block';

}
setInterval(() => {
    plusDivs(1);
}, 3000);

document.getElementById('contact-form').addEventListener('submit', function(event) {

    event.preventDefault();
   
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let option = document.getElementById('interest').value;
        
    if (firstName && lastName && email && option) {
   
       alert('terimakasih telah mengisi segera tim kami akan menghubungi anda terimakasih.');
        
       // Reset form fields

        document.getElementById('contact-form').reset();
    } else {
   
       alert('Tolong isi field yang kosong.');
   
    }
   
   });