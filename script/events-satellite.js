// $('#events-satellite').css({
//     "display": "none"
// });

var satelliteModal1 = document.getElementById('satellite-modal-1');
var satelliteModal2 = document.getElementById('satellite-modal-2');
var satelliteModal3 = document.getElementById('satellite-modal-3');
var satelliteModal4 = document.getElementById('satellite-modal-4');
var satelliteModal5 = document.getElementById('satellite-modal-5');
var satelliteModal6 = document.getElementById('satellite-modal-6');
var satelliteModal7 = document.getElementById('satellite-modal-7');
var satelliteModal8 = document.getElementById('satellite-modal-8');

$('#satellite-p-1').click(function() {
    console.log("in satelliteModal1");
    satelliteModal1.style.display = "block";
});

$('#satellite-p-2').click(function() {
    console.log("in satelliteModal2");
    satelliteModal2.style.display = "block";
});

$('#satellite-p-3').click(function() {
    console.log("in satelliteModal3");
    satelliteModal3.style.display = "block";
});

$('#satellite-p-4').click(function() {
    console.log("in satelliteModal4");
    satelliteModal4.style.display = "block";
});

$('#satellite-p-5').click(function() {
    console.log("in satelliteModal5");
    satelliteModal5.style.display = "block";
});

$('#satellite-p-6').click(function() {
    console.log("in satelliteModal6");
    satelliteModal6.style.display = "block";
});

$('#satellite-p-7').click(function() {
    console.log("in satelliteModal7");
    satelliteModal7.style.display = "block";
});

$('#satellite-p-8').click(function() {
    console.log("in satelliteModal8");
    satelliteModal8.style.display = "block";
});


// When the user clicks on <span> (x), close the modal
$('#spanModalSatellite').click(function() {
    modal.style.display = "none";
    satelliteModal1.style.display = "none";
    satelliteModal2.style.display = "none";
    satelliteModal3.style.display = "none";
    satelliteModal4.style.display = "none";
    satelliteModal5.style.display = "none";
    satelliteModal6.style.display = "none";
    satelliteModal7.style.display = "none";
    satelliteModal8.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == satelliteModal1 || event.target == satelliteModal2 || event.target == satelliteModal3 || event.target == satelliteModal4 || event.target == satelliteModal5 || event.target == satelliteModal6 || event.target == satelliteModal7 || event.target == satelliteModal8) {
        modal.style.display = "none";
        satelliteModal1.style.display = "none";
        satelliteModal2.style.display = "none";
        satelliteModal3.style.display = "none";
        satelliteModal4.style.display = "none";
        satelliteModal5.style.display = "none";
        satelliteModal6.style.display = "none";
        satelliteModal7.style.display = "none";
        satelliteModal8.style.display = "none";
    }
}
document.onkeydown = function(event) {  
	modal.style.display = "none";
	satelliteModal1.style.display = "none";
	satelliteModal2.style.display = "none";
	satelliteModal3.style.display = "none";
	satelliteModal4.style.display = "none";
	satelliteModal5.style.display = "none";
	satelliteModal6.style.display = "none";
	satelliteModal7.style.display = "none";
	satelliteModal8.style.display = "none";
}

