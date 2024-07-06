$(document).ready(function () {

  //===== Sticky

  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".header-area").removeClass("sticky");
    } else {
      $(".header-area").addClass("sticky");
    }
  });
  //===== Sticky
  /*Mobile Menu Start*/
  $("#open-btn").click(function () {
    $(".mobile-main-menu").animate({
        left: "0",
      },
      500
    );
    $(this).hide();
    $("#close-btn").css("display", "block");
  });

  $("#close-btn").click(function () {
    $(".mobile-main-menu").animate({
        left: "-80%",
      },
      500
    );
    $(this).hide();
    $("#open-btn").css("display", "block");
  });

  $(".nav-link").click(function () {
    $(".mobile-main-menu").animate({
        left: "-80%",
      },
      500
    );
    $("#open-btn").css("display", "block");
    $("#close-btn").css("display", "none");
  });
  /*Mobile Menu End*/

  /*Banner Slider Start*/
  $(".banner_slide").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    dots: false,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      767: {
        items: 1,
        nav: false
      },
      768: {
        items: 1
      },
    },
  });
  /*Banner Slider End*/

  /*Project Slider Start*/
  $(".project_slide").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    dots: false,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      575: {
        items: 2
      },
      992: {
        items: 3,
      },
    },
  });
  /*Project Slider End*/

  /*Project Popup Start*/
  $(".project_popup").magnificPopup({
    type: "image",
  });
  /*Project Popup End*/

  /*Counter Part Start*/
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  /*Counter Part End*/

  /*Blog Slider Start*/

  $(".blog_slider").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    dots: false,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      575: {
        items: 1
      },
      992: {
        items: 2,
      },
    },
  });
  /*Blog Slider End*/

  /*Accordian Js Start*/
  $(".toggle_1").click(function () {
    $(".accordian_content").slideToggle("2000");
    $(".down").toggleClass("rot");
    $(".ac_icon").toggleClass("ac_icon_bc");
    $(".ac_text").toggleClass("ac_text_bc");
    $(".txt").toggleClass("ac_text_bc");
  });

  $(".accordian_tab_2").click(function () {
    $(".accordian_content_2").slideToggle("2000");
    $(".down_2").toggleClass("rot");
    $(".ac_icon_2").toggleClass("ac_icon_bc");
    $(".ac_text_2").toggleClass("ac_text_bc");
    $(".txt_2").toggleClass("ac_text_bc");
  });

  $(".accordian_tab_3").click(function () {
    $(".accordian_content_3").slideToggle("2000");
    $(".down_3").toggleClass("rot");
    $(".ac_icon_3").toggleClass("ac_icon_bc");
    $(".ac_text_3").toggleClass("ac_text_bc");
    $(".txt_3").toggleClass("ac_text_bc");
  });

  $(".accordian_tab_4").click(function () {
    $(".accordian_content_4").slideToggle("2000");
    $(".down_4").toggleClass("rot");
    $(".ac_icon_4").toggleClass("ac_icon_bc");
    $(".ac_text_4").toggleClass("ac_text_bc");
    $(".txt_4").toggleClass("ac_text_bc");
  });
  /*Accordian Js End*/



  /*Client Slider Start*/

  $(".client_slider").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    dots: true,
    nav: false,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 1
      },
      992: {
        items: 1
      },
    },
  });
  /*Client Slider End*/
  //Top Button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('#topbtn').fadeIn();
    } else {
      $('#topbtn').fadeOut();
    }
  });

  $('#topbtn').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });
  //MixitUp
  var mixer = mixitup('.our_project');

});