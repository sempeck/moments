//// sound play button //////////////////////////////////
var animationDiv = document.querySelector('.stroke');
var clickDiv = document.querySelector('.icon');
var play = document.querySelector('.play');
var pause = document.querySelector('.pause');
var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', '../img/australia/motor.mp3');

clickDiv.addEventListener('click', function() {
  if (animationDiv.style.webkitAnimationPlayState == "paused" || animationDiv.style.webkitAnimationPlayState == "") {
    play.classList.add('hidden');
    pause.classList.remove('hidden');
    animationDiv.style.webkitAnimationPlayState = "running";
    audioElement.play();
    animationDiv.classList.add('stroke');
  } else if (animationDiv.style.webkitAnimationPlayState == "running") {
    pause.classList.add('hidden');
    play.classList.remove('hidden');
    animationDiv.style.webkitAnimationPlayState = "paused";
    audioElement.pause();
  }
})
$('.stroke').bind('oanimationend animationend webkitAnimationEnd', function() { 
   pause.classList.add('hidden');
    play.classList.remove('hidden');
    animationDiv.style.webkitAnimationPlayState = "paused";
    animationDiv.classList.remove('stroke');
});

//// video play in view //////////////////////////////////
var video = $('#video-kangaroo');
var videoElement = video.get(0);
var stop = false;
$(window).scroll(function() {
   var hT = video.offset().top,
       hH = video.outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop(); 
   if ((wS > (hT+hH-wH)) && (wS < (hT+hH))){
      if (!stop) {
      video[0].play();
      stop = true;
       }
   }
   else {
    video[0].pause();
   }
});

//// scroll animations ///////////////////////////////////
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position-element_height)) {  // -element_height dodane, by element pojawiał się, dopiero gdy cały może być widoczny
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

//// title fade out ///////////////////////////////////
$(window).scroll(function() { 
if ($(this).scrollTop()> 50) { 
$('.scrolltop').fadeOut("slow"); 
} else { 
$('.scrolltop').fadeIn("slow");
} 
});
