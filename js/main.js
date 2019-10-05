$(function() {

  // Toggle open
  $(".sideNav li").on("click", function(e) {
    $(this).find(".drop").slideToggle();
    $(this).siblings().find(".drop").slideUp();
    $(this).find("i").toggleClass("open");
    $(this).siblings().find("i").removeClass("open");
    e.stopPropagation();
  });


// open Side Nav
$(".menuTriger").on("click", function() {
    $(this).fadeOut();
    $(".sideNav").toggleClass("open");
    $(".navover").toggleClass("open");
    $("body").css("overflow", "hidden");
    setTimeout(function() {
    $(".sideNav").addClass("origin");
    },500)
  });


// Close Side Nav
  $(".navover, .close1").on("click", function() {
    if($(".sideNav").hasClass("open")){
        $(".menuTriger").fadeIn();
        $(".navover").removeClass("open");
        $(".sideNav").toggleClass("open");
        // $(".sideNav").toggleClass("origin");
        $("body").css("overflow", "auto");
        setTimeout(function() {
        $(".sideNav").removeClass("origin");
        },600)
    }
  });

  // Search
  // Open
  $(".search > i").on("click", function() {
    $(".search_in").addClass("open");
  });

  // Close
  $(".search_in").on("click", function() {
    $(this).removeClass("open");
  })

  $(".srch").on("click", function(e) {
    e.stopPropagation();
  })

  // Main Slider
  $('.main-slider .owl-carousel').owlCarousel({
    autoplay: true,
    rtl:true,
    loop:true,
    nav:true,
    items: 1,
    dots: true,
    navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"]
  });

  // Products
  // clients Slider
  $('.disc .owl-carousel').owlCarousel({
    // autoplay: true,
    rtl:true,
    dots: true,
    nav: true,
    loop:true,
    margin:16,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      992:{
          items:4,
          stagePadding: 10
      },
      1200:{
          items:5,
          stagePadding: 0
      }
    },
    navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"]
  });

  //footer accordion
  if($(window).width() < 992){
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $('.foot-links button').on('click', function() {
      $(this).toggleClass("trans");
      $(this).parent().parent().siblings().find('.collapse').collapse('hide');
      $(this).parent().parent().siblings().find('button').removeClass("trans");
  });

  // Preloder
  $(window).on("load", function() {
    $("html").css("overflow-y", "auto");
    $(".preloader").fadeOut(400, function() {
      $(this).remove()
    });
  });

  // Animation On Scroll
  AOS.init();

})