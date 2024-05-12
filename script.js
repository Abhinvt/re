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
function Send(){

  Email.send({
    SecureToken :"775bd6d8-36da-4362-9ea9-e00d8118604f",
    To : 'atkeys7@gmail.com',
    From :"admin@notifies.site",
    Subject : "New Contact",
    Body : "<br/> <br/> Name: " + document.getElementById("Name").value + "<br/><br/> Phone No: " + document.getElementById("phone").value + "<br/> <br/> Email Id: " + document.getElementById("email").value + "<br/> <br/> Message: " + document.getElementById("message").value 

    })

  .then(
    message => {
      if (message==='OK') {
        swal("Thanks", "We Will Reach To You Soon", "success");
      }
    }
  );
}