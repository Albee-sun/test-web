/* 滑動至錨點的位置 */
$(function () {


  if ($(window).width() < 991) {

    $('.hamBar').click(function () {
      event.preventDefault();
      $('.menu').slideToggle(100);
      $(this).toggleClass('open');
    });
  }

  /*  $('.hamBar').click(function(){
     
   }); */
  /* 滑鼠至錨點的位置 */
  /* $("nav a").click(function () {
    var btn = $(this).attr("href");
    var pos = $(btn).offset();
    $("html,body").animate({ scrollTop: pos.top }, 1000);
  }); */


  /* ---gotop 按鈕---- */

  /* 置頂按鈕 */

  $("#gotop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });


  /* 指定捲軸位置淡出淡入 */

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#gotop").stop().fadeTo("fast", 1);
    } else {
      $("#gotop").stop().fadeOut("fast");
    }
  });


  $('.smove-box').smoove({
    /* 距離30%處開始動畫 */
    offset: '30%'
  });

  /* -----loading------ */

  $(window).on("load", function () {
    $("#loading").delay(3000).hide(0);
  });

});

/* --------動態menu--------- */
(function ($) { // Begin jQuery
  $(function () { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('.menu li a:not(:only-child)').click(function (e) {
      $(this).siblings('.menu_2').toggle();
      // Close one dropdown when selecting another
      $('.menu_2').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.menu_2').hide();
    });
    // Toggle open and close nav styles on click
    $('.menu a').click(function () {
      $('.menu_2 ul').slideToggle();
    });
    // Hamburger to X toggle
    $('.menu a').on('click', function () {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery


/* ---------------------timeline-------------------- */

$(function () {

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {

    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }

  sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });

  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });
});

/* -----------頁首雪花動畫---------- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

