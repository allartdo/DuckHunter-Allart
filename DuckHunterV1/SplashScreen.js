document.getElementById('backGroundSound').innerHTML = '<iframe class="testFrame" src="./Sounds/silent.mp3"></iframe>';  //if you dont use an iframe then its impossible to get your music starting automaticly in chrome, here i start a silent sound for 1 second and so on the video in html will succees auto starting. 


var shot = document.getElementById('Shot');
shot.pause();


window.setTimeout(function(){

    // Move to new location
    window.location.href = "./DuckHunter.html";

}, 10100);

window.setTimeout(function(){

    //Sound of shot
    shot.play();

}, 9500);

