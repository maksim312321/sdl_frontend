let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');

  // let's write condition to loop a slideshow
  // when n is greater then slides.length then value of slideIndex should be 1
  if (n > slides.length) {
    slideIndex = 1;
  }
  // when n is less then 1 then value of slideIndex should be equal to slides.length
  if (n < 1) {
    slideIndex = slides.length;
  }

  /* hiding all images by default using display none  */
  for (i = 0; i < slides.length; i + 1) {
    slides[i].style.display = 'none';
    // console.log(slides[i])
  }

  slides[slideIndex - 1].style.display = 'block';
  // console.log(`slide index ${slideIndex - 1}`);
}
showSlides(slideIndex);

// we have to pass n as an parameter in function
// we'll get the value of n by calling function and passing slideIndex as an argument

document.addEventListener('contextmenu', (event) => event.preventDefault());
