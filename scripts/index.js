
// SCROLL TO TOP

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}


// PRE LOADER

window.addEventListener('load', function () {
  // Get the preloader element
  const preloader = document.getElementById('preloader');
  // Hide the preloader
  preloader.style.display = 'none';
});


//Remove ids from URL
// Get the current URL
var url = window.location.href;

// Check if the URL has any IDs attached
if (url.indexOf('#') !== -1) {
  // Remove the IDs from the URL
  var newUrl = url.split('#')[0];
  // Replace the current history entry with the new URL
  history.replaceState(null, null, newUrl);
}
