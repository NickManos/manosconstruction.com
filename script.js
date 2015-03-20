$(document).ready(function() {
	$("#faqAccordion").accordion({ active: 0, heightStyle: "content" });

	$(function(){
		$("#slidesLeft").slidesjs({
			height:250,
			width:250,
			pagination: {
				active: false
			  },
			navigation: {
				active: false
			  },
			play: {
				auto: true
				}
			});
		});

	$(function(){
		$("#slidesRight").slidesjs({
			height:250,
			width:250,
			pagination: {
				active: false
				},
			navigation: {
				active: false
				},
			play: {
				auto: true
				}
			});
		});

	$("window").load(function() {
		var elem = document.getElementById("topRight");
		elem.setAttribute("float: right;")
		});

	/** Takes a variable number of arguments (the css id of desired elements) then cycles through them calling 'show' to make the content appear. */
	function display() {
		for (var i = 0, j = arguments.length; i < j; i++){
		var el = $(arguments[i]);
        el.show('slide');
		}
	};

	/** Takes a variable number of arguments (the css id of desired elements) then cycles through them calling 'hide' to make the content disappear.  */
	function hide() {
		for (var i = 0, j = arguments.length; i < j; i++){
		var el = $(arguments[i]);
        el.hide('slide')
		}
	};

	/** Determines if the 3 pictures that are removed for the 'New Homes' section are visible or not.*/
	function isHidden(){
		if ($('#remove1').css('display') === 'none') {
			return true;
		} else {return false;}
	};

	/** Switches the thumbnail pictures as the user selects different catagories. */
	function switchThumbnails(numberOfPictures, path){

		for (i=0; i < numberOfPictures; i++ ){
			fullPath = 'media/portfolio/' + path + (i+1) + '.jpg';
			$('#pic' + (i+1)).attr('src', fullPath);
		}
	}

	/** Changes the pictures for the gallery's main display. */
	$('.thumbnail').click(function(event){
		event.preventDefault();
		var src = $(this).attr('src');
		var oldSrc = $('#slideshow').attr('src');

		$('#slideshow').slideUp(function(){
			$('#slideshow').attr('src', src).slideDown();
		});
	});


	$('#bathPics').click(function(){
		display('#remove1', '#remove2', '#remove3', '#remove4', '#remove5', '#remove6');
		switchThumbnails(10, 'baths/Bath');
	});

	$('#exteriorPics').click(function(){
		hide('#remove4', '#remove5', '#remove6');
		if (isHidden()) {display('#remove1', '#remove2', '#remove3')};
		switchThumbnails(7, 'exteriors-additions/Exteriors-Additions');
	});

	$('#interiorPics').click(function(){
		hide('#remove4', '#remove5', '#remove6');
		if (isHidden()) {display('#remove1', '#remove2', '#remove3')};
		switchThumbnails(7, 'interiors/Interior')
	});

	$('#kitchenPics').click(function(){
		hide('#remove4', '#remove5', '#remove6');
		if (isHidden()) {display('#remove1', '#remove2', '#remove3')};
		switchThumbnails(7, 'kitchens/Kitchen')
	});

	$('#newHomePics').click(function(){
		hide('#remove1', '#remove2', '#remove3', '#remove4', '#remove5', '#remove6');
		switchThumbnails(4, 'new-homes/NewHomes')
	});

	$('#SpecialUsePics').click(function(){
		hide('#remove4', '#remove5', '#remove6');
		if (isHidden()) {display('#remove1', '#remove2', '#remove3')};
		switchThumbnails(7, 'special-use-rooms/SpecialUse')
	});

	// $('#bathPics').hover($('#bathPics').toggleClass('animated pulse infinite'))

	$('#bathPics').mouseenter( function(){
		$('#bathPics').toggleClass('animated pulse infinite hoverPhotoHeader')
	}).mouseleave( function(){
		$('#bathPics').toggleClass('animated pulse infinite hoverPhotoHeader')
	})

	$('#exteriorPics').mouseenter( function(){
		$('#exteriorPics').toggleClass('animated pulse infinite hoverPhotoHeader')
	}).mouseleave( function(){
		$('#exteriorPics').toggleClass('animated pulse infinite hoverPhotoHeader')
	})

	$('#interiorPics').mouseenter( function(){
		$('#interiorPics').toggleClass('animated pulse infinite hoverPhotoHeader')
	}).mouseleave( function(){
		$('#interiorPics').toggleClass('animated pulse infinite hoverPhotoHeader')
	})

	$('#kitchenPics').mouseenter( function(){
		$('#kitchenPics').toggleClass('animated pulse infinite hoverPhotoHeader')
	}).mouseleave( function(){
		$('#kitchenPics').toggleClass('animated pulse infinite hoverPhotoHeader')
	})

	$('#newHomePics').mouseenter( function(){
		$('#newHomePics').toggleClass('animated pulse infinite hoverPhotoHeader')
	}).mouseleave( function(){
		$('#newHomePics').toggleClass('animated pulse infinite hoverPhotoHeader')
	})

	$('#SpecialUsePics').mouseenter( function(){
		$('#SpecialUsePics').toggleClass('animated pulse infinite hoverPhotoHeader')
	}).mouseleave( function(){
		$('#SpecialUsePics').toggleClass('animated pulse infinite hoverPhotoHeader')
	})

	$('#pic7').click(function(){
		elem = $('#pic7').attr('src')
		if (elem = 'media/portfolio/baths/Bath7.jpg'){
			slideshow = document.getElementById('#slideshow');
			slideshow.style.width = '500px';
			slideshow.style.marginLeft = '100px';
		}
	})

	$('#pic10').click(function(){
		elem = $('#pic10').attr('src')
		if (elem = 'media/portfolio/baths/Bath7.jpg'){
			slideshow = document.getElementById('#slideshow');
			slideshow.style.width = '500px';
			slideshow.style.marginLeft = '100px';
		}
	})

	function resetSlideShowStyle(){
			slideshow = document.getElementById('#slideshow');
			slideshow.style.width = '750px';
			slideshow.style.marginLeft = '';
	}

});


