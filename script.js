// useless code
const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dropdownContent = button.nextElementSibling;
    dropdownContent.classList.toggle('show');
  });
});

//not useless

var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var container = document.getElementById("imagers");
var slidesArray = Array.from(slides);

carousel();

function carousel() {
  var i;
  for (i = 0; i < slidesArray.length; i++) {
    slidesArray[slideIndex].style.opacity = 0.5;
            slidesArray[slideIndex].style.transform = "scale(1)"; 
                            slidesArray[slideIndex].style.marginRight = "0px";
                                slidesArray[slideIndex].style.marginLeft = "0px";
  }


  slideIndex = (slideIndex + 1) % slidesArray.length;




    
    
console.log(slideIndex);
        slidesArray[slideIndex].style.opacity = 1;
                slidesArray[slideIndex].style.marginRight = "20px";
                
                                slidesArray[slideIndex].style.marginLeft = "20px";
        slidesArray[slideIndex].style.transform = "scale(1.2)"; 
        container.classList.remove("changeOrderAnimation");
  setTimeout(carousel, 2000);
}




