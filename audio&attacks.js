// functions--------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------



// functions for audio/sfx---------------------------------------------------------------------------------------------------

let audioMusicList = document.querySelectorAll(".audioMusic");
let audioSFXList = document.querySelectorAll(".audioSFX");

let muteAllMusic = function() {

    audioMusicList.forEach(function(audioElement) {
        audioElement.muted = true;
    })
    document.querySelector(".musicMuteButton").removeEventListener("click", muteAllMusic);
    document.querySelector(".musicMuteButton").addEventListener("click", unmuteAllMusic);
}

let unmuteAllMusic = function() {
    audioMusicList.forEach(function(audioElement) {
        audioElement.muted = false;
    })
    document.querySelector(".musicMuteButton").addEventListener("click", muteAllMusic);
    document.querySelector(".musicMuteButton").removeEventListener("click", unmuteAllMusic);
}

let muteAllSFX = function() {
    audioSFXList.forEach(function(sfxElement) {
        sfxElement.muted = true;
    })
    document.querySelector(".sfxMuteButton").removeEventListener("click", muteAllSFX);
    document.querySelector(".sfxMuteButton").addEventListener("click", unmuteAllSFX);
}

let unmuteAllSFX = function() {
    audioSFXList.forEach(function(sfxElement) {
        sfxElement.muted = false;
    })
    document.querySelector(".sfxMuteButton").addEventListener("click", muteAllSFX);
    document.querySelector(".sfxMuteButton").removeEventListener("click", unmuteAllSFX);
}

let playIntroMusic = function() {
    audioIntro.play();
}

let pauseIntroMusic = function() {
    audioIntro.pause();
}

let playIntroSFX = function() {
    sfxIntro.play();
}







// functions for attacks/actions------------------------------------------------------------------------------------------------------



// function for activating all attack buttons corresponding to current hero level
// activations should include click, touch, ideally arrow keys if I can easily add them
    // and also should change the mouseover of the cursor icon to something else
// this same function could also unhide the extra attack buttons corresponding to hero level


// function for deactivating all attack buttons
// should remove all of the activations from the above function

let attackActivate = function() {
    if (hero.grit <= 0) {
        rest();
    } else {
        if (battleCounter >= 1) {
            document.querySelector(".action1").addEventListener("click", bash);
            document.querySelector(".action1").style.cursor = "pointer";
            // soul compress should default to being off until enemy is at 50% HP
            // document.querySelector(".action2").addEventListener('click', soulCompress);
            document.querySelector(".action3").addEventListener("click", rest);
            document.querySelector(".action3").style.cursor = "pointer";
        }
        if (battleCounter >= 2) {
            document.getElementsByClassName("action1")[1].addEventListener("click", bash);
            document.getElementsByClassName("action1")[1].style.cursor = "pointer";
            // soul compress should default to being off until enemy is at 50% HP
            // document.getElementsByClassName("action2")[1].addEventListener('click', soulCompress);
            document.getElementsByClassName("action3")[1].addEventListener("click", rest);
            document.getElementsByClassName("action3")[1].style.cursor = "pointer";
            document.getElementsByClassName("action4")[0].addEventListener("click", defBlock);
            document.getElementsByClassName("action4")[0].style.cursor = "pointer";
        }
    }
}
let attackDeactivate = function() {
    if (battleCounter >= 1) {
        document.querySelector(".action1").removeEventListener("click", bash);
        document.querySelector(".action1").style.cursor = "initial";
        document.querySelector(".action2").removeEventListener("click", soulCompress);
        document.querySelector(".action2").style.cursor = "initial";
        document.querySelector(".action3").removeEventListener("click", rest);
        document.querySelector(".action3").style.cursor = "initial";
    }
    if (battleCounter >= 2) {
        document.getElementsByClassName("action1")[1].removeEventListener("click", bash);
        document.getElementsByClassName("action1")[1].style.cursor = "initial";
        document.getElementsByClassName("action2")[1].removeEventListener("click", soulCompress);
        document.getElementsByClassName("action2")[1].style.cursor = "initial";
        document.getElementsByClassName("action3")[1].removeEventListener("click", rest);
        document.getElementsByClassName("action3")[1].style.cursor = "initial";
        document.getElementsByClassName("action4")[0].removeEventListener("click", defBlock);
        document.getElementsByClassName("action4")[0].style.cursor = "initial";
        document.getElementsByClassName("action5")[0].removeEventListener("click", soulConstrict);
        document.getElementsByClassName("action5")[0].style.cursor = "initial";
    }
    // add them for other actions if I get that far
}

let soulAttacksEnable = function() {
    // console.log("soul Attacks Enable about to run directly")
    if (hero.level >= 1) {
        document.querySelector(".action2").addEventListener("click", soulCompress);
        document.querySelector(".action2").style.color = "rgb(172, 169, 169)";
        document.querySelector(".action2").style.cursor = "pointer";
        document.querySelector(".action2Span").classList.remove("soulRestricted");
    }
    if (hero.level >= 2) {
        document.getElementsByClassName("action2")[1].addEventListener("click", soulCompress);
        document.getElementsByClassName("action2")[1].style.color = "rgb(172, 169, 169)";
        document.getElementsByClassName("action2")[1].style.cursor = "pointer";
        document.getElementsByClassName("action2Span")[1].classList.remove("soulRestricted");
        document.querySelector(".action5").addEventListener("click", soulConstrict);
        document.querySelector(".action5").style.color = "rgb(172, 169, 169)";
        document.querySelector(".action5").style.cursor = "pointer";
        document.querySelector(".action5Span").classList.remove("soulRestricted");
    }
}

let soulAttacksDisable = function() {
    // console.log("soul Attacks Disable about to run directly")
    if (hero.level >= 1) {
        document.querySelector(".action2").removeEventListener("click", soulCompress);
        document.querySelector(".action2").style.color = "rgb(38, 34, 34)";
        document.querySelector(".action2").style.cursor = "initial";
        document.querySelector(".action2Span").classList.add("soulRestricted");
    }
    if (hero.level >= 2) {
        document.getElementsByClassName("action2")[1].removeEventListener("click", soulCompress);
        document.getElementsByClassName("action2")[1].style.color = "rgb(38, 34, 34)";
        document.getElementsByClassName("action2")[1].style.cursor = "initial";
        document.getElementsByClassName("action2Span")[1].classList.add("soulRestricted");
        document.querySelector(".action5").removeEventListener("click", soulConstrict);
        document.querySelector(".action5").style.color = "rgb(38, 34, 34)";
        document.querySelector(".action5").style.cursor = "initial";
        document.querySelector(".action5Span").classList.add("soulRestricted");
    }
}



let delayEnemyTurn = function() {
    turnCounter = false;
}

// individual functions for each attack/action
    // should turn off static animation functions -----> staticAnimOff()
    // should call battle action functions
    // should resume static animation again unless dead
    // when static animations are turned off - I will need to make sure that the default images for the characters is called

// bash - damages HP of enemy
let bash = function() {
    attackDeactivate();
    // console.log("bash function running")
    promptBoxText.innerText = "You used Bash";
    promptBoxTwoText.innerText = "You used Bash";
    bashAnimation();
    // a lot of the code tied to this attack is located in the animation function which is in app4.js
    // want effects of attack to wait until after the animation, but that will come in a bit
    hero.grit -= 10 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    if (hero.grit < 0) {
        hero.grit = 0;
    }
    // placing showPromptBox in the animation function
    // setTimeout(showPromptBox, 3500);
}

let currentSoulCompressDmg;
// 'soul compress' SP damage - damages SP of enemy
let soulCompress = function() {
    attackDeactivate();
    soulCompressSFX.play();
    promptBoxText.innerText = "You used Soul Compress";
    promptBoxTwoText.innerText = "You used Soul Compress";
    // showPromptBox move to animation
    setTimeout(showPromptBox, 700);
    currentSoulCompressDmg = 26 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    // test:
    // currentSoulCompressDmg = 100;
    currentEnemy.SP -= currentSoulCompressDmg;
    if (currentEnemy.SP < 0) {
        currentEnemy.SP = 0;
    }
    hero.grit -= 15 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    if (hero.grit < 0) {
        hero.grit = 0;
    }
    soulCompressAnimation();
    // move turnCounter false to animation
    // should have turnCounter set to false 
    setTimeout(delayEnemyTurn, 2000);
}

// rest
let rest = function() {
    attackDeactivate();
    restSFX.play();
    restAnimation();
    if (hero.grit <= 0) {
        promptBoxText.innerText = "You were forced to Rest";
        promptBoxTwoText.innerText = "You were forced to Rest";
    } else {
        promptBoxText.innerText = "You used Rest";
        promptBoxTwoText.innerText = "You used Rest";
    }
    setTimeout(showPromptBox, 700);
    hero.HP += 26 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    hero.grit += 25 + (Math.floor(Math.random() * 3) * (Math.round(Math.random()) * 2 - 1));
    if (hero.HP > hero.maxHP) {
        hero.HP = hero.maxHP;
    }
    if (hero.grit > hero.maxGrit) {
        hero.grit = hero.maxGrit
    }
    // should have turnCounter set to false in timeout
    setTimeout(delayEnemyTurn, 2000);
}

// learned after 1st battle: block - reduces HP damage from enemy on that turn
let defBlock = function() {
    attackDeactivate();
    // sound
    defBlockSFX.play();
    // defBlockAnimation(); <----- don't need because I'm just writing the code directly here since it's not involved
    promptBoxText.innerText = "You used Block";
    promptBoxTwoText.innerText = "You used Block";
    setTimeout(showPromptBox, 700);
    hero.grit -= 20 + (Math.floor(Math.random() * 3) * (Math.round(Math.random()) * 2 - 1));
    if (hero.grit < 0) {
        hero.grit = 0;
    }
    //hero should use grit to block
    hero.defBlock = true;
    document.querySelector(".defBlock").style.display = "block";
    document.getElementsByClassName("defBlock")[1].style.display = "block";
    // should have turnCounter set to false 
    setTimeout(delayEnemyTurn, 2000);
}

let currentSoulConstrictDmg;
// 'soul compress' SP damage - damages SP of enemy
// learned after 1st battle: 'soul constrict' SP damage2D - damages SP of enemy in the second dimension
let soulConstrict = function() {
    //does soul constriction damage
    soulCompressSFX.play();
    promptBoxText.innerText = "You used Soul Constrict";
    promptBoxTwoText.innerText = "You used Soul Constrict";
    if (currentEnemy.name == "LINE") {
        //do nothing
        promptBoxText.innerText = "Soul Constrict has no effect";
    } 
    setTimeout(showPromptBox, 700);
    currentSoulConstrictDmg = 26 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    // test:
    // currentSoulConstrictDmg = 100;
    currentEnemy.SP2 -= currentSoulConstrictDmg;
    if (currentEnemy.SP2 < 0) {
        currentEnemy.SP2 = 0;
    }
    hero.grit -= 15 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    if (hero.grit < 0) {
        hero.grit = 0;
    }
    if (currentEnemy.name == "LINE") {
        //do nothing
    } else {
        soulConstrictAnimation();
    }
    // move turnCounter false to animation
    // should have turnCounter set to false 
    setTimeout(delayEnemyTurn, 2000);
}





// learned after 2nd battle: 'soul reduce' SP damage3D - damages SP of enemy in the second dimension






// enemy moves
let stab = function () {
    // should have turnCounter set to true
    stabSFX.play();
    turnCounter = true;
    stabAnimation();
    promptBoxText.innerText = "Line used Stab";
    promptBoxTwoText.innerText = "Triangle used Flatten";
    currentEnemy.grit -= 20 + (Math.floor(Math.random() * 3) * (Math.round(Math.random()) * 2 - 1));
    hero.HP = hero.HP - (10 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1)) + currentEnemy.buff);
    showPromptBoxEnemy();
    if (buffCounter === true) {
        buffCounter = false;
        currentEnemy.buff = 0;
        let brandishRemoval = function() {
            document.querySelector(".brandish").style.display = "none";
            document.getElementsByClassName("brandish")[1].style.display = "none";
        }
        setTimeout(brandishRemoval, 1000)
    }
    hero.defBlock = false;
    document.querySelector(".defBlock").style.display = "none";
    document.getElementsByClassName("defBlock")[1].style.display = "none";
}

let brandish = function() {
    brandishSFX.play();
    // should have turnCounter set to true
    turnCounter = true;
    promptBoxText.innerText = "Line used Brandish - its strength will increase for its next attack";
    promptBoxTwoText.innerText = "Triangle used Triangulate - its strength will increase for its next attack";
    showPromptBoxEnemy();
    buffCounter = true;
    currentEnemy.grit -= 15 + (Math.floor(Math.random() * 3) * (Math.round(Math.random()) * 2 - 1));
    currentEnemy.buff = 16 + (Math.floor(Math.random() * 5) * (Math.round(Math.random()) * 2 - 1));
    document.querySelector(".brandish").style.display = "block";
    document.getElementsByClassName("brandish")[1].style.display = "block";
}

//enemyOne move select function
let enemyOneMoveSelect = function() {
    if (currentEnemy.grit <= 0) {
        restSFX.play();
        turnCounter = true;
        promptBoxText.innerText = "Line is forced to rest due to low Grit";
        promptBoxTwoText.innerText = "Triangle is forced to rest due to low Grit";
        showPromptBoxEnemy();
        currentEnemy.grit = 40;
    } else {
        let x = Math.floor(Math.random() * 10);
        if (x >= 3) {
            stab();
        } else {
            brandish();
        }
    }
}