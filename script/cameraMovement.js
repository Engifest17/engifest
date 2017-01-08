$('#home').click(function() {
	var newSpline = new Spline();
	console.log("home");
	newSpline.makeSplinePoints(camera, sun);
	moveCamera(newSpline.curve);
});

$('#events').click(function() {
	var newSpline = new Spline();
	console.log("events");
	newSpline.makeSplinePoints(camera, mercury);
	moveCamera(newSpline.curve);
});


$('#sponsers').click(function() {
	var newSpline = new Spline();
	console.log("sponsers");
	newSpline.makeSplinePoints(camera, venus);
	moveCamera(newSpline.curve);
});

$('#contact').click(function() {
	var newSpline = new Spline();
	console.log("contact");
	newSpline.makeSplinePoints(camera, earth);
	moveCamera(newSpline.curve);
});

$('#registration').click(function() {
	var newSpline = new Spline();
	console.log("registration");
	newSpline.makeSplinePoints(camera, mars);
	moveCamera(newSpline.curve);
});

  var smoothness = 10;
  var unknown = 400;

function moveCamera(spline, otherSpline = false) {			// spline is the curve and otherSpline is wheather this is the main spline camera rotation or not
    // none display events satellites
	$('#events-satellite').fadeOut(800).css({
		"display": "none"
	});
  


  var camPosIndex = 0;

  var newInterval = setInterval(function() {
  	  camPosIndex+=smoothness;
	  if (camPosIndex < unknown) {
	    var camPos = spline.getPoint(camPosIndex / unknown);
	    var camRot = spline.getPoint(camPosIndex / unknown);
	    camera.position.x = camPos.x;
	    camera.position.y = camPos.y;
	    camera.position.z = camPos.z;
	  } else {
	    camPosIndex = unknown - smoothness;
	    clearInterval(newInterval);
	    // console.log(camera.position.x, sun.planet.position.x);
	    
	    if(otherSpline == false) {
	    	function nearness(camera) {
		    	var least = [];
		    	least.push(9999999, undefined);
		    	if(least[0] > Math.abs(camera.position.x - sun.planet.position.x)) {
		    		least[0] = Math.abs(camera.position.x - sun.planet.position.x);
		    		least[1] = sun;
		    	} 
		    	if(least[0] > Math.abs(camera.position.x - mercury.planet.position.x)) {
		    		least[0] = Math.abs(camera.position.x - mercury.planet.position.x);
		    		least[1] = mercury;
		    	}
		    	if(least[0] > Math.abs(camera.position.x - venus.planet.position.x)) {
		    		least[0] = Math.abs(camera.position.x - venus.planet.position.x);
		    		least[1] = venus;
		    	}
		    	if(least[0] > Math.abs(camera.position.x - earth.planet.position.x)) {
		    		least[0] = Math.abs(camera.position.x - earth.planet.position.x);
		    		least[1] = earth;
		    	} 
		    	if(least[0] > Math.abs(camera.position.x - mars.planet.position.x)) {
		    		least[0] = Math.abs(camera.position.x - mars.planet.position.x);
		    		least[1] = mars;
		    	}

		    	return least[1];
		    }

		    var objectMostNear = nearness(camera);
		    if(objectMostNear === sun) {
		    	console.log('i am at home');

		    } else if(objectMostNear === mercury) {
		    	console.log('i am at events');
		    	performEvents();
		    } else if(objectMostNear === venus) {
		    	console.log('i am at sponsers');
		    	performSponsers();

		    } else if(objectMostNear === earth) {
		    	console.log('i am at contact');
		    	performContact();

		    } else if(objectMostNear === mars) {
		    	console.log('i am at registration');
		    	performRegister();

		    }
		}	// otherSpline if condition ended
	  }
	  camera.updateProjectionMatrix();
  }, 20);

}


function performEvents() {
	var newPoints = [];
	newPoints.push(
		new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z),
		new THREE.Vector3(camera.position.x + 10, camera.position.y + 10, camera.position.z)
	);
	var newSpline = new Spline();
	newSpline.makeSplineFromPoints(newPoints);
	moveCamera(newSpline.curve, true);
	// console.log(newPoints[1]);
	setTimeout(function() {
		$('#events-satellite').fadeIn(800).css({
			"display": "block"
		});

	}, 1000);
	// $("p[id^='satellite-p']").each(function(i, el) {
	// 	$(this).mouseenter(function(){
	// 		$(this).addClass('float');
	// 		// console.log(this);
	// 	});
	// 	$(this).mouseleave(function(){
	// 		var no = $(this).attr('id').split('-');
	// 		$(this).removeClass('float');
	// 	});


	// });
	
	
}


	function performSponsers() {

		setTimeout(function() {
		    console.log("hello");
		    // $(".modal-header p").text("Sponsors");
		    
		    sponsorModal.style.display = "block";
		}, 1000);
		// When the user clicks on <span> (x), close the modal
		$('#spanSponsorModal').click(function() {
		    sponsorModal.style.display = "none";
		});

	}

	function performContact() {
		
		setTimeout(function() {
		    console.log("hello");
		    // $(".modal-header p").text("Sponsors");
		    
		    contactModal.style.display = "block";
		}, 1000);
		// When the user clicks on <span> (x), close the modal
		$('#spanContactModal').click(function() {
		    contactModal.style.display = "none";
		});

	}

	function performRegister() {
		
		setTimeout(function() {
		    console.log("hello");
		    // $(".modal-header p").text("Sponsors");
		    
		   registerModal.style.display = "block";
		}, 1000);
		// When the user clicks on <span> (x), close the modal
		$('#spanRegisterModal').click(function() {
		    registerModal.style.display = "none";
		});


	}

// function moveCameraLeft(spline) {
//   var camPosIndex = 0;

//   var newInterval = setInterval(function() {
//   	  camPosIndex+=smoothness;
// 	  if (camPosIndex < unknown) {
// 	    var camPos = spline.getPoint(camPosIndex / unknown);
// 	    var camRot = spline.getPoint(camPosIndex / unknown);
// 	    camera.position.x = camPos.x;
// 	    camera.position.y = camPos.y;
// 	    camera.position.z = camPos.z;
// 	  } else {
// 	    camPosIndex = unknown - smoothness;
// 	    clearInterval(newInterval);
// 	    console.log('done');
// 	  }
// 	  camera.updateProjectionMatrix();
//   }, 20);

//  //  var camPosIndex = unknown;
//  //  var newInterval = setInterval(function() {
// 	// camPosIndex-=smoothness;
//  //    if (camPosIndex < unknown && camPosIndex >= 0) {
//  //      var camPos = spline.getPoint(camPosIndex / unknown);
//  //      var camRot = spline.getTangent(camPosIndex / unknown);
//  //      camera.position.x = camPos.x;
//  //      camera.position.y = camPos.y;
//  //      camera.position.z = camPos.z;
//  //    } else {
//  //      camPosIndex = 0;
//  //      clearInterval(newInterval);
//  //    }
//  //  	camera.updateProjectionMatrix();
//  //  }, 20);

// }




