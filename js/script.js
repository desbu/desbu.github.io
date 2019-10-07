function showSlides(id) {

  let slideIndex = 0;
  let slides = document.querySelectorAll(`${id} .item`);
  let arrows = document.querySelectorAll(`${id} .arrow`);
  let dots = document.querySelectorAll(`${id} .slider-dots-item`);
  let interval;

  if (slides.length) {
    slides[0].style.display = 'block';

    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', function () {
        setIndex(i)
        removeActive()
        setActive()
        // updateInterval()
      })
    }
  }

  if (dots.length) {
    dots[0].className += ' active';
  }

  if (arrows.length) {
    arrows[0].addEventListener('click', function () {
      decreaseIndex()
      removeActive()
      setActive()
      // updateInterval()
    })

    arrows[1].addEventListener('click', function () {
      increaseIndex()
      removeActive()
      setActive()
      // updateInterval()
    })
  }

  // updateInterval()

  function updateInterval() {
    clearInterval(interval);
    interval = setInterval(function () {
      increaseIndex()
      removeActive()
      setActive()
    }, 10000);
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
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].className += ' active';
  }

  function removeActive() {
    for (let s = 0; s < slides.length; s++) {
      slides[s].style.display = 'none';
    }
    for (let d = 0; d < dots.length; d++) {
      dots[d].classList.remove('active');
    }
  }
}

callMenu()

function callMenu() {
  let button = document.querySelector('.nav-button');
  let links = document.querySelectorAll('.link');
  let overlay = document.querySelector('.overlay');
  let nav = document.querySelector('.main-nav');


  button.addEventListener('click', function () {
    button.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('overflow');
  })

  for (let index of links) {
    index.addEventListener('click', function () {
      button.classList.toggle('active');
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('overflow');
    })
  }

  overlay.addEventListener('click', function () {
    button.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('overflow');
  })
}

function shiftSlide() {
  let slider = document.querySelector('.nav-features');
  let slides = document.querySelectorAll('.item');
  let buttons = document.querySelectorAll('.button');
  let i = 0;

  buttons[i].style.marginLeft = 0;

  setInterval(function () {

    if (i === slides.length - 1) {
      i = 0;
      slider.style.transform = 'translateX(0)';
      for (let index of slides) {
        index.style.opacity = 1;
      }
      setTimeout(function () {
        for (let index = 1; index < buttons.length; index++) {
          buttons[index].style.marginLeft = '500px';
        }
      }, 1500)
    } else {
      for (let index of slides) {
        index.style.opacity = 0;
      }
      i++;
      slides[i].style.opacity = 1;
      slider.style.transform = `translateX(-${i * 500}px)`;
      setTimeout(function () {
        buttons[i].style.marginLeft = 0;
      }, 500)
    }

  }, 6000);
}

ShowHideMenu()

function ShowHideMenu() {
  let scrollPos = 0;
  let nav = document.querySelector('nav');
  let button = document.querySelector('.nav-button');
  window.addEventListener('scroll', function () {
    if ((document.body.getBoundingClientRect()).top >= scrollPos) {
      nav.style.top = '0px';
      button.style.top = '0px';
    // nav.classList.toggle('active');
    // console.log(scrollPos);
    } else {
      nav.style.top = '-50px';
      button.style.top = '-50px';
    // nav.classList.toggle('active');
    // console.log(scrollPos);
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
  });
}