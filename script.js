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
var carouselInterval;
var isMouseOver = false;

for (var i = 0; i < slidesArray.length; i++) {
  slidesArray[i].addEventListener("mouseover", pauseCarousel);
  slidesArray[i].addEventListener("mouseout", resumeCarousel);
}

carousel();

function carousel() {
  var i;
  for (i = 0; i < slidesArray.length; i++) {
    slidesArray[i].style.opacity = 0.5;
    slidesArray[i].style.transform = "scale(1)";
    slidesArray[i].style.marginRight = "0px";
    slidesArray[i].style.marginLeft = "0px";
  }

  slideIndex = (slideIndex + 1) % slidesArray.length;

  slidesArray[slideIndex].style.opacity = 1;
  slidesArray[slideIndex].style.marginRight = "20px";
  slidesArray[slideIndex].style.marginLeft = "20px";
  slidesArray[slideIndex].style.transform = "scale(1.2)";
  container.classList.remove("changeOrderAnimation");

  carouselInterval = setTimeout(function () {
    if (!isMouseOver) {
      carousel();
    }
  }, 2000);
}

function pauseCarousel(event) {
  var targetImage = event.target;
  isMouseOver = true;

  for (var i = 0; i < slidesArray.length; i++) {
    slidesArray[i].style.opacity = 0.5;
    slidesArray[i].style.transform = "scale(1)";
    slidesArray[i].style.marginRight = "0px";
    slidesArray[i].style.marginLeft = "0px";
  }

  targetImage.style.opacity = 1;
  targetImage.style.marginRight = "30px";
  targetImage.style.marginLeft = "30px";
  targetImage.style.transform = "scale(1.3)";
  clearInterval(carouselInterval);
}

function resumeCarousel(event) {
  var targetImage = event.target;
  isMouseOver = false;

  targetImage.style.opacity = 0.5;
  targetImage.style.marginRight = "0px";
  targetImage.style.marginLeft = "0px";
  targetImage.style.transform = "scale(1)";

  carouselInterval = setTimeout(function () {
    if (!isMouseOver) {
      carousel();
    }
  }, 2000);
}



function hidehelp(){
var hideethis = document.getElementsByClassName("guide");
const hidethis = document.querySelector(".guide");
hidethis.ontransitionend = () => {
hideethis[0].style.opacity=0;
//hideethis[0].style.visibility="hidden";
  console.log("Animation ended");
};

}



