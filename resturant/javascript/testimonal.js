$(document).ready(function(){
    $(".third-container").on("mouseenter", function(){
        $(".hambuger").fadeOut(100).fadeIn(1000);
    })
    $(".second-container").on("mouseenter", function(){
        $(".second-container-mid1 img").slideUp(100).slideDown(1000);
    })
})
$("document").ready(function(){
    $("#alone h1").slideUp(10).slideDown(1000);
    $("#test").addClass("pressed");
})
const toggleButton = document.querySelector('.toggle-button');
const targetElement = document.querySelector('#nav');

toggleButton.addEventListener('click', function () {
  // Toggle the 'display' property when the button is clicked
  if (targetElement.style.display === 'none') {
    console.log("benji is a stupid boy");
    targetElement.style.display = 'block'; // Change to the desired property
  } else {
    targetElement.style.display = 'none'; // Change to the desired property
  }
});


