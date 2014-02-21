$( document ).ready(function(){

	// ###### Scripts for POSTS

	// Releated Posts at the bottom of the page.
	// What this does:
	//		Finds each featured image. 
	//		If there is one, makes that image the background image
	// 		Hides the featured image
	$('.featured-image').each(function(){
		var featured_image_source = $(this).children('img').attr('src');
		if ( featured_image_source !== undefined ) {
			$(this).parent().css('background','url('+featured_image_source+')');
		}
		$(this).hide();
	});
	/*if (typeof barley.vars.domain_token !== undefined) {} else {
		var article_width = $('.article').outerWidth();

		// For every full image make the article body overflow visible
		$('.article .articlebody p img.full').each(function(){
			$(this).parent().css('overflow','visible');
			$(this).width(article_width);
			$(this).css('margin-left','-'+article_width*0.25+'px');
		});

		$('.article .articlebody p img.two').each(function(){
			$(this).parent().css('overflow','visible');
			var image_width = (article_width*0.49);
			$(this).width(image_width);
		});

		$('.article .articlebody p img.two:nth-child(1)').each(function(){
			$(this).css('margin-left','-'+article_width*0.25+'px');
		});

		$('.article .articlebody p img.two:nth-child(2)').each(function(){
			$(this).css('margin-right','-'+article_width*0.26+'px');
		});

		$('.article .articlebody p img.three').each(function(){
			$(this).parent().css('overflow','visible');
			var image_width = (article_width*0.32);
			$(this).width(image_width);
		});

		$('.article .articlebody p img.three:nth-child(1)').each(function(){
			$(this).css('margin-left','-'+article_width*0.25+'px');
		});

		$('.article .articlebody p img.three:nth-child(2)').each(function(){
			$(this).css('margin-left',article_width*0.02+'px');
		});

		$('.article .articlebody p img.three:nth-child(3)').each(function(){
			$(this).css('margin-right','-'+article_width*0.26+'px');
		});
	}*/

});