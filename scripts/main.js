//
// main.js
//

//
//  JQUERY
// jquery  toggle menu button

// src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"

$(document).ready(function() {
  $(".button").click(function() {
    $(" div.topnav").slideToggle("slow", function() {
      // Animation complete.
    });
  });
});

// < !--script for dropdown menu-- >

// Click on icon to toggle between adding and removing the "responsive" class to topnav
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// dropdown - submenu
// toggle between hiding and showing the dropdown content

// Click to show dropdown submenu1
// über mich / kontakt
function Function1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

//Click to show dropdown submenu2
function Function2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Back to top button
//Get the button
var myTopButton = document.getElementById("myTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myTopButton.style.display = "block";
  } else {
    myTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
