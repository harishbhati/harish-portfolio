(function ($) {
	"use strict";

	/* Init Elementor Front Scripts */
	$(window).on('elementor/frontend/init', function () {

		// Widgets
		elementorFrontend.hooks.addAction( 'frontend/element_ready/myour-started-section.default', function() {
			/*
				Typed Subtitle
			*/
			if(($('.typed-subtitle').length) && ($('.h-subtitle p').length > 1)){
				$('.typed-subtitle').each(function(){
					$(this).typed({
						stringsElement: $(this).prev('.typing-subtitle'),
						loop: true
					});
				});
			}
		} );

		// Global
		elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
			/*
				Content Carousel
			*/
			if($('.content-carousel').length){
				var $carousel = $('.owl-carousel');
				$carousel.each(function(){
					var $this = $(this);
					var slidesview = $this.data('slidesview');
					var slidesview_mobile = $this.data('slidesview_mobile');
					$this.owlCarousel({
						margin: 40,
						items: slidesview,
						autoplay: false,
						autoplayTimeout: 5000,
						autoplayHoverPause: true,
						loop: false,
						rewind: true,
						nav: false,
						dots: false,
						responsive: {
							0 : {
								margin: 40,
								items: slidesview_mobile
							},
							720 : {
								margin: 40,
								items: slidesview
							},
							1200 : {
								margin: 40,
								items: slidesview
							}
						}
					});
				});
			}
			
			/*
				Dotted Skills Line
			*/
			function skills(){
				var skills_dotted = $('.skills.dotted .progress');
				var skills_dotted_w = skills_dotted.width();
				if(skills_dotted.length){
					skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
					skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
					skills_dotted.find('.percentage .da').css({'width':skills_dotted_w});
				}
			}
			setTimeout(skills, 1000);

			/*
				Circle Skills Line
			*/
			var skills_circles = $('.skills.circles .progress');
			if(skills_circles.length){
				skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
			}
			
		} );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
			
		} );
	});
})(jQuery);