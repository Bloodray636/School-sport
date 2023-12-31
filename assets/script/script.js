$("#owl-demo-1").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoWidth: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight:true,
    dots: true,
    dotsEach: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
});

$("#owl-demo-2").owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoWidth: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoHeight:true,
  dots: true,
  dotsEach: true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:false,
          loop:true
      }
  }
});

$("#owl-demo-3").owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoWidth: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoHeight:true,
  dots: true,
  dotsEach: true,
  responsive:{
      0:{
          items:3,
          nav:false
      },
      767:{
        items:5,
        nav:false
      }
  }
});

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()