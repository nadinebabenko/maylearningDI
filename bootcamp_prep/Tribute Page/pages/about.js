const prevButton =  document.querySelector(`.prev`);
const nextButton = document.querySelector(`.next`);
const galleryImgs = document.querySelectorAll(`.gallery-img`);
let currentlyselected = 0;
prevButton.addEventListener(`click`, function (){
galleryImgs[currentlyselected].classList.remove("active");
currentlyselected--;
galleryImgs[currentlyselected].classList.add("active");
nextButton.disabled = false;

if (galleryImgs.length === 0) {
    prevButton.disabled = true;
}
});
nextButton.addEventListener (`click`, function(){
    galleryImgs[currentlyselected].classList.remove("active");
currentlyselected++;
galleryImgs[currentlyselected].classList.add("active");
prevButton.disabled = false;
if (galleryImgs.length === currentlyselected + 1) {
nextButton.disabled = true;
}
});

