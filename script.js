var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      direction: 'horizontal',
      loop: true,
      autoplay: {
      delay: 3000, // Adjust the delay as needed (in milliseconds)
      disableOnInteraction: false,
      },
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}