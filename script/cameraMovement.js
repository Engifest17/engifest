$('#home').click(function() {
	var newSpline = new Spline();
	console.log("home");
	newSpline.makeSplinePoints(camera, sun);
	if(camera.position.x <= sun.planet.position.x) {
		moveCameraRight(newSpline.curve);
	} else {
		moveCameraLeft(newSpline.curve);	
	}
});

$('#events').click(function() {
	var newSpline = new Spline();
	console.log("events");
	newSpline.makeSplinePoints(camera, mercury);
	if(camera.position.x <= mercury.planet.position.x) {
		moveCameraRight(newSpline.curve);
	} else {
		moveCameraLeft(newSpline.curve);	
	}
});


$('#sponsers').click(function() {
	var newSpline = new Spline();
	console.log("sponsers");
	newSpline.makeSplinePoints(camera, venus);
	if(camera.position.x <= venus.planet.position.x) {
		moveCameraRight(newSpline.curve);
	} else {
		moveCameraLeft(newSpline.curve);	
	}
});

$('#contact').click(function() {
	var newSpline = new Spline();
	console.log("contact");
	newSpline.makeSplinePoints(camera, earth);
	if(camera.position.x <= earth.planet.position.x) {
		moveCameraRight(newSpline.curve);
	} else {
		moveCameraLeft(newSpline.curve);	
	}
});

$('#registration').click(function() {
	var newSpline = new Spline();
	console.log("registration");
	newSpline.makeSplinePoints(camera, mars);
	if(camera.position.x <= mars.planet.position.x) {
		moveCameraRight(newSpline.curve);
	} else {
		moveCameraLeft(newSpline.curve);	
	}
});

  var smoothness = 10;
  var unknown = 400;

function moveCameraRight(spline) {
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
	  }
	  camera.updateProjectionMatrix();
  }, 20);

}

function moveCameraLeft(spline) {
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
	  }
	  camera.updateProjectionMatrix();
  }, 20);

 //  var camPosIndex = unknown;
 //  var newInterval = setInterval(function() {
	// camPosIndex-=smoothness;
 //    if (camPosIndex < unknown && camPosIndex >= 0) {
 //      var camPos = spline.getPoint(camPosIndex / unknown);
 //      var camRot = spline.getTangent(camPosIndex / unknown);
 //      camera.position.x = camPos.x;
 //      camera.position.y = camPos.y;
 //      camera.position.z = camPos.z;
 //    } else {
 //      camPosIndex = 0;
 //      clearInterval(newInterval);
 //    }
 //  	camera.updateProjectionMatrix();
 //  }, 20);

}




