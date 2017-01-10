window.onload = function(){
	var load = document.getElementById("loader");
	load.style.display = "none";
	



	// load the home- star-war-type effect
	$('#titles').fadeIn(500).css({
		"display": "block"
	});

	var backgroundAmbience = document.getElementById('background-ambience');
	backgroundAmbience.play();
	backgroundAmbience.addEventListener('ended', function() {
        this.play();
    }, false);


    var hoverMenuSound = document.getElementById('hover-menu-sound');

    $('.lowermenusound').mouseenter(function() {
    	hoverMenuSound.play();
    });
} 