// for control keys
var countKeys = 0;
var countKeysMax = 5;
function alignControlDiv(){
  var screenHeight = window.innerHeight;
  var fontsize = $('#accomodationDiv').css("font-size");
  fontsize = fontsize.split("p");
  fontsize = fontsize[0];  
  $('#accomodationDiv').css({
    "top":screenHeight - fontsize - 40 + "px"
  });
}
alignControlDiv();
function showText(cameraPosition) {

  var textDiv = document.getElementById('textDiv');
  if(cameraPosition.x <= (sun.planet.position.x + mercury.planet.position.x)/2) {
    // console.log("sun");
    textDiv.innerHTML = "";
  } else if( cameraPosition.x <= (mercury.planet.position.x + venus.planet.position.x)/2) {
    // console.log("mercury");
    textDiv.innerHTML = "";
  } else if( cameraPosition.x <= (venus.planet.position.x + earth.planet.position.x)/2) {
    // console.log("venus");
    textDiv.innerHTML = "P&nbsp;&nbsp;R&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;N&nbsp;&nbsp;I&nbsp;&nbsp;G&nbsp;&nbsp;H&nbsp;&nbsp;T";
  } else if( cameraPosition.x > (venus.planet.position.x + earth.planet.position.x)/2) {
    // console.log("earth");
    textDiv.innerHTML = "R&nbsp;&nbsp;E&nbsp;&nbsp;G&nbsp;&nbsp;I&nbsp;&nbsp;S&nbsp;&nbsp;T&nbsp;&nbsp;R&nbsp;&nbsp;A&nbsp;&nbsp;T&nbsp;&nbsp;I&nbsp;&nbsp;O&nbsp;&nbsp;N";
  } 
  // else if( cameraPosition.x > (earth.planet.position.x + mars.planet.position.x)/2) {
  //   // console.log("mars");
  //   textDiv.innerHTML = "C&nbsp;&nbsp;O&nbsp;&nbsp;N&nbsp;&nbsp;T&nbsp;&nbsp;A&nbsp;&nbsp;C&nbsp;&nbsp;T";
  // }
}

// document.getElementById('textDiv').addEventListener('click', function() {
//   console.log("hello");
// });
// $('#textDiv').mouseenter(function() {
//   $(this).addClass('scaling');
// });
// $('#textDiv').mouseleave(function() {
//   $(this).removeClass('scaling');
// });

//MODAL

var proNightModal = document.getElementById('proNightModal');
// When the user clicks on <span> (x), close the modal
$('#spanProNightModal').click(function() {
    proNightModal.style.display = "none";
});



var sponsorModal = document.getElementById('sponsorModal');
$('#sponsors').click(function() {
    console.log("hello");
    sponsorModal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
$('#spanSponsorModal').click(function() {
    sponsorModal.style.display = "none";
});



var registerModal = document.getElementById('registerModal');
// When the user clicks on <span> (x), close the modal
$('#spanRegisterModal').click(function() {
    registerModal.style.display = "none";
});



var aboutEngifestModal = document.getElementById('aboutEngifestModal');
$('#about').click(function() {
    console.log("hello");
    aboutEngifestModal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
$('#spanAboutEngifestModal').click(function() {
    aboutEngifestModal.style.display = "none";
});



var dtuLegacyModal = document.getElementById('dtuLegacyModal');
$('#legacy').click(function() {
    console.log("hello");
    dtuLegacyModal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
$('#spanDTULegacyModal').click(function() {
    dtuLegacyModal.style.display = "none";
});



// Contact Modal
var contactModal = document.getElementById('contactModal');
$('#contact-us').click(function() {
    console.log("hello");
    contactModal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
$('#spanContactModal').click(function() {
    contactModal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it

// SATELLITES


// document.addEventListener('keydown', function(e) {
//   // console.log(e);


//   var smoothness = 10;
//   var unknown = 2000;



//   if(e.key === "ArrowRight") {
//   	e.preventDefault();

//   	// console.log("right");
//   	//MOVE CAMERA ALONG SPLINE
//     function checkSame(index) {
//       if(camera.position.x == randomPoints[index].x && camera.position.y == randomPoints[index].y && camera.position.z == randomPoints[index].z) {
//         return true;
//       }
//       return false;
//     }
//     if(checkSame(2) || checkSame(4) || checkSame(6)) {
//         if(countKeys != 0) {
//           countKeys--;
//           if(countKeys == 0) {
//             moveCamera();
//           }
//         } else {            
//           countKeys = countKeysMax;  
//         }
//     } else {
//       countKeys =0;
//     }
//     if(countKeys == 0)
//       moveCamera();
    
//     function moveCamera(spline) {
    
//       camPosIndex+=smoothness;
//       if (camPosIndex < unknown) {
//         // camPosIndex = 0;
//         var camPos = spline.getPoint(camPosIndex / unknown);
//         var camRot = spline.getPoint(camPosIndex / unknown);
//         // console.log("right2");
//         camera.position.x = camPos.x;
//         camera.position.y = camPos.y;
//         camera.position.z = camPos.z;
//         // if(camera.position.x >= mars.mesh.position.x +100) {
//           // camera.rotation.x = camRot.x;
//           // camera.rotation.y = camRot.y;
//           // camera.rotation.z = camRot.z;
//           // if(spline.getPoint((camPosIndex+smoothness) / unknown).z > spline.getPoint((camPosIndex) / unknown).z)
//           //   camera.lookAt(spline.getTangent((camPosIndex-smoothness) / unknown));
//           // else 
//           //   camera.lookAt(spline.getTangent((camPosIndex+smoothness) / unknown));
//         // }
//       } else {
//         camPosIndex = unknown - smoothness;
//       }


//      	// saturn.position.x += 2;
//     	camera.updateProjectionMatrix();

    
//     }
//   } else if (e.key === "ArrowLeft") {
//   	e.preventDefault();
//   	// console.log("left");
//   	//MOVE CAMERA ALONG SPLINE
//     camPosIndex-=smoothness;
//     if (camPosIndex < unknown && camPosIndex > 0) {
//       // camPosIndex = 0;
//       var camPos = spline.getPoint(camPosIndex / unknown);
//       var camRot = spline.getTangent(camPosIndex / unknown);
//       // console.log("right2");
//       camera.position.x = camPos.x;
//       camera.position.y = camPos.y;
//       camera.position.z = camPos.z;
      
//       // camera.rotation.x = camRot.x;
//       // camera.rotation.y = camRot.y;
//       // camera.rotation.z = camRot.z;
//       // if(spline.getPoint((camPosIndex+smoothness) / unknown).z > spline.getPoint((camPosIndex) / unknown).z)
//       //   camera.lookAt(spline.getTangent((camPosIndex-smoothness) / unknown));
//       // else 
//       //   camera.lookAt(spline.getTangent((camPosIndex+smoothness) / unknown));
//     } else {
//       camPosIndex = smoothness;
//     }
//   	// saturn.position.x -= 2;
//   	camera.updateProjectionMatrix();
//   }
//   // console.log(e);
// });
