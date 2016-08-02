$(document).ready(function(){

	//events:

	//open and close menu
	$( "#mobileMenuButton").click(buttonOpenOrCloseVindow);

	// scroll to same element 
	$('.scroll-button').click(function(){
		scrolToSameBlock(this);
	});
	
});

function scrolToSameBlock(clickedElement)
{
	var curentElement =  $(clickedElement).attr('data-scrollBlock');
	curentElement = '.' + curentElement;
	$('html, body').animate({
		scrollTop: $(curentElement).offset().top
	}, 1000);
}

function buttonOpenOrCloseVindow()
{
	var closeMobileMenu = $('#mobileMenuButton').hasClass('mobile-menu-status-close');
	if(closeMobileMenu)
	{
		//show mobile menu
		$('.open-mobile-menu-button').removeClass('open-mobile-menu-button').addClass('close-mobile-menu-button');
		$('#mobileMenuButton').removeClass('mobile-menu-status-close');
		$('.mobile-main-menu').show();
	}else{
		//hide mobile menu
		$('.close-mobile-menu-button').removeClass('close-mobile-menu-button').addClass('open-mobile-menu-button');
		$('#mobileMenuButton').addClass('mobile-menu-status-close');
		$('.mobile-main-menu').hide();
	}
}


