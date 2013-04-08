slide_images =    ['url("assets/images/slide1.jpg")',
		   'url("assets/images/slide2.jpg")',
		   'url("assets/images/slide4.jpg")',
		   'url("assets/images/slide3.jpg")'];

slide_titles =    ['Redefining responsive',
		   'The perfect powder',
		   'Find your perfect board',
		   'No snow... no show'];

slide_subtitles = ['Light, snappy, and under control',
		   'Breckenridge, Whistler, Vail, Lake Tahoe',
		   'Camber, springloaded, rocker... we have it all!',
		   'Share your favorite moments with us!'];
slide_interval = 5000;
current_slide = -1;

$(document).ready(function() {
	$('#thumb_preview').hide();
	$('.thumb_box').prepend("<div class='thumb_overlay'><img src='assets/images/mts_logo.png' alt='mountains'/></div>");
	slide_out();
	slide_delay = setInterval(slide_out, slide_interval);
	$('.thumb_overlay').hover(image_over, image_out);
	$('.slide_nav_radio').click(radio_click);
	$('.thumb_overlay').click(preview_on);
	$('#thumb_preview').click(preview_off);
	$('a').click(dead_link);
});

function radio_click() {
	clearInterval(slide_delay);
	current_slide = parseInt($(this).attr('id')) - 2;
	slide_out();
	slide_delay = setInterval(slide_out, slide_interval);
};

function slide_in() {
	$(this).css('background-image', slide_images[current_slide]);
	$('#slide_title').text(slide_titles[current_slide]);
	$('#slide_subtitle').text(slide_subtitles[current_slide]);
	$(this).animate({opacity: 1}, 800);
};

function slide_out() {
	if (current_slide == 3) { current_slide = -1; }
	current_slide++;
	$('#slide_image').animate({opacity: 0}, 800, slide_in);
	$('.slide_nav_radio').css({backgroundColor: '#C8C8C8'});
	$('.slide_nav_radio#' + (current_slide + 1)).css({backgroundColor: '#0099FF'});
};

function image_over() { $(this).stop().animate({opacity: 1}, 200); };

function image_out() { $(this).stop().animate({opacity: 0}, 200); };

function preview_on() {
	img_url = "url('" + $(this).parent().children().next().attr('src') + "')";
	$('#thumb_preview').css({width: $(document).width(), height: $(document).height()});
	$('#thumb_preview_img').css({width: $(window).width(), height: $(window).height(), backgroundImage: img_url});
	$('#thumb_preview').stop().fadeIn(200);
};

function preview_off() {
	$('#thumb_preview').stop().fadeOut(200);
	$('body').css('overflow', 'auto');
};

function dead_link() {
	if (!$(this).attr('href')) {
		alert('If this wasn\'t just a demo site, this would link to the ' + $(this).text() + ' page');
	}
};



