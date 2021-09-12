//Navbar Scrolling
window.addEventListener("scroll", function() {
  let header = document.querySelector(".navbar-container");
  var windowPosition = window.scrollY > 0
  //changing navbar styling based on position of viewport
  header.classList.toggle("scrolling-active", windowPosition); //you can store conditionals within the method
  //navbar blog button
  let navBlogBtn = document.getElementById("Blog");
  navBlogBtn.classList.toggle("blog-display-scroll", windowPosition);
  //hamburger icon
  let navLinks = document.querySelector("nav-item-container");
  navLinks.classList.toggle("nav-links-scroll", windowPosition);
  console.log("Scrolling");
});
//Choosing what to hapen to primary nav links div when scrolling
window.addEventListener("scroll", function() {
  let primaryNavLinks = document.querySelector(".links-1");
  if (window.scrollY > 0) { //if the y-axis is greater than zero
    $(primaryNavLinks).css("display", "none");
  } else if (window.scrollY == 0) {
    $(primaryNavLinks).css("display", "inherit");
  }
});
//Choosing what to hapen to secondary nav links div when scrolling
window.addEventListener("scroll", function() {
  let secondaryNavLinks = document.querySelector(".links-2");
  let secondaryNavLinksStyle = document.querySelectorAll(".nav-links-2-a");
  if (window.scrollY !== 0) { //if the y-axis is not equal to zero
    $(secondaryNavLinks).css("display", "inherit");
    $(secondaryNavLinksStyle).css("color", "#DFCAD5");
  } else if (window.scrollY == 0) {
    $(secondaryNavLinks).css("display", "none");
  }
});
//Slide-In Animation for Services Section
let cards = $(".all-cards-container");
// if(window.scrollY > 0) {
// }

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
  window.location.href = "index.html";
})
//Header and Hero Button Hover Effects
$(".top-btns").on("mouseover", function() {
  $(this).animate({});
})
$("button").on("mouseout", function() {
  $(this).animate({});
})
//Cycle Hostel Project Link
$(".Cycle-Hostel-Link").on("click", function() {
  window.open("https://nuka-coder.github.io/Cycle-Hostel/", "_blank");
})
//CTA button url redirect
$(".cta-btn").on("click", function() {
  window.location.href = "contact.html";
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
  window.open("https://github.com/nuka-coder", "_blank");
})
//Twitter Buttons (all)
$(".github").on("click", function() {
  window.open("https://twitter.com/nukaCoder", "_blank");
})
//Instagram Footer Button
$(".instagram").on("click", function() {
  window.open("https://instagram.com/houdinibeanie", "_blank");
})
//Blog Button URL Redirect
$("#Blog").on("click", function() {
  window.open("https://brittany.hashnode.dev/", "_blank");
})
//Portfolio Button URL Redirect
$("#Portfolio").on("click", function() {
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
