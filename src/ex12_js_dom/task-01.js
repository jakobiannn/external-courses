let leftButton = document.querySelector("#leftBtn"),
    rightButton = document.querySelector("#rightBtn"),
    currentImg = document.querySelector("#slide"),
    imageSide = document.querySelector(".slider"),

photos = [
    'pigs.jpg', 'cat.jpg', 'president.jpg'
],
currentSlide = 0;

window.addEventListener('load', function() {
   currentImg.src = photos[currentSlide];
})
let nextPhoto = new Image ();

function slideRight() {
  currentSlide++;
  if (currentSlide > photos.length - 1){
      currentSlide = 0;
  }

  nextPhoto.src = photos[currentSlide];
  nextPhoto.id = "slide";
  nextPhoto.alt = "slidePicture";

  imageSide.replaceChild(nextPhoto, currentImg);

  currentImg = nextPhoto;
  return;
}

function slideLeft() {
  currentSlide--;
  if (currentSlide < 0){
      currentSlide = photos.length - 1;
  }

  nextPhoto.src = photos[currentSlide];
  nextPhoto.id = "slide";
  nextPhoto.alt = "slidePicture";

  imageSide.replaceChild(nextPhoto, currentImg);

  currentImg = nextPhoto;
  return;
}

rightButton.addEventListener('click', slideRight);
document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowRight') {
    slideRight();
  }
})

leftButton.addEventListener('click', slideLeft);
document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowLeft') {
    slideLeft();
  }
})
