$("input").on("click", function() {
  $("input").css("background-color", "white");
})

// $(document).on("click", function(event) {
//   if (event.click !== $("input")) {
//   $("input").css("opacity", "1");
// }
// })
// $(".cards-text-div").on("mouseover", function() {
//   $(".service-image").css("color", "white");
// })
// $(".cards-text-div").on("mouseout", function() {
//   $(".service-image").css("color", "#5f64ab");
// })\

// Projects Section Carousel
//wow, super blocky code, will consolidate and trim later
//using event in parameters and repeatable named function
var carouselButtonTwo = $(".dot2");
carouselButtonTwo.on("click", function() {
  $(".portfolio-image-1").css("display", "none");
  $(".portfolio-image-3").css("display", "none");
  $(".portfolio-image-2").css("display", "inline-block");
  $(".text-btn-2").css("display", "inline-block");
  $(".text-btn-1, .text-btn-3").css("display", "none");
})
var carouselButtonOne = $(".dot1");
carouselButtonOne.on("click", function() {
  $(".portfolio-image-2").css("display", "none");
  $(".portfolio-image-3").css("display", "none");
  $(".portfolio-image-1").css("display", "inline-block");
  $(".text-btn-1").css("display", "inline-block");
  $(".text-btn-2, .text-btn-3").css("display", "none");
})
var carouselButtonThree = $(".dot3");
carouselButtonThree.on("click", function() {
  $(".portfolio-image-1").css("display", "none");
  $(".portfolio-image-2").css("display", "none");
  $(".portfolio-image-3").css("display", "inline-block");
  $(".text-btn-3").css("display", "inline-block");
  $(".text-btn-1, .text-btn-2").css("display", "none");
})

$(".portfolio-image-1").on("click", function() {
  $(".portfolio-image-1").css("display", "none");
  $(".portfolio-image-2").css("display", "inline-block");
  $(".text-btn-2").css("display", "inline-block");
  $(".text-btn-1, .text-btn-3").css("display", "none");
})

$(".portfolio-image-2").on("click", function() {
  $(".portfolio-image-2").css("display", "none");
  $(".portfolio-image-3").css("display", "inline-block");
  $(".text-btn-3").css("display", "inline-block");
  $(".text-btn-1, .text-btn-2").css("display", "none");
})

$(".portfolio-image-3").on("click", function() {
  $(".portfolio-image-3").css("display", "none");
  $(".portfolio-image-1").css("display", "inline-block");
  $(".text-btn-1").css("display", "inline-block");
  $(".text-btn-2, .text-btn-3").css("display", "none");
})

// Form Submission Greeting
$(".request-button").on("click", function() {
  $(".contact-form-section").slideUp(500);
  $("#Contact div").html("");
    $(".contact-form-section").css("display", "block");
  $(".contact-form-section").slideDown(800, function() {
    $(".form-submit-greeting").html("Awesomesauce! Look out for my email.").css("display", "block");
  });

})
//Site Logo Click event
$(".site-logo-main").on("click", function() {
  location.reload();
})
//About Section Profile Image Effect
$(".profile").on("mouseover", function() {
  $(".profile").animate({opacity: 1});
})
$(".profile").on("mouseout", function() {
  $(".profile").animate({opacity: .7});
})
//Button Hove Effects
$("button").on("mouseover", function() {
  $(this).animate({opacity: .7});
})
$("button").on("mouseout", function() {
  $(this).animate({opacity: 1});
})
//Footer Icons Effects
$(".footer-icons i").on("mouseover", function() {
  $(this).fadeOut(200).css("color", "#CE1379").fadeIn(200);
})
$(".footer-icons i").on("mouseout", function() {
  $(this).css("color", "white");
})
