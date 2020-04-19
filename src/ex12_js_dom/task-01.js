let leftButton = document.getElementById("leftBtn"),
    rightButton = document.getElementById("rightBtn"),
    currentImg = document.querySelector("#slide");

let photos = [
    'pigs.jpg', 'cat.jpg', 'president.jpg'
];
let currentSlide = 0;

window.addEventListener('load', function() {
   currentImg.src = photos[0];
})

rightButton.addEventListener('click', function() {
    currentSlide++;
    if (currentSlide > photos.length - 1){
        currentSlide = 0;
    }
    currentImg.src = photos[currentSlide];
    return;
});

leftButton.addEventListener('click', function(){
    currentSlide--;
    if (currentSlide < 0){
        currentSlide = photos.length - 1;
    }
    currentImg.src = photos[currentSlide];
    return;
})
