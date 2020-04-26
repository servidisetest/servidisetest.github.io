// Display pop up form
function openForm() {
  document.getElementById("sign-up-form").style.display="block";
}

// Close pop up form
function closeForm() {
  document.getElementById("sign-up-form").style.display="none";
  document.getElementById("betaform").reset();
}

// Sitcky navigation bar (using jQuery)
// Add shadow to give illusion of floating nav
$(document).ready(function() {
  $(window).scroll(function () {
      // console.log($(window).scrollTop())
    if ($(window).scrollTop() > 1) {
      $('#navigation').addClass('nav-stick');
    }
    if ($(window).scrollTop() < 1) {
      $('#navigation').removeClass('nav-stick');
    }
  });
});

// Side navigation
// function openSideNav() {
//   document.getElementById("side-nav").style.width="100%";
// }
//
// function closeSideNav() {
//   document.getElementById("side-nav").style.width="0";
// }
