// alert("hello");
document.addEventListener('DOMContentLoaded', function() {
    // Get the element you want to add a class to
    var element = document.querySelector('.gallery');
  
    // Check if the element exists
    if (element) {
      // Add a class to the element
      element.classList.add('pressed');
    }
  });
  // using jquery

$("document").ready(function(){
  $(".top-container h1").slideUp(10).slideDown(1000);
  // for the containers-img
  $("#first-content").fadeOut().fadeIn(1000);
  $("#second-content").fadeOut().fadeIn();
  $("#third-content").fadeOut().fadeIn(1000);
  $("#fourth-content").fadeOut().fadeIn();
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


