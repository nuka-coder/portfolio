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
