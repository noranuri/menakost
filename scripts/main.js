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

// pop up no cookies
