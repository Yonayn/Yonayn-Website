// ============================  Variables
$d = $(document);
$navbar = $("#navbar");



// ============================ Navbar Stuff
$d.on("scroll", function (e) {
  if ($d.scrollTop() > 1) {
    $navbar.addClass("scrolled");
  } else {
    $navbar.removeClass("scrolled");
  }
})



// ============================ Smooth Scroll Function
function sScroll(x) {
  document.querySelector(x).scrollIntoView({
    behavior: 'smooth'
  });
}
