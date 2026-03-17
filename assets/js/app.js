"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function ($) {
  "use strict";

  /*--------------------------------------------------------------
  [Table of contents]
  WION HEADER TRIGER JS INIT
  WION HEADER STICKY MENU JS INIT
  WION PRELOADER JS INIT
  WION PROGRES CIRCLE JS INIT
  WION CTA SLIDER JS INIT
  WION CTA SLIDER JS INIT2
  WION TESTIMONIAL JS INIT
  WION HOVER REVEAL START JS INIT
  WION AOS ANIMATION JS INIT
  WION BRAND JS INIT
  WION BRAND JS INIT2
  WION TAB SLIDER JS INIT
  WION PORTFOLIO JS INIT
  WION MENU SIDEBAR JS INIT
  WION IMAGE EXPAND JS INIT
  WION TESTIMONA JS INIT2
  WION MAP JS INIT
  END IMAGE SCROLL ROTATE JS INIT
  WION GSAP IMAGE ANIMATION JS INIT
  
  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  /*--------------------------------------------------------------
  WION HEADER TRIGER JS INIT
  --------------------------------------------------------------*/
  $(".wionheader-triger").on("click", function (e) {
    $(".wionsidemenu-column, .offcanvas-overlay").addClass("active");
    event.preventDefault(e);
  });
  $(".wionsidemenu-close, .offcanvas-overlay").on("click", function () {
    $(".wionsidemenu-column, .offcanvas-overlay").removeClass("active");
  });

  /*--------------------------------------------------------------
  WION STICKY MENU JS INIT
  --------------------------------------------------------------*/

  var lastScroll = 0;
  function sticky_header() {
    var header_hegith = $("header").innerHeight();
    var scroll = $(window).scrollTop();
    if (scroll > header_hegith && scroll > lastScroll) {
      $("header").addClass("hide-header");
    } else if (scroll < lastScroll) {
      $("header").removeClass("hide-header");
    }
    lastScroll = scroll;
  }
  $(function () {
    sticky_header();
  });
  window.onload = function () {
    sticky_header();
  };
  window.onscroll = function () {
    sticky_header();
  };
  window.onresize = function (event) {
    sticky_header();
  };
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 20) {
      $("#sticky-menu").addClass("sticky-menu");
    } else {
      $("#sticky-menu").removeClass("sticky-menu");
    }
  });

  /*--------------------------------------------------------------
  WION PROGRES CIRCLE JS INIT
  --------------------------------------------------------------*/

  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
  var updateProgress = function updateProgress() {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - scroll * pathLength / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({
      scrollTop: 0
    }, duration);
    return false;
  });
  /*--------------------------------------------------------------
  WION CTA SLIDER JS INIT
  --------------------------------------------------------------*/
  var t_slider = $(".wioncta-slider-init");
  if (t_slider.is_exist()) {
    t_slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 13000,
      arrows: false,
      pauseOnHover: false,
      cssEase: "linear",
      responsive: [{
        breakpoint: 1024,
        settings: {
          speed: 8000 // override speed at this breakpoint
        }
      }, {
        breakpoint: 600,
        settings: {
          speed: 5000 // another override
        }
      }]
    });
  }
  /*--------------------------------------------------------------
  WION CTA SLIDER JS INIT2
  --------------------------------------------------------------*/
  var t_slider2 = $(".wioncta-slider-init2");
  if (t_slider2.is_exist()) {
    t_slider2.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 13000,
      rtl: true,
      arrows: false,
      pauseOnHover: false,
      cssEase: "linear",
      responsive: [{
        breakpoint: 1024,
        settings: {
          speed: 8000 // override speed at this breakpoint
        }
      }, {
        breakpoint: 600,
        settings: {
          speed: 5000 // another override
        }
      }]
    });
  }

  /*--------------------------------------------------------------
  WION TESTIMONIAL JS INIT
  --------------------------------------------------------------*/
  var $carousel = $(".slick-slide-active").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  // WION HOVER REVEAL START JS INIT
  var hoverItem = document.querySelectorAll(".wionhover-reveal-item");
  function moveImage(e, hoverItem, index) {
    var item = hoverItem.getBoundingClientRect();
    var x = e.clientX - item.x;
    var y = e.clientY - item.y;
    if (hoverItem.children[index]) {
      hoverItem.children[index].style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
    }
  }
  hoverItem.forEach(function (item, i) {
    item.addEventListener("mousemove", function (e) {
      setInterval(moveImage(e, item, 1), 50);
    });
  });

  /*--------------------------------------------------------------
  WION AOS ANIMATION JS INIT
  --------------------------------------------------------------*/
  AOS.init({
    once: true,
    // Ensure animations can trigger multiple times
    duration: 800
  });

  /*--------------------------------------------------------------
  WION tp-text-invert-3
  --------------------------------------------------------------*/

  function WION_text_invert() {
    var split_1 = new SplitText(".WION_text_invert", {
      type: "lines"
    });
    split_1.lines.forEach(function (target) {
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: "top 85%",
          end: "bottom center"
        }
      });
    });
  }
  function WION_text_invert_2() {
    var split_2 = new SplitText(".WION_text_invert_2", {
      type: "lines"
    });
    split_2.lines.forEach(function (target) {
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: "top 85%",
          end: "bottom center"
        }
      });
    });
  }
  $(function () {
    WION_text_invert();
    WION_text_invert_2();
  });

  /*--------------------------------------------------------------
  WION BRAND JS INIT
  --------------------------------------------------------------*/

  var i_slider_data = $(".wionbrand-slider-js-init");
  if (i_slider_data.is_exist()) {
    i_slider_data.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      arrows: false,
      pauseOnHover: false,
      cssEase: "linear",
      responsive: [{
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  }

  /*--------------------------------------------------------------
  WION BRAND JS INIT2
  --------------------------------------------------------------*/
  var i_slider_data = $(".wionbrand-slider-js-init2");
  if (i_slider_data.is_exist()) {
    i_slider_data.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      arrows: false,
      rtl: true,
      pauseOnHover: false,
      cssEase: "linear",
      responsive: [{
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  }

  /*--------------------------------------------------------------
  WION TAB SLIDER JS INIT
  --------------------------------------------------------------*/
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");
    $("ul.tabs li").removeClass("current");
    $(".wiontab-content").removeClass("current");
    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });

  /*--------------------------------------------------------------
  WION PORTFOLIO JS INIT
  --------------------------------------------------------------*/

  var i_slider_data = $(".wionportfolio-slider-js-init");
  if (i_slider_data.is_exist()) {
    i_slider_data.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      infinite: true,
      arrows: false,
      pauseOnHover: false,
      cssEase: "linear",
      responsive: [{
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  }

  /*--------------------------------------------------------------
  WION MENU SIDEBAR JS INIT
  --------------------------------------------------------------*/
  $(".wionheader-barger").on("click", function (e) {
    $(".wionsidemenu-column2, .offcanvas-overlay").addClass("active");
    event.preventDefault(e);
  });
  $(".wionsidemenu-close, .offcanvas-overlay").on("click", function () {
    $(".wionsidemenu-column2, .offcanvas-overlay").removeClass("active");
  });

  /*--------------------------------------------------------------
  WION IMAGE EXPAND JS INIT
  --------------------------------------------------------------*/

  var items = document.querySelectorAll(".wionp-img-expand-wrap");
  if (items.length) {
    items.forEach(function (item) {
      item.addEventListener("mouseover", function () {
        // Remove 'hovered' class from all items
        items.forEach(function (otheritem) {
          otheritem.classList.remove("expand");
        });

        // Add 'hovered' class to the current item
        item.classList.add("expand");
      });
    });
  }
  $(window).on("resize", function () {}); // end window resize

  /*===========================================
      =    On Load Function      =
  =============================================*/
  $(window).on("load", function () {
    preloader();
    $(".mcs-horizontal").mCustomScrollbar({
      axis: "x",
      theme: "dark-thick",
      autoExpandScrollbar: true,
      advanced: {
        autoExpandHorizontalScroll: true
      },
      updateOnContentResize: true,
      scrollbarPosition: "outside",
      scrollInertia: 200
    });
  });

  /*--------------------------------------------------------------
  WION TESTIMONA JS INIT2
  --------------------------------------------------------------*/

  var t_slider = $(".wiont-slider-init2");
  if (t_slider.is_exist()) {
    t_slider.slick(_defineProperty(_defineProperty(_defineProperty({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      dots: true,
      infinite: true
    }, "autoplay", true), "speed", 1000), "lazyLoad", "progressive"));
  }

  /*--------------------------------------------------------------
  WION MAP JS INIT
  ------------------------------------------------------------*/
  var google_map = $("#map");
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.67, -73.94),
        styles: [{
          featureType: "landscape.man_made",
          elementType: "geometry",
          stylers: [{
            color: "#f7f1df"
          }]
        }, {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [{
            color: "#d0e3b4"
          }]
        }, {
          featureType: "landscape.natural.terrain",
          elementType: "geometry",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "poi",
          elementType: "labels",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "poi.business",
          elementType: "all",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "poi.medical",
          elementType: "geometry",
          stylers: [{
            color: "#fbd3da"
          }]
        }, {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{
            color: "#bde6ab"
          }]
        }, {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "road",
          elementType: "labels",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{
            color: "#ffe15f"
          }]
        }, {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{
            color: "#efd151"
          }]
        }, {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [{
            color: "#ffffff"
          }]
        }, {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [{
            color: "black"
          }]
        }, {
          featureType: "transit.station.airport",
          elementType: "geometry.fill",
          stylers: [{
            color: "#cfb2db"
          }]
        }, {
          featureType: "water",
          elementType: "geometry",
          stylers: [{
            color: "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById("map");
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.67, -73.94),
        map: map,
        title: "WION"
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + "<h3>WION" + "</div>";
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce

      google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, "load", init);
  }

  /*===========================================
    = WION IMAGE SCROLL ROTATE JS INIT      =
  =============================================*/

  var swiper = new Swiper(".wionabout-thumb-slider", {
    effect: "coverflow",
    loop: true,
    speed: 2500,
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 3,
    keyboardControl: true,
    mousewheelControl: false,
    lazyLoading: true,
    preventClicks: false,
    preventClicksPropagation: false,
    lazyLoadingInPrevNext: true,
    infinite: true,
    autoplay: {
      delay: 0
    },
    coverflow: {
      rotate: 0,
      stretch: 3,
      depth: 395,
      modifier: 1
    },
    breakpoints: {
      767: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 2.24
      }
    }
  });

  /*===========================================
    =    WION GSAP IMAGE ANIMATION JS INIT      =
  =============================================*/

  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".wionabout-animation-wraper",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: true,
      anticipatePin: 1
    }
  });
  tl.to("#image-tl", {
    x: "-90vw",
    y: "-90vh",
    rotation: -15
  }, 0);
  tl.to("#image-tr", {
    x: "80vw",
    y: "-80vh",
    rotation: 15
  }, 0);
  tl.to("#image-bl", {
    x: "-75vw",
    y: "80vh",
    rotation: -15
  }, 0);
  tl.to("#image-br", {
    x: "75vw",
    y: "80vh",
    rotation: 15
  }, 0);
  tl.from(".text-content", {
    opacity: 0,
    scale: 0.8,
    duration: 0.5
  }, 0);

  /*===========================================
    =    WION IMAGE SCROLL ROTATE JS INIT      =
  =============================================*/

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box", {
    rotation: -15,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "top center",
      end: "bottom center",
      scrub: true // smooth scroll-link
    }
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box3", {
    rotation: 15,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "top center",
      end: "left top",
      scrub: true // smooth scroll-link
    }
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box4", {
    rotation: -30,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "top center",
      end: "left top",
      scrub: true // smooth scroll-link
    }
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box5", {
    rotation: 30,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "top center",
      end: "left top",
      scrub: true // smooth scroll-link
    }
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box6", {
    rotation: -15,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "top center",
      end: "left top",
      scrub: true // smooth scroll-link
    }
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".box7", {
    rotation: 15,
    scrollTrigger: {
      trigger: ".animation-container",
      start: "top center",
      end: "left top",
      scrub: true // smooth scroll-link
    }
  });

  /*===========================================
    =    Preloader      =
  =============================================*/
  function preloader() {
    $(".preloader").delay(0).fadeOut();
  }

  // 32. portfolio panel //
})(jQuery);

// add thumb anim

gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
  scrollTrigger: {
    trigger: ".wionhero-section3",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: ".wionhome-3-thumb-wrap"
  }
}).fromTo(".left-rotate img", {
  y: -350
}, {
  y: -2500
}).fromTo(".right-rotate img", {
  y: -600
}, {
  y: -3000
}, 0 // start at same time as left image
);