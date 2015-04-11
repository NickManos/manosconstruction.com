/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

if(jQuery.browser.mobile) window.location = './m/index.html';

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


