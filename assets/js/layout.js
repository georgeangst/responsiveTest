$(function(){
	$('.header-nav-mobile-menu-toggle').on('click', function(){
		$(this).removeClass('header-nav-mobile-menu-toggle_active');
		$('.header-nav-mobile').addClass('header-nav-mobile_active');
	});

	$('.header-nav-mobile__close-button').on('click', function(){
		$('.header-nav-mobile-menu-toggle').addClass('header-nav-mobile-menu-toggle_active');
		$('.header-nav-mobile').removeClass('header-nav-mobile_active');
	});
});