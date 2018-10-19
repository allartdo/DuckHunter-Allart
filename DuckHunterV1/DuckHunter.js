//DuckHunter - js|| made by Allart de Jong.
//ⒸCopyRight A.deJong.
//Variables with doc.id is made for objects that we use more then twice!
//There is showed wich variables are used for what with the inline documentation.
//Every function has clear explanation of how it works.

//Basic things
    //It should be so that whenever you go to another page the settings menu will hide (function hideSettingsMenu() is doing that).
    //Every variable with document.getElementById(...); is made for a clearer name and sometimes other usages (then will be explained).


//Audio
var audio = document.getElementById('Rust');
var gunShotSound = document.getElementById('gunShotSound');
document.getElementById('backGroundSound').innerHTML = '<iframe class="iFrameSound" src="./Sounds/silent.mp3"></iframe>';  //if you dont use an iframe then its impossible to get your music starting automaticly in chrome, here i start a silent sound for 1 second and so on the video in html will succees auto starting. 
audio.volume = '1';       //Background music set to very low (0.1 - 10%).

//onOff setting
var settingsVariables = [settingsClick = 0, musicClick = 1, fullscreenClick = 0];           //for shorter code and keeping it clear code. Array for variables with numbers.
var STonOff = document.getElementById('settingsMainMenuSoundSwitch');
var FSonOff = document.getElementById('settingsFullscreenSwitch');
var holeDoc = document.documentElement;

//Duck Title
var duckTitle = document.getElementById('duckTitle');
var levelDiv = document.getElementById("levelDiv");

//Play
var bird1Variables = [move = -200, speedLeft = 2, speedRight = 2, speedTop = 2, randomTop = 450, goingRight = 0, goingLeft = 0, lostHalfAHeart = 0, dontLoseLifeOnHit = 0];
var bird2Variables = [move2 = 2250, randomTop2 = 450, goingRight2 = 0, goingLeft2 = 0, dontLoseLifeOnHit2 = 0];
var resetMoveTop;                       //Made to stop the movement of the bird by going up. 
var resetNumber;                        //Made to stop the random number generator
var resetRight;                         //Made to stop the movement to the right.
var resetLeft;                          //Made to stop the movement to the left.
var resetMoveTop2;                      //Same as above but now for the second bird.
var resetNumber2;                       //^^^
var resetRight2;                        //^^^
var resetLeft2;                         //^^^                           
var randomTopNumberDuration = 2000;     //This is the time it will take for the random number generator untill he gets a new number. By making a variable for it i can change the time each level if i want. then the bird changes his movement to the top of page or bottom of page faster.
var levelsClick = 0;                        //LevelsClick is made because if you just played a level chosen from the level selector and you want to continue with the highest level you have completed you can now go to main menu and play it. 
                                            //If i dont make levelsClick 0 the program will think i still want to contineu with the next level... also if you played lvl 3 from the level selector and you click on continue then without the levelsclick it will go to the highest level you have played 
var goToLevelTrue = 0;                      //This i used to check myself, now i can see if i clicked on a level from the level selector or just from the main menu. This one is when i clicked from the level selector, it should go set to 1 when i do.
var gamesWonTrue = 0;                       //This one is when i clicked from the main menu, it should go set to 1 when i do.
var hitPoints = 0;                          //Made to count the birds i shot. If this is more then my needed hits at that level then you win.
var hitsNeeded = 3;                         //Made so i can change every level how many birds the player has to shoot.
var goToLevel = 0;                          //In the level selector every level will need this variable to move to that level. (if you read the code where its getting used it will be easyer to understand).
var gamesWon = 1;                                           //gamesWon starts with 1 so you will not see level 0 at the first level when you play. Its also made for going to whatever level you want.
var bird1 = document.getElementById("bird");                //Giving the first bird a connection with the id in the HTML, name of variable is bird1.
var bird2 = document.getElementById("bird2");               //Same here. This is just the second bird
var moneyCount = document.getElementById('Money');          //Made to count the money and show the player how much money he got.
var Money = 0;                                              //This is the amount of money the player has.
var Ammo = 10;                                              //This is the amount of bullets the player has.




//settings
function hideSettingsMenu() {
    settingsMenu.style.display = 'none';      //Then hides the settingsMenu (display none).
    settingsClick = 0;                        //settingsClick to 0 to reset the loop. (now the menu can be opened again and so i created a loop on click).
}

//Showing/hiding settings menu || onClick
function settingsButton() {             //Showed
    if (settingsClick == 0) {           //when settingsClick is equal to 0 (what he is standard, without any click on it yet.).
        settingsMenu.style.display = 'block';       //then show the settingsMenu (display block).
        settingsClick = 1;                          //settingsClick set to 1 so that when i click again it wont show dubble
    }

   else if (settingsClick == 1) {       //Hidden || when settingsClick is equal to 1 (what he is when you clicked it once)
    hideSettingsMenu();
    }
}

//Putting the main menu sound on/off
function switchMainMenuMusic () {       //Music OFF
    if (musicClick == 1) {              //if i didn't click on the ON button yet so when musicClick equal is to 0 (0 = off with most of the things) then...
        audio.pause();                  //Music on pause.
        STonOff.innerHTML = 'OFF';      //The text where ON stays now will be set to OFF so the player knows sound is off.
        musicClick = 0;                 //musicClick will now be set to 1 so the next time we click on ON or OFF this function will never activate because its not equal to 0 but to 1 now.
    }

    else if (musicClick == 0) {         //Music ON || if the musicClick equal is to 1 then...
        audio.play();                   //The music will start playing again.
        STonOff.innerHTML = 'ON';       //Text will be from OFF to ON now.
        musicClick = 1;                 //musicClick set to 0 so this function wont go on again.
    }
}

//Fullscreen On/Off             //copy copy copy :)
function switchFullscreen() {               //Fullscreen ON
    if (fullscreenClick == 0) {                 //when fullscreenClick is equal to 0 then activate everything under this.
        if (holeDoc.requestFullscreen) {           //When elem (document).requestFullscreen is active then 
            holeDoc.requestFullscreen();
          } else if (holeDoc.mozRequestFullScreen) { /* Firefox */
            holeDoc.mozRequestFullScreen();
          } else if (holeDoc.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            holeDoc.webkitRequestFullscreen();
          } else if (holeDoc.msRequestFullscreen) { /* IE/Edge */
            holeDoc.msRequestFullscreen();
          }
        FSonOff.innerHTML = 'ON';
        fullscreenClick = 1;
    }

    else if (fullscreenClick == 1) {         //Fullscreen OFF
        if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
          }
        FSonOff.innerHTML = 'OFF';
        fullscreenClick = 0;
    }
}


//Play

/*function Pauze() {
    if (goingLeft == 1) {
        goLeft();
        bird1.style.display = "block";
        alert("contineu goLeft!")
    }
    if (goingRight == 1) {
        goRight();
        bird1.style.display = "block";
        alert("contineu goRight!")
    }
}

function startAgain() {
    bird1.style.display = "block";
    PlayGame();
}*/


function resetBirds() {
    move = -200, randomTop = 450, goingRight = 0, goingLeft = 0, lostHalfAHeart = 0, dontLoseLifeOnHit = 0; //move is the position the bird starts at the start of the game, goingRight and goingLeft are made to let the computer know wich way the birds are heading at.
    move2 = 2250, randomTop2 = 250, goingRight2 = 0, goingLeft2 = 0, dontLoseLifeOnHit2 = 0;    //lostHakfAHearth is made to count the birds the player have missed (when they hit the border this will activate). dontLoseLifeOnHit is made so the player wont lose a heart's when 
}

function gunShot() {                                            //The shooting function.

    function basicShot() {
        Ammo--;                                                 //You will lose one bullet, ammo -- means -1.
        ammoCount.innerHTML = Ammo;                             //ammoCount starts with 0 and now we change the ammoCount's number to the number that Ammo is.
        gunShotSound.play();                                    //The shound of the gun will start playing.
        if (Ammo == 0 && hitPoints < hitsNeeded) {              //If your ammo is the same as 0 (empty) and the amount of birds you shot (hitPoints) is bigger then (<) the hits you need (hitsNeeded) then...
            console.log("Ammo = " + Ammo);                      //Checking here my Ammo to see what my Ammo is i used it some times to check what my ammo really is.
            gameOver();                                         //Game over.
        }
    }

    function hitPointChecker() {
        hitPoints ++;                                           //hitPoints ++, on this way i count my hitted birds.
        Money += 50;                                            //You will get + 50 money for shooting a bird (+= means adding, + means set and ++ only plus 1).
        moneyCount.innerHTML = Money;                           //This works just like ammoCount, i change the text to the amount of money.
        basicShot();                                            //Function above will be activated (basicShot).
        if (hitPoints == hitsNeeded) {                          //If the amount of birds (hitPoints) are the same as (==) the amount of birds you have to shoot (hitsNeeded) then...
            youWin();                                           //Then you win the game (youWin() function will activate).
        }
    }

    levelDiv.onmousedown = function() {                         //When you press any mouse button on the levelDiv element then this function will activate
        basicShot();                                            //Function above will be activated (basicShot).
    }

    bird1.onmousedown = function hitBird1() {                   //When you hit a bird by pressing you mouse button down this activates.
        bird1.style.visibility = "hidden";                      //The bird goes invisible, if i make it display none, it would be gone from the page and not keep on moving.
        dontLoseLifeOnHit = 1;                                  //I make dontLoseLifeOnHit 1 so in the later function the player will never lose a half or hole heart
        hitPointChecker();                                      //Function above will be activated (hitPointChecker).
    }

    bird2.onmousedown = function hitBird1() {                   //ALL SAME CODE AS ABOVE BUT NOW ABOUT A SECOND BIRD.
        bird2.style.visibility = "hidden";
        dontLoseLifeOnHit2 = 1;
        hitPointChecker();
    }
}

levelDiv.onmousemove = function(e) {                    //function that activates everytime your mouse moves.
    var x = e.pageX;                                    //x is now same as the pageX position
    Gun1.style.left = x - 50 + 'px';                    //The position of the Gun is now set to the page his X position + 50 px. 50 so it looks like your shooting forward.
}

function Bird1() {                              //FIRST MADE BIRD...        Allart de Jong :)
getRandomTopNumber();
moveTillBorder();
goRight();

    function getRandomTopNumber() {
        randomTop = Math.round(Math.random()*884);
        resetNumber = setInterval(function(){
            randomTop = Math.round(Math.random()*884);
            
            console.log("random number bird 1: " + randomTop);
        }, randomTopNumberDuration);
    }

    function moveTillBorder() {
        resetMoveTop = setInterval(function(){
            if (randomTop > bird1.offsetTop) {
                bird1.style.top = bird1.offsetTop += speedTop;
            } else if (randomTop < bird1.offsetTop) {
                bird1.style.top = bird1.offsetTop -= speedTop;
            }
            //console.log(bird1.style.top);
            //console.log(randomTop);

            if (bird1.offsetTop == randomTop -1) {
                bird1.style.top = bird1.offsetTop = randomTop;
            } else if (bird1.offsetTop == randomTop +1) {
                bird1.style.top = bird1.offsetTop = randomTop;
            }
        }, 1);
    }

    //Ik wil hier dat de vogel naar de 

    console.log(document.body.clientHeight);

    function goRight() {
        resetRight = setInterval(function(){
            goingLeft = 0;
            move += speedRight;
            bird1.style.transform = "scale(1)";
            bird1.style.left = move + "px";
            if (move > document.body.clientWidth + 100) {
                if (dontLoseLifeOnHit == 0) {
                    lostHalfAHeart +=1;
                    console.log(lostHalfAHeart);
                }
                if (lostHalfAHeart == 10) {
                    gameOver();
                } else {
                goingLeft = 1;
                bird1.style.visibility = "visible";
                dontLoseLifeOnHit = 0;
                window.clearInterval(resetRight);
                goLeft();
                }
            }
        }, 1);
    }

    function goLeft() {
        resetLeft = setInterval(function(){
            goingRight = 0;
            move -= speedLeft;
            bird1.style.transform = "scaleX(-1)";
            bird1.style.left = move + "px";
            if (move < document.body.clientLeft - 200) {
                if (dontLoseLifeOnHit == 0) {
                    lostHalfAHeart +=1;
                    //alert("You lost half a heart!")
                    console.log(lostHalfAHeart);
                }
                if (lostHalfAHeart == 10) {
                    gameOver();
                } else {
                goingRight = 1;
                bird1.style.visibility = "visible";
                dontLoseLifeOnHit = 0;
                window.clearInterval(resetLeft);
                goRight();
                }
            }
        }, 1);
    }
}

function Bird2() {                              //SECOND MADE BIRD...        Allart de Jong :)
getRandomTopNumber();
moveTillBorder();
goLeft();
bird2.style.display = "block";

    function getRandomTopNumber() {
        randomTop2 = Math.round(Math.random()*document.body.clientHeight);
        resetNumber2 = setInterval(function(){
            randomTop2 = Math.round(Math.random()*document.body.clientHeight);
            console.log("random number bird 2: " + randomTop2);
        }, randomTopNumberDuration);
    }

    function moveTillBorder() {
        resetMoveTop2 = setInterval(function(){          
            if (bird2.offsetTop > document.body.clientHeight - 100) {
                bird2.style.top = bird2.offsetTop -= speedTop;
            } else if (randomTop2 > bird2.offsetTop) {
                bird2.style.top = bird2.offsetTop += speedTop;                 //3px if you want to zoom out and be able to use this function (25% zoom = max zoom out in chrome)
                //console.log(bird2.style.top);
                //console.log(randomTop2);
            } else if (randomTop2 < bird2.offsetTop) {
                bird2.style.top = bird2.offsetTop -= speedTop;                 //1 pixel with 100% zoom or higher
            }


            if (bird2.offsetTop == randomTop2 -1) {
                bird2.style.top = bird2.offsetTop = randomTop2;
            } else if (bird2.offsetTop == randomTop2 +1) {
                bird2.style.top = bird2.offsetTop = randomTop2;
            }

            if (bird2.offsetTop == randomTop2) {
                bird2.style.top = bird2.offsetTop += 0;
            } 

        }, 1);
    }

    function goRight() {
        resetRight2 = setInterval(function(){
            goingLeft2 = 0;
            move2 += speedRight;
            bird2.style.transform = "scale(-1)";
            bird2.style.left = move2 + "px";
            if (move2 > document.body.clientWidth + 300) {
                if (dontLoseLifeOnHit2 == 0) {
                    lostHalfAHeart +=1;
                    console.log(lostHalfAHeart);
                }
                if (lostHalfAHeart == 10) {
                    gameOver();
                } else {
                goingLeft2 = 1;
                bird2.style.visibility = "visible";
                dontLoseLifeOnHit2 = 0;
                window.clearInterval(resetRight2);
                goLeft();
                }
            }
        }, 1);
    }

    function goLeft() {
        resetLeft2 = setInterval(function(){
            goingRight2 = 0;
            move2 -= speedLeft;
            bird2.style.transform = "scaleX(1)";
            bird2.style.left = move2 + "px";
            if (move2 < document.body.clientLeft - 300) {
                if (dontLoseLifeOnHit2 == 0) {
                    lostHalfAHeart +=1;
                    //alert("You lost half a heart!")
                    console.log(lostHalfAHeart);
                }
                if (lostHalfAHeart == 10) {
                    gameOver();
                } else {
                goingRight2 = 1;
                bird2.style.visibility = "visible";
                dontLoseLifeOnHit2 = 0;
                window.clearInterval(resetLeft2);
                goRight();
                }
            }
        }, 1);
    }
}

function playGame() {                                       //Function made for starting the game.
    mmMenu.style.display = 'none';                          //Hiding the main menu.
    duckTitle.style.display = 'none';                       //Hiding the main menu title.
    backGround.style.display = 'none';                      //Hiding the main background image.
    world1BackGround.style.display = 'block';               //Showing the ingame background image.
    levelDiv.style.display = 'block';                       //The level page will show now.
    readySetGoTextChange.innerHTML = "3";                   //There will come text in the screen that says 2.
    readySetGoTextChange.style.display = "block";
    readySetGoTextChange.style.left = "900px"
    levelText.style.opacity = '1';
    moneyDiv.style.width = '125px';
    moneyDiv.style.height = '30px';
    moneyCount.style.fontSize = '20px';
    moneyCount.style.top = '-12.3px';
    duckCoin.style.width = '27.5px';
    duckCoin.style.height = '27.5px';
    duckCoin.style.top = '1px';
    levelDiv.onmousedown = 0;
    hitPoints = 0;
    Ammo = 10;
    ammoCount.innerHTML = Ammo;
    goToLevelTrue = 0;
    gamesWonTrue = 0;
    hideSettingsMenu();
    checkMyLevels();
    console.log("won " + gamesWon);
    console.log("level " + goToLevel);
    console.log("levelclick " + levelsClick);

    if ((gamesWon >= goToLevel) && (levelsClick == 1)) {
        levelText.innerHTML = "Level " + goToLevel;
        goToLevelTrue = 1;
    } else if (gamesWon >= goToLevel) {
        levelText.innerHTML = "Level " + gamesWon;
        gamesWonTrue = 1;
    } 
    console.log("Wontrue" + gamesWonTrue);
    console.log("levelTrue" + goToLevelTrue);

    var resetReady1 = setInterval(function(){               //In this interval function you can write what you want to see after 1 second || Runs only once
        readySetGoTextChange.innerHTML = "2";               //There will come text in the screen that says 2.
        window.clearInterval(resetReady1);                  //Stopping the setinterval so it will run only once.
    }, 1000);                                               //1 second

    var resetReady2 = setInterval(function(){               //In this interval function you can write what you want to see after 2 second || Runs only once
        readySetGoTextChange.innerHTML = "1";               //There will come text in the screen that says 1.
        window.clearInterval(resetReady2);                  //Stopping the setinterval so it will run only once.
    }, 2000);                                               //2 seconds

    var resetGo = setInterval(function(){                   //In this interval function you can write what you want to see after 3 second || Runs only once
        readySetGoTextChange.innerHTML = "GO";              //There will come text in the screen that says GO.
        readySetGoTextChange.style.left = "740px"           //Positioning the Ready Set Go text a bit more to the left of the page so it will look its still in the middle.
        window.clearInterval(resetGo);                      //Stopping the setinterval so it will run only once.
    }, 3000);                                               //3 seconds

    var resetVisibility = setInterval(function(){           //In this interval function you can write what you want to see after 4 second || Runs only once
        levelText.style.opacity = '0';
        readySetGoTextChange.style.display = "none";
        bird1.style.display = "block";

        if ((goToLevel == 2 && goToLevelTrue == 1) || (gamesWon == 2 && gamesWonTrue == 1)) {               //Level 2
            alert("lvl 2")
            speedLeft = 2.1;
            speedRight = 2.1;
            speedTop = 2.1;
            randomTopNumberDuration = 1950;
        }

        if ((goToLevel == 4 && goToLevelTrue == 1) || (gamesWon == 4 && gamesWonTrue == 1)) {               //Level 4
            alert("lvl 4")
            speedLeft = 2.2;
            speedRight = 2.2;
            speedTop = 2.2;
            randomTopNumberDuration = 1900;
        }

        if ((goToLevel == 5 && goToLevelTrue == 1) || (gamesWon == 5 && gamesWonTrue == 1)) {               //Level 5
            alert("lvl 5")
            alert("Your doing very well! keep on going!!")
            hitsNeeded = 4;
        }

        if ((goToLevel == 6 && goToLevelTrue == 1) || (gamesWon == 6 && gamesWonTrue == 1)) {               //Level 6
            alert("lvl 6")
            speedLeft = 2.3;
            speedRight = 2.3;
            speedTop = 2.3;
            randomTopNumberDuration = 1850;
        }

        if ((goToLevel == 8 && goToLevelTrue == 1) || (gamesWon == 8 && gamesWonTrue == 1)) {               //Level 8
            alert("lvl 8")
            alert("Congrats! ur first skill point has been added, go to shop, skills and choose what you want to upgrade");
            speedLeft = 2.4;
            speedRight = 2.4;
            speedTop = 2.4;
            randomTopNumberDuration = 1800;
            //first skill point added? Every 8 rounds you can get a skill point. at lvl 120 you will then have 15 upgrade points.
        }

        if ((goToLevel == 10 && goToLevelTrue == 1) || (gamesWon == 10 && gamesWonTrue == 1)) {             //Level 10
            alert("lvl 10")
            alert("One bird at a time not enough?")
            speedLeft = 2.5;
            speedRight = 2.5;
            speedTop = 2.5;
            randomTopNumberDuration = 1750;
        }

        if ((goToLevel == 12 && goToLevelTrue == 1) || (gamesWon == 12 && gamesWonTrue == 1)) {             //Level 12
            alert("lvl 12")
            speedLeft = 2.6;
            speedRight = 2.6;
            speedTop = 2.6;
            randomTopNumberDuration = 1700;
            alert("I need more!!");
            hitsNeeded = 5;
        }

        if ((goToLevel == 14 && goToLevelTrue == 1) || (gamesWon == 14 && gamesWonTrue == 1)) {             //Level 14
            alert("lvl 14")
            speedLeft = 2.7;
            speedRight = 2.7;
            speedTop = 2.7;
            randomTopNumberDuration = 1650;
        }

        if ((goToLevel == 15 && goToLevelTrue == 1) || (gamesWon == 15 && gamesWonTrue == 1)) {             //Level 15
            alert("lvl 15")
        }
        
        if ((goToLevel == 16 && goToLevelTrue == 1) || (gamesWon == 16 && gamesWonTrue == 1)) {             //Level 16
            alert("lvl 16")
            alert("Congrats! Skill point has been added, go to shop, skills and choose what you want to upgrade");
            speedLeft = 2.8;
            speedRight = 2.8;
            speedTop = 2.8;
            randomTopNumberDuration = 1600;
            //skill point added
        }

        if ((goToLevel == 18 && goToLevelTrue == 1) || (gamesWon == 18 && gamesWonTrue == 1)) {             //Level 18
            alert("lvl 18")
            speedLeft = 2.9;
            speedRight = 2.9;
            speedTop = 2.9;
            randomTopNumberDuration = 1550;
        }

        if ((goToLevel == 20 && goToLevelTrue == 1) || (gamesWon == 20 && gamesWonTrue == 1)) {             //Level 20
            alert("lvl 20")
            speedLeft = 3;
            speedRight = 3;
            speedTop = 3;
            randomTopNumberDuration = 1500;
            hitsNeeded = 6;
            //life to 3 hearts now? instead of 5.
        }

        if ((goToLevel == 22 && goToLevelTrue == 1) || (gamesWon == 22 && gamesWonTrue == 1)) {             //Level 22
            alert("lvl 22")
            speedLeft = 3.1;
            speedRight = 3.1;
            speedTop = 3.1;
            randomTopNumberDuration = 1450;
        }

        if ((goToLevel == 24 && goToLevelTrue == 1) || (gamesWon == 24 && gamesWonTrue == 1)) {             //Level 24
            alert("lvl 24")
            alert("Congrats! ur first skill point has been added, go to shop, skills and choose what you want to upgrade");
            speedLeft = 3.2;
            speedRight = 3.2;
            speedTop = 3.2;
            randomTopNumberDuration = 1400;
            //skillpoint added
        }

        if ((goToLevel == 25 && goToLevelTrue == 1) || (gamesWon == 25 && gamesWonTrue == 1)) {             //Level 25
            alert("lvl 25")
            hitsNeeded = 7;
        }

        if ((goToLevel == 26 && goToLevelTrue == 1) || (gamesWon == 26 && gamesWonTrue == 1)) {             //Level 26
            alert("lvl 26")
            speedLeft = 3.3;
            speedRight = 3.3;
            speedTop = 3.3;
            randomTopNumberDuration = 1350;
        }

        if ((goToLevel == 28 && goToLevelTrue == 1) || (gamesWon == 28 && gamesWonTrue == 1)) {             //Level 28
            alert("lvl 28")
            speedLeft = 3.4;
            speedRight = 3.4;
            speedTop = 3.4;
            randomTopNumberDuration = 1300;
        }

        if ((goToLevel == 30 && goToLevelTrue == 1) || (gamesWon == 30 && gamesWonTrue == 1)) {             //Level 30
            alert("lvl 30")
            speedLeft = 3.5;
            speedRight = 3.5;
            speedTop = 3.5;
            randomTopNumberDuration = 1250;
            alert("Shoot 8 for me!!");
            hitsNeeded = 8;
            //bird added?
        }

        if ((goToLevel == 32 && goToLevelTrue == 1) || (gamesWon == 32 && gamesWonTrue == 1)) {             //Level 32
            alert("lvl 32")
            speedLeft = 3.6;
            speedRight = 3.6;
            speedTop = 3.6;
            randomTopNumberDuration = 1200;
            //skill point added
        }

        
        if ((goToLevel >= 10 && goToLevelTrue == 1) || (gamesWon >= 10 && gamesWonTrue == 1)) {             //Everything after level 10 will do this...
            Bird2();                                                                                        //Show the second bird.
        }


        Bird1();                                                //Show bird1 (this is in the main function but as last written, otherwise the bird wont have the changes of every level).
        gunShot();                                              //The shooting function.
        window.clearInterval(resetVisibility);                  //Stopping the setinterval so it will run only once.
    }, 4000);                                                   //Ending the function and giving 4 second before all the code in this interval will be activated.
}

function youWin() {                                             //When you win a level all under this will be activated.
    if ((gamesWon == goToLevel) && (levelsClick == 1)) {        //When my amount of won games is the same as the level i clicked on at the levels page
        gamesWon ++;                                            //then your gamesWon will be one more.
    } else if ((gamesWon >= goToLevel) && (gamesWonTrue == 1)) {    //when i clicked in the main menu at Play gamesWonTrue will be 1. if gamesWon is bigger or equal to goToLevel
        gamesWon ++;                                            //AND gamesWonTrue is equal to 1 then gamesWon will be one more. (goToLevel is standard 0).
    }

    goToLevel ++;                                       //When you have levelsClick equal to 1 this is very usefull. if you have selected level 1 but have completed 6 levels and you win level one from level selector then you can click on next level and you go to level 2 and not to 7.
    bird1.style.visibility = "visible";                 //When i click my bird and win he will be invisible but still on page. now i make him visible to fix buggs. (if i would play again a level or next level the bird was invisible first untill it did hit the wall).
    bird1.style.display = "none";                       //Here i remove him from the page by not letting it display.
    bird2.style.visibility = "visible";                 //Same as above but now with second bird.
    bird2.style.display = "none";                       //Same as above but now with second bird.
    window.clearInterval(resetMoveTop);                 //Im stopping the infinite interval resetMoveTop, function for letting the bird go up or down.
    window.clearInterval(resetNumber);                  //Stopping resetNumber, Generates a random number between the pageTop and Height.
    window.clearInterval(resetRight);                   //Stopping resetRight, Makes it possible to let the bird go to the Right side of the page.
    window.clearInterval(resetLeft);                    //Stopping the resetLeft, Makes it possible to let the bird go to the Left side of the page.
    window.clearInterval(resetMoveTop2);
    window.clearInterval(resetNumber2);
    window.clearInterval(resetRight2);
    window.clearInterval(resetLeft2);
    levelDiv.style.display = "none";                    //Displaying the Level to none (invisible).
    youWinDiv.style.display = "block";                  //Displaying the page you have to see when you win to block (visible).
    moneyDiv.style.width = '250px';                     //Making the money a bit bigger again.
    moneyDiv.style.height = '60px';                     //Making the money a bit bigger again.
    moneyCount.style.fontSize = '40px';                 //Making the money a bit bigger again.
    moneyCount.style.top = '-25px';                     //Changing the possition of the money.
    duckCoin.style.width = '55px';                      //Making the money coin a bit bigger again.
    duckCoin.style.height = '55px';                     //Making the money coin a bit bigger again.
    duckCoin.style.top = '3px';                         //Changing the possition of the money coin.
    resetBirds();
    checkMyLevels();                                    //By activating this function i let the level selector know how far i am with completing levels. Example: i completed level 6, now i can click in level selector on level 6 or lower to play it again.
    hideSettingsMenu();                                 //Hiding the settingMenu if it was open. It would be enoying if its on the page the whole time.
}

function gameOver() {                                   //This will be activated when you lose a level.
    bird1.style.visibility = "visible";                 //Check the function youWin()
    bird1.style.display = "none";                       //Check the function youWin()
    bird2.style.visibility = "visible";                 //Same as above but now with second bird.
    bird2.style.display = "none";                       //Same as above but now with second bird.
    window.clearInterval(resetMoveTop);                 //Check the function youWin()
    window.clearInterval(resetNumber);                  //Check the function youWin()
    window.clearInterval(resetRight);                   //Check the function youWin()
    window.clearInterval(resetLeft);                    //Check the function youWin()
    window.clearInterval(resetMoveTop2);
    window.clearInterval(resetNumber2);
    window.clearInterval(resetRight2);
    window.clearInterval(resetLeft2);
    levelDiv.style.display = "none";                    //Check the function youWin()
    gameOverDiv.style.display = "block";                //This time we display the gameOverDiv to see the game over page.
    moneyDiv.style.width = '250px';                     //Check the function youWin()
    moneyDiv.style.height = '60px';                     //Check the function youWin()
    moneyCount.style.fontSize = '40px';                 //Check the function youWin()
    moneyCount.style.top = '-25px';                     //Check the function youWin()
    duckCoin.style.width = '55px';                      //Check the function youWin()
    duckCoin.style.height = '55px';                     //Check the function youWin()
    duckCoin.style.top = '3px';                         //Check the function youWin()
    resetBirds();
    hideSettingsMenu();                                 //Hiding the settingMenu
}

function retryLevel() {                             //GAME OVER || Retry
    gameOverDiv.style.display = "none";             //Hiding the game over page.
    playGame();                                     //Starting the game again.
}

function youWinToNextLevel() {                      //YOU WIN || Next Level
    youWinDiv.style.display = "none";               //Hiding the you win page.
    playGame();                                     //Starting the game again.
}

function gameOverToMainMenu() {                     //GAME OVER || Main Menu
    gameOverDiv.style.display = "none";             //Hiding the game over page.
    backGround.style.display = 'block';             //Showing the main menu background.
    world1BackGround.style.display = 'none';        //Hiding the in-game background
    levelsClick = 0;                                //
    toMainMenu();                                   //Activating the function toMainMenu().
}

function youWinToMainMenu() {                       //YOU WIN || Main Menu
    youWinDiv.style.display = "none";               //Same as game over to main menu! above here.
    backGround.style.display = 'block';             //Now just with the you win page
    world1BackGround.style.display = 'none';        //Check gameOverToMainMenu() function.
    levelsClick = 0;                                //Check gameOverToMainMenu() function.
    toMainMenu();                                   //Check gameOverToMainMenu() function.
}

function gameOverToLevels() {                       //GAME OVER || Levels
    gameOverDiv.style.display = "none";             //Same as the 2 above here!
    backGround.style.display = 'block';             //Check gameOverToMainMenu() function.
    world1BackGround.style.display = 'none';        //Check gameOverToMainMenu() function.
    levelsPage.style.display = 'block';             //Check gameOverToMainMenu() function. Now just moving to the levelsPage and not main menu.
    levelsClick = 0;                                //Check gameOverToMainMenu() function.
    hideSettingsMenu();                             //Check gameOverToMainMenu() function. In toMainMenu() has this function been placed.
}

function youWinToLevels() {                         //YOU WIN || Levels
    youWinDiv.style.display = "none";               //Same as gameOverToLevels() and the others now from you win.
    backGround.style.display = 'block';             //Check gameOverToMainMenu() function.
    world1BackGround.style.display = 'none';        //Check gameOverToMainMenu() function.
    levelsPage.style.display = 'block';             //Check gameOverToMainMenu() function.
    hideSettingsMenu();                             //Check gameOverToMainMenu() function. In toMainMenu() has this function been placed.
}

function gameOverToShop() {                         //GAME OVER || Shop
    gameOverDiv.style.display = "none";             //Game over to the shop. Same as above functions.
    backGround.style.display = 'block';             //Check gameOverToMainMenu() function.
    world1BackGround.style.display = 'none';        //Check gameOverToMainMenu() function.
    levelsClick = 0;                                //Check gameOverToMainMenu() function.
    toShop();                                       //Activation toShop().
}

function youWinToShop() {                           //YOU WIN || Shop
    youWinDiv.style.display = "none";               //same as 1 function above but now from you win.
    backGround.style.display = 'block';             //Check gameOverToMainMenu() function.
    world1BackGround.style.display = 'none';        //Check gameOverToMainMenu() function.
    toShop();                                       //Activation toShop().
}


//Main menu
function toMainMenu() {                             //PURE MADE FOR SHORTER CODE || from anywhere, to Main menu
    mmMenu.style.display = 'block';                 //Showing the menu in main menu.
    duckTitle.style.display = 'block';              //Showing the duckhunter title.
    hideSettingsMenu();                             //Hiding the setting menu.
}

function outMainMenu() {                            //PURE MADE FOR SHORTER CODE || from anywhere, out Main menu
    mmMenu.style.display = 'none';                  //Hiding the menu in main menu.
    duckTitle.style.display = 'none';               //Hiding the duckHunter Title
    hideSettingsMenu();                             //Hiding the setting menu.
}


//Shop
function toShop() {                                 //PURE MADE FOR SHORTER CODE
    shopPage.style.display = 'block';               //Showing the shopPage menu, where u can choose between gunshop or skills.
    sGunButton.style.display = 'block';             //Showing the gunbutton.
    hideSettingsMenu();                             //hiding the settings menu by exucuting my function. (why? check top of page).
}

function mainMenuToShop() {
    outMainMenu()
    toShop();
}

function shopBackToMenu() {
    toMainMenu();
    shopPage.style.display = 'none'; 
    sGunButton.style.display = 'none';
}

//Shop Gun Menu
function toGunMenu() {
    shopPage.style.display = 'none';
    sGunMenu.style.display = 'block';
    hideSettingsMenu();
}

//Shop Skill Menu
function toSkillMenu() {
    shopPage.style.display = 'none';
    sSkillMenu.style.display = 'block';
    hideSettingsMenu();
}

function backToShopMenu() {
    sGunMenu.style.display = 'none';
    sSkillMenu.style.display = 'none';
    toShop();
}


//levels
function mainMenuToLevels() {
    outMainMenu();
    levelsPage.style.display = 'block';
}

function levelsBackToMenu() {
    toMainMenu();
    levelsPage.style.display = 'none';
}

//Levels || World Selector

//World 1 -- Level/World selector!!
function toWorld1() {
    levelsPage.style.display = 'none';
    world1Menu.style.display = 'block';
    hideSettingsMenu();
}

function backToLevelsMenu1() {
    levelsPage.style.display = 'block';
    world1Menu.style.display = 'none';
    hideSettingsMenu();
}


function checkMyLevels() {                                  //function made to check how much games you have won, checks when you start a game or won one.
    if (gamesWon >= 1) {                                    //if i have won more games then 1 or just 1 the he does this...
        Level1.onclick = function() {                       //if i click at the levels selector page on level 1 then 
            levelsPage.style.display = "none";              //the levelspage will hide.
            world1Menu.style.display = "none";              //the world1menu will hide.
            goToLevel = 1;                                  //goToLevel set to 1, now the program knows he has to go to level 1.
            levelsClick = 1;                                //levelsClick set to 1 (why? check top of page).
            speedLeft = 2;
            speedRight = 2;
            speedTop = 2;
            randomTopNumberDuration = 2000;
            hitsNeeded = 3;
            playGame();
        }
    }

    if (gamesWon >= 2) {                                    //All of this will just be the same but then with a higher level.
        Level2.onclick = function() {                       //Would be nice if i could find a way to make this shorter.
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 2;
            levelsClick = 1;
            hitsNeeded = 3;
            playGame();
        }
    }

    if (gamesWon >= 3) {
        Level3.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 3;
            levelsClick = 1;
            speedLeft = 2.1;
            speedRight = 2.1;
            speedTop = 2.1;
            randomTopNumberDuration = 1950;
            hitsNeeded = 3;
            playGame();
        }
    }

    if (gamesWon >= 4) {
        Level4.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 4;
            levelsClick = 1;
            hitsNeeded = 3;
            playGame();
        }
    }

    if (gamesWon >= 5) {
        Level5.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 5;
            levelsClick = 1;
            levelsClick = 1;
            speedLeft = 2.2;
            speedRight = 2.2;
            speedTop = 2.2;
            randomTopNumberDuration = 1900;
            playGame();
        }
    }

    if (gamesWon >= 6) {
        Level6.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 6;
            levelsClick = 1;
            hitsNeeded = 4;
            playGame();
        }
    }

    if (gamesWon >= 7) {
        Level7.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 7;
            levelsClick = 1;
            speedLeft = 2.3;
            speedRight = 2.3;
            speedTop = 2.3;
            randomTopNumberDuration = 1850;
            hitsNeeded = 4;
            playGame();
        }
    }

    if (gamesWon >= 8) {
        Level8.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 8;
            levelsClick = 1;
            hitsNeeded = 4;
            playGame();
        }
    }

    if (gamesWon >= 9) {
        Level9.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 9;
            levelsClick = 1;
            speedLeft = 2.4;
            speedRight = 2.4;
            speedTop = 2.4;
            randomTopNumberDuration = 1800;
            hitsNeeded = 4;
            playGame();
        }
    }

    if (gamesWon >= 10) {
        Level10.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 10;
            levelsClick = 1;
            hitsNeeded = 4;
            playGame();
        }
    }

    if (gamesWon >= 11) {
        Level11.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 11;
            levelsClick = 1;
            speedLeft = 2.5;
            speedRight = 2.5;
            speedTop = 2.5;
            randomTopNumberDuration = 1750;
            hitsNeeded = 4;
            playGame();
        }
    }

    if (gamesWon >= 12) {
        Level12.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 12;
            levelsClick = 1;
            playGame();
        }
    }

    if (gamesWon >= 13) {
        Level13.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 13;
            levelsClick = 1;
            speedLeft = 2.6;
            speedRight = 2.6;
            speedTop = 2.6;
            randomTopNumberDuration = 1700;
            hitsNeeded = 5;
            playGame();
        }
    }

    if (gamesWon >= 14) {
        Level14.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 14;
            levelsClick = 1;
            hitsNeeded = 5;
            playGame();
        }
    }

    if (gamesWon >= 15) {
        Level15.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 15;
            levelsClick = 1;
            speedLeft = 2.7;
            speedRight = 2.7;
            speedTop = 2.7;
            randomTopNumberDuration = 1650;
            hitsNeeded = 5;
            playGame();
        }
    }


    if (gamesWon >= 16) {
        Level16.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 16;
            levelsClick = 1;
            hitsNeeded = 5;
            playGame();
        }
    }

    if (gamesWon >= 17) {
        Level17.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 17;
            levelsClick = 1;
            speedLeft = 2.8;
            speedRight = 2.8;
            speedTop = 2.8;
            randomTopNumberDuration = 1600;
            hitsNeeded = 5;
            playGame();
        }
    }

    if (gamesWon >= 18) {
        Level18.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 18;
            levelsClick = 1;
            hitsNeeded = 5;
            playGame();
        }
    }

    if (gamesWon >= 19) {
        Level19.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 19;
            levelsClick = 1;
            speedLeft = 2.9;
            speedRight = 2.9;
            speedTop = 2.9;
            randomTopNumberDuration = 1550;
            hitsNeeded = 5;
            playGame();
        }
    }

    if (gamesWon >= 20) {
        Level20.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 20;
            levelsClick = 1;
            playGame();
        }
    }

    if (gamesWon >= 21) {
        Level21.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 21;
            levelsClick = 1;
            speedLeft = 3;
            speedRight = 3;
            speedTop = 3;
            randomTopNumberDuration = 1500;
            hitsNeeded = 6;
            playGame();
        }
    }

    if (gamesWon >= 22) {
        Level22.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 22;
            levelsClick = 1;
            hitsNeeded = 6;
            playGame();
        }
    }

    if (gamesWon >= 23) {
        Level23.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 23;
            levelsClick = 1;
            speedLeft = 3.1;
            speedRight = 3.1;
            speedTop = 3.1;
            randomTopNumberDuration = 1450;
            hitsNeeded = 6;
            playGame();
        }
    }

    if (gamesWon >= 24) {
        Level24.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 24;
            levelsClick = 1;
            hitsNeeded = 6;
            playGame();
        }
    }


    if (gamesWon >= 25) {
        Level25.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 25;
            levelsClick = 1;
            speedLeft = 3.2;
            speedRight = 3.2;
            speedTop = 3.2;
            randomTopNumberDuration = 1400;
            playGame();
        }
    }

    if (gamesWon >= 26) {
        Level26.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 26;
            levelsClick = 1;
            hitsNeeded = 7;
            playGame();
        }
    }

    if (gamesWon >= 27) {
        Level27.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 27;
            levelsClick = 1;
            speedLeft = 3.3;
            speedRight = 3.3;
            speedTop = 3.3;
            randomTopNumberDuration = 1350;
            hitsNeeded = 7;
            playGame();
        }
    }

    if (gamesWon >= 28) {
        Level28.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 28;
            levelsClick = 1;
            hitsNeeded = 7;
            playGame();
        }
    }

    if (gamesWon >= 29) {
        Level29.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 29;
            levelsClick = 1;
            speedLeft = 3.4;
            speedRight = 3.4;
            speedTop = 3.4;
            randomTopNumberDuration = 1300;
            hitsNeeded = 7;
            playGame();
        }
    }

    if (gamesWon >= 30) {
        Level30.onclick = function() {
            levelsPage.style.display = "none";
            world1Menu.style.display = "none";
            goToLevel = 30;
            levelsClick = 1;
            playGame();
        }
    }
}

//World 2 -- Level/World selector!!
function toWorld2() {
    levelsPage.style.display = 'none';
    world2Menu.style.display = 'block';
    hideSettingsMenu();
}

function backToLevelsMenu2() {
    levelsPage.style.display = 'block';
    world2Menu.style.display = 'none';
    hideSettingsMenu();
}


//World 3 -- Level/World selector!!
function toWorld3() {
    levelsPage.style.display = 'none';
    world3Menu.style.display = 'block';
    hideSettingsMenu();
}

function backToLevelsMenu3() {
    levelsPage.style.display = 'block';
    world3Menu.style.display = 'none';
    hideSettingsMenu();
}


//World 4 -- Level/World selector!!
function toWorld4() {
    levelsPage.style.display = 'none';
    world4Menu.style.display = 'block';
    hideSettingsMenu();
}

function backToLevelsMenu4() {
    levelsPage.style.display = 'block';
    world4Menu.style.display = 'none';
    hideSettingsMenu();
}


//Credits
function toCredits() {
    outMainMenu();
    creditsPage.style.display = 'block';
}

function creditsBackToMenu() {
    toMainMenu();
    creditsPage.style.display = 'none';
}


