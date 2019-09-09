function showSlides(id) {

  // debugger

  var slideIndex = 0;
  var slides = document.querySelectorAll(`${id} .item`);
  var arrows = document.querySelectorAll(`${id} .arrow-article`);
  var dots = document.querySelectorAll(`${id} .slider-dots-item`);


  slides[0].style.display = "block";
  dots[0].className += " active";

  arrows[0].addEventListener("click", function () {
    decreaseIndex()
    removeActive()
    setActive()
  })

  arrows[1].addEventListener("click", function () {
    increaseIndex()
    removeActive()
    setActive()
  })

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
      setIndex(i)
      removeActive()
      setActive()
    })
  }

  function increaseIndex() {
    slideIndex += 1;
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }
  }

  function decreaseIndex() {
    slideIndex -= 1;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }

  function setIndex(i) {
    slideIndex = i;
  }

  function setActive() {
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
  }

  function removeActive() {
    for (let s = 0; s < slides.length; s++) {
      slides[s].style.display = "none";
    }
    for (let d = 0; d < dots.length; d++) {
      dots[d].classList.remove("active");
      // dots[d].className = dots[d].className.replace(" active", "");
    }
  }
}