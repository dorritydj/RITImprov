//$('.mainContainer').css('display', 'none');
$(document).ready(function(){
	//changes font color when hovered
	$('ul.nav').children('li').hover(
	function(){
		$('li.current').removeClass('current');
		$(this).addClass('current');
	});
	//sets home back to current
	$('.header').hover(function(){}, function(){
		$('li.current').removeClass('current');
		$('li.main').addClass('current');
	});
});