(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".mobail-menu");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      $(".menu").toggleClass("responsive");
    });
  }
 
})();



//slider

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
});


//input date

$( function() {
    $( "#data" ).datepicker();
    $( "#data2" ).datepicker();
  } );



$(window).on('scroll', function () {
    if($(window).scrollTop() >= 400){
        $("header").addClass("header-bg");
    }  else{
        $("header").removeClass("header-bg");
    }
});