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
    document.querySelector(".action1").addEventListener("click", bash);
    document.querySelector(".action1").style.cursor = "pointer";
    // soul compress should default to being off until enemy is at 50% HP
    // document.querySelector(".action2").addEventListener('click', soulCompress);
    document.querySelector(".action3").addEventListener("click", rest);
    document.querySelector(".action3").style.cursor = "pointer";
}

let attackDeactivate = function() {
    document.querySelector(".action1").removeEventListener("click", bash);
    document.querySelector(".action1").style.cursor = "initial";
    document.querySelector(".action2").removeEventListener("click", soulCompress);
    document.querySelector(".action2").style.cursor = "initial";
    document.querySelector(".action3").removeEventListener("click", rest);
    document.querySelector(".action3").style.cursor = "initial";

    // add them for other actions if I get that far
}

let soulAttacksEnable = function() {
    document.querySelector(".action2").addEventListener("click", soulCompress);
    document.querySelector(".action2").style.color = "rgb(172, 169, 169)";
    document.querySelector(".action2").style.cursor = "pointer";
    document.querySelector(".action2Span").classList.remove("soulRestricted");
}

let soulAttacksDisable = function() {
    document.querySelector(".action2").removeEventListener("click", soulCompress);
    document.querySelector(".action2").style.color = "rgb(38, 34, 34)";
    document.querySelector(".action2").style.cursor = "initial";
    document.querySelector(".action2Span").classList.add("soulRestricted");
}


// individual functions for each attack/action
    // should turn off static animation functions -----> staticAnimOff()
    // should call battle action functions
    // should resume static animation again unless dead
    // when static animations are turned off - I will need to make sure that the default images for the characters is called

// bash - damages HP of enemy
let bash = function() {
    console.log("bash function running")
    attackDeactivate();
    promptBoxText.innerText = "You used Bash";
    bashAnimation();
    // a lot of the code tied to this attack is located in the animation function which is in app4.js
    // want effects of attack to wait until after the animation, but that will come in a bit
    hero.grit -= 10 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    // placing showPromptBox in the animation function
    // setTimeout(showPromptBox, 3500);
}

let currentSoulCompressDmg;
// 'soul compress' SP damage - damages SP of enemy
let soulCompress = function() {
    soulCompressSFX.play();
    attackDeactivate();
    promptBoxText.innerText = "You used Soul Compress";
    // showPromptBox move to animation
    setTimeout(showPromptBox, 700);
    currentSoulCompressDmg = 26 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    currentEnemy.SP -= currentSoulCompressDmg;
    hero.grit -= 15 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    soulCompressAnimation();
    // move turnCounter false to animation
    // should have turnCounter set to false 
    turnCounter = false;
}

// rest
let rest = function() {
    restSFX.play();
    attackDeactivate();
    promptBoxText.innerText = "You used Rest";
    setTimeout(showPromptBox, 700);
    hero.HP += 26 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    hero.grit += 25 + (Math.floor(Math.random() * 3) * (Math.round(Math.random()) * 2 - 1));
    if (hero.HP > hero.maxHP) {
        hero.HP = hero.maxHP;
    }
    if (hero.grit > hero.maxGrit) {
        hero.grit = hero.maxGrit
    }
    // should have turnCounter set to false 
    turnCounter = false;
}

// learned after 1st battle: block - reduces HP damage from enemy on that turn
let defBlock = function() {
    attackDeactivate();
    promptBoxText.innerText = "You used Block";
    showPromptBox();
    hero.grit -= 20 (Math.floor(Math.random() * 3) * (Math.round(Math.random()) * 2 - 1));
    //hero should use grit to block
    hero.defBlock = true;
    // would need to create a loop like gameloop that would monitor once the block should be ended
    // need to make sure the block function is not called inside of itself or anything weird like that
    // by making sure it turns off before it can be used on the next round
    // should have turnCounter set to false 
    turnCounter = false;
}

// learned after 1st battle: 'soul constrict' SP damage2D - damages SP of enemy in the second dimension

// learned after 2nd battle: 'soul reduce' SP damage3D - damages SP of enemy in the second dimension


// enemy moves
let stab = function () {
    // should have turnCounter set to true
    stabSFX.play();
    turnCounter = true;
    promptBoxText.innerText = "Line used Stab";
    hero.HP = hero.HP - (10 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1)) + currentEnemy.buff);
    showPromptBoxEnemy();
    if (buffCounter === true) {
        buffCounter = false;
        currentEnemy.buff = 0;
        let brandishRemoval = function() {
            document.querySelector(".brandish").style.display = "none";
        }
        setTimeout(brandishRemoval, 1000)
    }

}

let brandish = function() {
    brandishSFX.play();
    // should have turnCounter set to true
    turnCounter = true;
    promptBoxText.innerText = "Line used Brandish - its strength will increase for its next attack";
    showPromptBoxEnemy();
    buffCounter = true;
    currentEnemy.buff = 16 + (Math.floor(Math.random() * 5) * (Math.round(Math.random()) * 2 - 1));
    document.querySelector(".brandish").style.display = "block";
}

//enemyOne move select function
let enemyOneMoveSelect = function() {
    let x = Math.floor(Math.random() * 10);
    if (x >= 3) {
        stab();
    } else {
        brandish();
    }
}

//triangle attack flatten() which is not very effective

