document.addEventListener('DOMContentLoaded', function() {
    // Get the element you want to add a class to
    var element = document.querySelector('.orders');
  
    // Check if the element exists
    if (element) {
      // Add a class to the element
      element.classList.add('pressed');
    }
  });


// tryout for animation
// 1 create a const observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.intersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});


const hiddenElements = document.querySelectorAll("hidden");
hiddenElements.forEach((el) => observer.observe(el));
// for jquery
$("document").ready(function(){
    $("#top-container h1").slideUp(10).slideDown(1000);
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