
/* Parallax home*/
$('.parallax-window').parallax({imageSrc: 'img/parallax-home.jpg'});
/* HZ*/
$(window).trigger("resize").trigger("scroll");

/* Slider home*/
$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  cssEase: 'linear'
});

$('.reviews-wrap').slick({
  infinite: true,
  dots: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false
});
$(document).load(function(){
  $('.slick-active .slider-title').addClass('animated fadeInDown');
  $('.slick-active .slider-title2').addClass('animated fadeInLeft');
  $('.slick-active .slider-text').addClass('animated fadeInRight');
  $('.slick-active .slider-link').addClass('animated fadeInUp');
});

 $('.slider').on('afterChange', function(event, slick, nextSlide) {
    $('.slick-active .slider-title').removeClass('hidden');
    $('.slick-active .slider-title').addClass('animated fadeInDown');

    $('.slick-active .slider-title2').removeClass('hidden');
    $('.slick-active .slider-title2').addClass('animated fadeInLeft');

    $('.slick-active .slider-text').removeClass('hidden');
    $('.slick-active .slider-text').addClass('animated fadeInRight');

    $('.slick-active .slider-link').removeClass('hidden');
    $('.slick-active .slider-link').addClass('animated fadeInUp');
  });

  $('.slider').on('beforeChange', function(event, slick, currentSlide) {
    $('.slick-active .slider-title').removeClass('animated fadeInDown');
    $('.slick-active .slider-title').addClass('hidden');

    $('.slick-active .slider-title2').removeClass('animated fadeInLeft');
    $('.slick-active .slider-title2').addClass('hidden');

    $('.slick-active .slider-text').removeClass('animated fadeInRight');
    $('.slick-active .slider-text').addClass('hidden');

    $('.slick-active .slider-link').removeClass('animated fadeInUp');
    $('.slick-active .slider-link').addClass('hidden');
  });


$('.gallery-popup').slick({
  infinite: true,
  slidesToShow: 1,
  prevArrow: '<button class="slick-prev1"></button>',
  nextArrow: '<button class="slick-next1"></button>',
  slidesToScroll: 1
});


/* Gallery*/




$(document).ready(function() {
  $('.gallery-col-link1, .gallery-col-img-box1').magnificPopup({
    autoFocusLast: false,
    removalDelay: 300,
   
    items: [
      {
        src: 'img/files-uluch/foto1.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-uluch/foto2.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-uluch/foto3.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-uluch/foto4.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-uluch/foto5.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-uluch/foto6.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      }
    ],
    gallery: {
      enabled: true
    },
    callbacks: {
    
      buildControls: function() {
        // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
      },
      change: function() {
          if (this.isOpen) {
              this.wrap.addClass('mfp-open');
          }
      } 
    },
    type: 'image' // this is default type
  });
  $('.gallery-col-link2, .gallery-col-img-box2').magnificPopup({
    autoFocusLast: false,
    items: [
      {
        src: 'img/files-stand/foto1.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-stand/foto2.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-stand/foto3.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-stand/foto4.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-stand/foto5.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-stand/foto6.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-stand/foto7.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      }
    ],
    gallery: {
      enabled: true
    },
    callbacks: {
    
      buildControls: function() {
        // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
      },
      change: function() {
          if (this.isOpen) {
              this.wrap.addClass('mfp-open');
          }
      } 
    },
    type: 'image' // this is default type
  });
  $('.gallery-col-link3, .gallery-col-img-box3').magnificPopup({
    autoFocusLast: false,
    items: [
      {
        src: 'img/files-luks/foto1.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto2.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto3.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto4.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto5.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto6.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto7.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto8.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto9.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto10.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto11.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto12.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto13.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-luks/foto14.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      }
    ],
    gallery: {
      enabled: true
    },
    callbacks: {
    
      buildControls: function() {
        // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
      },
      change: function() {
          if (this.isOpen) {
              this.wrap.addClass('mfp-open');
          }
      } 
    },
    type: 'image' // this is default type
  });
  $('.gallery-col-link4, .gallery-col-img-box4').magnificPopup({
    autoFocusLast: false,
    items: [
      {
        src: 'img/files-san/foto1.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto2.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto3.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto4.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto5.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto6.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto7.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto10.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto-48.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto-49.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto-50.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto-62.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-san/foto-63.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      }
    ],
    gallery: {
      enabled: true
    },
    callbacks: {
    
      buildControls: function() {
        // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
      },
      change: function() {
          if (this.isOpen) {
              this.wrap.addClass('mfp-open');
          }
      } 
    },
    type: 'image' // this is default type
  });
  $('.gallery-col-link5, .gallery-col-img-box5').magnificPopup({
    autoFocusLast: false,
    items: [
      {
        src: 'img/files-ter/foto1.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto2.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto3.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto4.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto5.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto6.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto7.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto8.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto9.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto10.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto11.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto12.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto13.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto14.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto15.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto16.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto17.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto18.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto19.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto20.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto21.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto22.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto51.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto60.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto61.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto72.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files-ter/foto73.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      }
    ],
    gallery: {
      enabled: true
    },
    callbacks: {
    
      buildControls: function() {
        // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
      },
      change: function() {
          if (this.isOpen) {
              this.wrap.addClass('mfp-open');
          }
      } 
    },
    type: 'image' // this is default type
  });
  $('.gallery-col-link6, .gallery-col-img-box6').magnificPopup({
    autoFocusLast: false,
    items: [
      {
        src: 'img/files/foto1.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto2.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto3.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto4.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto5.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto6.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto7.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto8.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto9.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto10.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto11.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto12.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto13.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto14.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto15.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto16.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto17.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto18.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto19.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto20.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto21.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto22.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto23.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto24.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto25.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      },
      {
        src: 'img/files/foto26.jpg',
        title: 'Номер улучшенный (Standart)<br><p>Однокомнатный двухместный типовой номер</p>'
      }
    ],
    gallery: {
      enabled: true
    },
    callbacks: {
    
      buildControls: function() {
        // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
      },
      change: function() {
          if (this.isOpen) {
              this.wrap.addClass('mfp-open');
          }
      } 
    },
    type: 'image' // this is default type
  });

});




/* Calendar*/
$("#date").flatpickr({
  "locale": "ru",
   dateFormat: "d.m.Y",
   enable: [
    {
      from: new Date().fp_incr(3),
      to: new Date().fp_incr(95)
    }
  ]
});




/* Mobile menu*/
$(".header-mob-icon").click(function(){
    $(".header-mob-block").toggle(500);
});

/* Swipe slide in popup*/

$("body").on("swiperight", ".mfp-figure", function () {
    $(".mfp-arrow-left").magnificPopup("prev");
});
$("body").on("swipeleft", ".mfp-figure", function () {
    $(".mfp-arrow-right").magnificPopup("next");
});

/* Spoiler review*/
$(".reviews-box-more").click(function(){
    $(this).prev().css('height','auto').css('visibility', 'visible');
    $(this).parents('.slick-list').css('height','auto');
    
});
$(document).ready(function(){
  $('.reviews-box-hide2').hide()
  $('.reviews-box-more2').click(function(){
    $(this).toggleClass("reviews-box-more-active").toggleClass("reviews-box-more-non").prev().slideToggle()
  })
})

/* Scroll top*/
$(document).ready(function(){
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });
});