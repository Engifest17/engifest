<script>
var seconds = 15;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds; 
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "";
    } else {
        seconds--;
    }
}
 
var countdownTimer = setInterval('secondPassed()', 1000);
</script>

<script type="text/javascript">
function Redirect()
{
window.location="http://dtu.ac.in" ;
}
document.write ("<p align='center' style='padding-top:200px;font-size:16pt;'><strong>Welcome to Delhi Technological University</strong> <br>You will be redirected to university website in <span id='countdown' class='timer'> </span> seconds </p>");
setTimeout('Redirect()', 15000);

</script>
