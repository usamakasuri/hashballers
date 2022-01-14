$('.technical-specs').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 3
});


$('.technical-specs').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});


function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

// 

$('.navbar-toggler').click(function(e){
  e.preventDefault();
  $('.main-header-comp').toggleClass('navbar-small'); 
});
