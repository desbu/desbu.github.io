function showSlides(id) {

  // debugger

  var slideIndex = 0;
  var slides = document.querySelectorAll(`${id} .item`);
  var arrows = document.querySelectorAll(`${id} .arrow`);
  var dots = document.querySelectorAll(`${id} .slider-dots-item`);

  if (slides.length > 0) {
    slides[0].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", function () {
        setIndex(i)
        removeActive()
        setActive()
      })
    }
  }

  if (dots.length > 0) {
    dots[0].className += " active";
  }

  if (arrows.length > 0) {
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