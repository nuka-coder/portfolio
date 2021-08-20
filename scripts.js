//Requires for Modules



//Effects for Form Inputs
$("input").on("click", function() {
  $(this).css("background-color", "#DFCAD5");
})
$(document).on("mouseover", function() {
  $("input").css("background-color", "white");
})

//Site Logo (main) page reload
$(".site-logo-main").on("click", function() {
  location.reload();
})
//Site Logo (contact page) url redirect event
$(".site-logo-contact").on("click", function() {
  window.location.href="index.html";
})
//About Section Profile Image Effect
$(".profile").on("mouseover", function() {
  $(".profile").animate({opacity: 1});
})
$(".profile").on("mouseout", function() {
  $(".profile").animate({opacity: .7});
})

//Button Hover Effects
$("button").on("mouseover", function() {
  $(this).animate({opacity: .7});
})
$("button").on("mouseout", function() {
  $(this).animate({opacity: 1});
})
//CTA button url redirect
$(".cta-btn").on("click", function() {
  window.location.href="contact.html";
})
//Footer Icons Effects
$(".footer-icons i").on("mouseover", function() {
  $(this).fadeOut(200).css("color", "#CE1379").fadeIn(200);
})
$(".footer-icons i").on("mouseout", function() {
  $(this).css("color", "white");
})
//Github Buttons (all)
$(".github").on("click", function() {
  window.open("https://github.com/houdinibeanie", "_blank");
})
//Instagram Footer Button
$(".instagram").on("click", function(){
  window.open("https://instagram.com/houdinibeanie", "_blank");
})
//Blog Button URL Redirect
$("#Blog").on("click", function() {
  window.open("https://brittany.hashnode.dev/", "_blank");
})
//Portfolio Button URL Redirect
$("#Portfolio").on("click", function(){
  window.open("https://github.com/houdinibeanie", "_blank");
})
// Form Submission Greeting
$("form").on("submit", function() {
  event.preventDefault();
})
$("form").on("submit", function() {
  $(".contact-form-section").slideUp(500);
  $("#Contact div").css("display", "none");
    $(".contact-form-section").css("display", "block");
  $(".contact-form-section").slideDown(600, function() {
    $(".form-submit-greeting").html("Awesomesauce! Look out for my email.").css("display", "block");
  });
})
// Carousel Scripts
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
