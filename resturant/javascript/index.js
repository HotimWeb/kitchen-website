// read more
$(".mid-container-1 .close-up").hide();
$(".mid-container-1 button").on("click", function(){
    $(".mid-container-1 .close-up").slideDown();
    $(".mid-container-1 .close-up").toggle();
})
// navbar
$("#home").on("click", function(){
    $("#home").addClass("pressed");
})
// on ready code
$("document").ready(function(){
    $(".content h1").slideUp(10).slideDown(1000);
    $("#home").addClass("pressed");
})
  
$(document).ready(function(){
    $(".mid-1").on("mouseenter", function(){
        $(".mid-container").fadeOut().fadeIn();
    })
    $(".sid-container").on("mouseenter", function(){
        $(".sid-container").fadeOut().fadeIn();
    })
    $(".third-container").on("mouseenter", function(){
        $(".third-img").fadeOut().fadeIn();
    })
})
const toggleButton = document.querySelector('.toggle-button');
const targetElement = document.querySelector('#nav');

toggleButton.addEventListener('click', function () {
  // Toggle the 'display' property when the button is clicked
  if (targetElement.style.display === 'none') {
    targetElement.style.display = 'block'; // Change to the desired property
  } else {
    targetElement.style.display = 'none'; // Change to the desired property
  }
});

