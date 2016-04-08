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






