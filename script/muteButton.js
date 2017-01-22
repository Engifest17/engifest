$('.speaker').click(function(e) {
  e.preventDefault();
  var audioba = document.getElementById("background-ambience");
  var audiobb = document.getElementById("hover-menu-sound");
	if( $(this).hasClass('mute') == true) {
		// // console.log("has mute");
		audioba.volume = 1;
		audiobb.volume = 1;
		$(this).toggleClass('mute');
	} else {
		// // console.log("no mute");
		audioba.volume = 0;
		audiobb.volume = 0;
		$(this).toggleClass('mute');
	}
});