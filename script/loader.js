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



    $('div.lowermenusound').click(function(){
	    var notClicked =  $('.lowermenusound').not(this);
	    $(this).css({
	    	"text-shadow": "none"
	    	// "0 0 2.8em #87F, 0 0 2.8em #87F, 0 0 2.8em #87F !important"
	    });
	    notClicked.each(function(index) {
	    	$(this).css({
	    		"text-shadow": "0 0 0.4em #87F, 0 0 0.4em #87F, 0 0 0.4em #87F"
	    	});
	    });
	});

	$('#home').css({
		"text-shadow": "none"
		//"0 0 2.8em #87F, 0 0 2.8em #87F, 0 0 2.8em #87F !important"
	});
} 