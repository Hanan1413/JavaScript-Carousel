const slides = document.querySelectorAll(".slide");
console.log(slides);


slides.forEach((slide, indx) =>{
    slide.style.transform = `translateX(${indx * 100}%)`
})

// current slide counter
let curSlide = 0;

// Maximum number of slides
let maxtSlide = slides.length - 1;



// select next slide button
const nextSlide = document.querySelector(".btn.btn-next");

console.log(nextSlide)

// add event listener and next slide functionality
nextSlide.addEventListener("click", function() {

    // check if current slide is the last and reset current slide
     curSlide === maxtSlide ? curSlide = 0 : curSlide++

    //  curSlide++
     
      slides.forEach((slide, indx) => {
          slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;


     })
})

// Select prev slide button
const prevSlide = document.querySelector(".btn-prev")
console.log(prevSlide)

prevSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  curSlide === 0 ? curSlide = maxtSlide : curSlide--

  //  curSlide++

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});