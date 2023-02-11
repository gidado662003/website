// MENU TOGGLING 
let meun = document.querySelector("ul");
let body = document.querySelector(".left-section");
let main = document.querySelector(".row")
// meun.style.height = "0px"
function toggleMenu(){
    if (meun.style.height == "0px"){
        meun.style.height  = "300px";
        main.style.height = "700px"	;
        body.style.marginTop = "190px"
    }else{
        meun.style.height = "0px";
        main.style.height = "500px";
        body.style.marginTop = "0px"
    }
    console.log(meun.style.height)
}


//SLIDE SHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}