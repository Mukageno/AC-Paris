$('.main__slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
});
if (screen.width >= 768) {
	$('#header__inp').focus(function (event) {
		$('.header__search-block').addClass('header__search_active');
	});
	$('#header__inp').blur(function (event) {
		$('.header__search-block').removeClass('header__search_active');
	});
}
if (screen.width < 768) {
	$('#header__inp').focus(function (event) {
		$('.header__search-block').addClass('header__search_active');
		$('.header__logo-pic').hide();
		//$('.header__logo-wrap').css.justifyContent = 'flex-end';
	});
	$('#header__inp').blur(function (event) {
		$('.header__search-block').removeClass('header__search_active');
		$('.header__logo-pic').show();
	});
}



$('.menu-pulldown').click(function (event) {
	$('.link-invisible').fadeToggle('slow/400/fast');
});
$('.header__menu-links li a').click(function (event) {
	$('.header__menu-links li a').removeClass('header__menu_active');
	//$('.header__menu-links li a').addClass('header__menu_active');
});