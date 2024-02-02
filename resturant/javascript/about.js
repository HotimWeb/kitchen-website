// for images
$("document").ready(function(){
    // $("img").slideUp().slideDown();
    $(".about").addClass("pressed");
})
// for nav bar
document.querySelector("#test").addEventListener("click", function(){
    document.querySelector("#test").classList.add(".pressed");
})
// for animation title
$("document").ready(function(){
    $("#title h1 ").slideUp(10).slideDown(1000);
})
// for toggle button
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
