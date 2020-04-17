let imageSide = document.getElementById("imageContainer"),
    leftButton = document.getElementById("left"),
    rightButton = document.getElementById("right"),
    currentImg = document.querySelector(".slide-show");

let photo1 = new Image ();
let photo2 = new Image ();
let photo3 = new Image ();

photo1.src = 'pigs.jpg';
photo2.src = 'cat.jpg';
photo3.src = 'president.jpg';

let photos = [
    photo1, photo2, photo3
];
let currentSlide = 0;

photos[0].classList.add('slide-show');
imageSide.appendChild(photos[0]);


rightButton.addEventListener('click', function() {
    currentSlide++;
    if (currentSlide > photos.length - 1){
        currentSlide = 0;
    }

    photos[currentSlide].classList.add('slide-show');

    imageSide.replaceChild(photos[currentSlide], document.querySelector(".slide-show"));
    return;
});

leftButton.addEventListener('click', function(){
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = photos.length - 1;
    }

    photos[currentSlide].classList.add('slide-show');

    imageSide.replaceChild(photos[currentSlide], document.querySelector(".slide-show"));
    return;
})
