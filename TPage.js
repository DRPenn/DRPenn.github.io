$(window).scroll(function(){
  var offset=$('.sticky').height();
  var sticky = $('.sticky');
  var scroll = $(window).scrollTop();

  if (scroll >= $(window).width()*.05) 
  {
	  sticky.addClass('fixed');
	  $( "#banner" ).css( "marginBottom", offset )
  }
  else 
  {
	  sticky.removeClass('fixed');
	  $( "#banner" ).css( "marginBottom", "0px" )
  }
});



var offset = $(':target').offset();
var scrollto = offset.top - 60; // minus fixed header height
$('html, body').animate({scrollTop:scrollto}, 0);