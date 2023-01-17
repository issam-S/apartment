$(document).ready(function()
{
  $('.crush div:first').css("display","block");
  $('h3').click(function(){
    $(this).next().slideToggle(500);
    $(".crush div:first").not($(this).next()).slideUp();
  });
});

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true
    },
    loop: true
  });

  
  // MDB Lightbox Init
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

// project filter
$(function() {
  var selectedClass = "";
    $(".filter").click(function(){
      selectedClass = $(this).attr("data-rel");
      $("#gallery").fadeTo(100, 0.1);
      $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
      setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
      }, 300);
    });
});

// Date Picker
$("#mod-exm").on("click", function () {

  ("#modal-date").modal();

});

$('.fj-date').datepicker({
  format: "dd/mm/yyyy"
});
// top scroll
