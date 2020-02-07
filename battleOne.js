// functions for Prompt Box

let hidePromptBox = function() {
    gameplayArea.removeEventListener("click", hidePromptBox);
    // console.log("hidePromptBox function running which sets innerText of promptBoxText to an empty string")
    promptBox.style.display = "none";
    promptBoxText.innerText = "";
    promptBoxTwo.style.display = "none";
    promptBoxTwoText.innerText = "";
}

let hidePromptBoxPlusActivate = function() {
    gameplayArea.removeEventListener("click", hidePromptBoxPlusActivate);
    // console.log("hidePromptBoxPlusActivation function running")
    hidePromptBox();
    attackActivate();
}

let emptyPromptBoxAndDefenseReady = function() {
    gameplayArea.removeEventListener("click", emptyPromptBoxAndDefenseReady);
    // console.log("empty prompt box function running - means defense Ready is set to true now & innerText of promptBoxText is an empty string")
    promptBoxText.innerText = "";
    promptBoxClick.style.display = "none";
    promptBoxTwoText.innerText = "";
    promptBoxTwoClick.style.display = "none";
    let defenseReadyTrue = function() {
        defenseReady = true;
    }
    setTimeout(defenseReadyTrue, 500);
}

let showPromptBox = function() {
    // console.log("show prompt box function running")
    promptBoxClick.style.display = "block";
    promptBox.style.display = "block";
    promptBoxTwoClick.style.display = "block";
    promptBoxTwo.style.display = "block";
    // let delayedFunction = function() {
    //     console.log("delayed Function running")
    let promptBoxDelay = function() {
        gameplayArea.addEventListener("click", emptyPromptBoxAndDefenseReady);
    }
    setTimeout(promptBoxDelay, 700)
    // setTimeout(delayedFunction, 300);
}

let showPromptBoxStart = function() {
    // let delayedFunction2 = function() {
    //     console.log("delayed Function2 running")
    // }
    // setTimeout(delayedFunction2, 300);
    promptBoxClick.style.display = "block";
    promptBox.style.display = "block";
    promptBoxTwoClick.style.display = "block";
    promptBoxTwo.style.display = "block";
    gameplayArea.addEventListener("click", hidePromptBox);
}

let showPromptBoxEnemy = function() {
    // console.log("showPromptBoxEnemy function running")
    promptBoxClick.style.display = "block";
    promptBox.style.display = "block";
    promptBoxTwoClick.style.display = "block";
    promptBoxTwo.style.display = "block";
    gameplayArea.addEventListener("click", hidePromptBoxPlusActivate);
}


// function for showing all divs for 1st battle screen

//functions tied to BATTLE ONE ---------------------------------------------------------------------------------
let heroStaticHandler = function() {
    if (heroStaticReady && !heroMoveReady) {
        // console.log("about to start running hero static random")
        heroStaticReady = false;
        heroStaticRandom();
    }
}

let heroAnimationsClear = function() {
    hero.position.bottom = hero.position.bottomOrig;
    hero.position.shadBottom = hero.position.shadBottomOrig;
    hero.position.left = hero.position.leftOrig;
    hero.position.shadLeft = hero.position.shadLeftOrig;
    clearTimeout(heroAnimationIntervalUp);
    clearTimeout(heroAnimationIntervalDown);
    clearTimeout(heroAnimationIntervalLeft);
    clearTimeout(heroAnimationIntervalRight);
    clearTimeout(bashAnimationRepeat);
    clearTimeout(bashAnimation);
    clearTimeout(heroCharge);
    clearTimeout(heroSecondWindBack);
    clearTimeout(heroSecondBash);
    clearTimeout(heroBashResetInterval);
    // clearTimeout(heroMoveReadyDelay);
    clearTimeout(heroBashStartChain);
}

let battleLoopOneLongTerm = function() {
    // console.log("longer battle lop running that checks to enable soul attacks")
    if (hero.position.bottom >= hero.position.bottomOrig + 15) {
        heroAnimationsClear();
    }
    
    if (hero.position.bottom <= hero.position.bottomOrig - 15) {
        heroAnimationsClear();
    }
    
    if (hero.position.left >= hero.position.leftOrig + 15) {
        heroAnimationsClear();
    }
    
    if (hero.position.left <= hero.position.leftOrig - 15) {
        heroAnimationsClear();
    }
    // if (true) {
    //     // used for testing
    //     // console.log("soul Attacks Enable about to run")
    //     // soulAttacksEnable();
    // }
    if (currentEnemy.HP <= (currentEnemy.maxHP/2)) {
        // console.log("soul Attacks Enable about to run")
        setTimeout(soulAttacksEnable, 2000);
    }
}

let battleLoad = function() {
    showPromptBoxStart();
    let showFirstBattleScreen = function() {
        document.querySelector(".firstBattleScreen").style.display = "flex";
    }
    setTimeout(showFirstBattleScreen, 200);
}

let heroStaticRandom = function() {
    // if one of the four static animations is running, do not run!
    // randomly select one of the four animations below
    // let x = Math.floor(Math.random() * 4)
    switch(Math.floor(Math.random() * 4)) {
        case 0:
            // console.log("setting timeout to start UP")
            setTimeout(heroStaticAnimateUp, 150 + Math.floor(Math.random() * 250));
            break;
        case 1:
            // console.log("setting timeout to start DOWN")
            setTimeout(heroStaticAnimateDown, 150 + Math.floor(Math.random() * 250));
            break;
        case 2:
            // console.log("setting timeout to start LEFT")
            setTimeout(heroStaticAnimateLeft, 150 + Math.floor(Math.random() * 250));
            break;
        case 3:
            // console.log("setting timeout to start RIGHT")
            setTimeout(heroStaticAnimateRight, 150 + Math.floor(Math.random() * 250));
            break;
    }

}

let turnController = function() {
    //I may not need the if true here, so I have marked out everything for now
    if (turnCounter === true) {
                //hero's turn
                // add event listeners for all action buttons
        // document.querySelector(".action1").addEventListener('click', bash);
        // document.querySelector(".action2").addEventListener('click', soulCompress);
        // document.querySelector(".action3").addEventListener('click', rest);
                // DOM query other moves as I build it out more
    } else if (turnCounter === false) {
        if (defenseReady === true) {
            // console.log("it is the enemy's turn and you are ready to defend function running")
            defenseReady = false;
            enemyMoveDelay = setTimeout(enemyOneMoveSelect, 300);
        }
    }
}

let battleLoopOne = function() {
    // console.log("battleLoopOne running")
    //battle loop adjusts the location of the hero & shadow image divs plus the same for the enemy
        //for positioning image divs on the screen
    //some things listed here are not changing but still being rendered; refactoring might be able to put them in the one run function instead
    heroImg.style.bottom = hero.position.bottom + "px";
    heroShadow.style.bottom = hero.position.shadBottom + "px";
    heroImg.style.left = hero.position.left + "px";
    heroShadow.style.left = hero.position.shadLeft + "px";
    enemyImg.style.bottom = currentEnemy.position.bottom + "px";
    enemyShadow.style.bottom = currentEnemy.position.shadBottom + "px";
    enemyImg.style.left = currentEnemy.position.left + "px";
    enemyShadow.style.left = currentEnemy.position.shadLeft + "px";
    enemyImg.style.height = currentEnemy.position.height + "px";
    enemyShadow.style.height = currentEnemy.position.shadHeight + "px";
    heroStaticHandler();
    // when dead, the setInterval stops and then runs level up function
    if (enemyOne.HP <= 0) {
        enemyOne.alive = false;
        heroStaticReady = false;
        clearTimeout(enemyMoveDelay);
        clearInterval(battleOne);
        clearInterval(battleOneLongTerm);
        if (infiniteMode) {
            setTimeout(infiniteModeRun, 4000);
        } else {
            // need to revent show prompt box function
            setTimeout(levelUpKill, 4000);
        }
    } else if (hero.HP <= 0) {
        heroStaticReady = false;
        //kill hero function -----------------------------------------------------------------------------------------
        clearTimeout(enemyMoveDelay);
        clearInterval(battleOne);
        clearInterval(battleOneLongTerm);
        setTimeout(lose, 4000);
    } else if (currentEnemy.SP <= 0) {
        enemyOne.alive = false;
        heroStaticReady = false;
        clearTimeout(enemyMoveDelay);
        clearInterval(battleOne);
        clearInterval(battleOneLongTerm);
        if (infiniteMode) {
            setTimeout(infiniteModeRun, 4000);
        } else {
            setTimeout(levelUpSP, 4000);
        }
    } else {
        // console.log(enemyOne);
        document.querySelector(".enemyHP").innerText = `HP: ${currentEnemy.HP}`
        document.querySelector(".enemySP").innerText = `SP: ${currentEnemy.SP}`
        document.querySelector(".enemyGrit").innerText = `GRIT: ${currentEnemy.grit}`
        document.querySelector(".enemyName").innerText = `${currentEnemy.name}`
        // code for SP2 and SP3
        // document.querySelector(".enemySP2").innerText = `SP: ${enemy.sp2}`
        // document.querySelector(".enemySP3").innerText = `SP: ${enemy.sp3}`
        document.querySelector(".heroHP").innerText = `HP: ${hero.HP}`
        document.querySelector(".heroSP").innerText = `SP: ${hero.SP}`
        document.querySelector(".heroGrit").innerText = `GRIT: ${hero.grit}`
        document.querySelector(".heroName").innerText = `${hero.name}`
        document.querySelector(".heroLevel").innerText = `LVL: ${hero.level}`
    }
    turnController();
}

// calls the BattleLoop functions
let firstBattleStart = function() {
    //hide all divs through hide divs function
    document.querySelector(".brandish").style.display = "none";
    document.getElementsByClassName("brandish")[1].style.display = "none";
    hideAll();
    gameplayArea.removeEventListener("click", emptyPromptBoxAndDefenseReady);
    gameplayArea.removeEventListener("click", hidePromptBox);
    gameplayArea.removeEventListener("click", hidePromptBoxPlusActivate);
    promptBox.style.display = "none";
    promptBoxText.innerText = "";
    promptBoxTwo.style.display = "none";
    promptBoxTwoText.innerText = "";
    //stop opening story audio
    openingStoryMusic.pause();
    //start battle audio
    audioIntro.pause();
    battleMusic.pause();
    battleMusic.currentTime = 0;
    // initialize enemyOne Obj for when you beat the game and play again
    enemyOne.position.height = enemyOne.position.heightOrig;
    enemyOne.position.shadHeight = enemyOne.position.shadHeightOrig;
    enemyOne.position.shadBottom = enemyOne.position.shadBottomOrig;
    enemyOne.position.shadLeft = enemyOne.position.shadLeftOrig;
    enemyOne.SP = enemyOne.maxSP;
    enemyOne.HP = enemyOne.maxHP;
    if (!enemyOne.alive) {
        enemyOneCreation();
    }
    battleMusic.play();
    battleCounter = 0;
    // create enemyOne
    // enemyOneCreation();
    // each battle will have a different currentEnemy:
    currentEnemy = enemyOne;
    // enemyShadow.style.bottom = currentEnemy.position.shadBottom + "px";
    // enemyShadow.style.left = currentEnemy.position.shadLeft + "px";
    //initialize battle to have Soul attacks hidden
    soulAttacksDisable();
    setTimeout(soulAttacksDisable, 500);
    setTimeout(soulAttacksDisable, 1000);
    setTimeout(soulAttacksDisable, 1500);
    setTimeout(soulAttacksDisable, 2000);
    //initialize battle to start with hero's turn
    // heroImg.style.bottom = hero.position.bottom + "px";
    // heroImg.style.left = hero.position.left + "px";
    // enemyImg.style.bottom = currentEnemy.position.bottom + "px";
    // enemyImg.style.left = currentEnemy.position.left + "px";
    turnCounter = true;
    defenseReady = false;
    if (!infiniteMode) {
        hero.level = 1;
    }
    hero.HP = hero.maxHP;
    hero.SP = hero.maxSP;
    hero.grit = hero.maxGrit;
    hero.defBlock = false;
    hero.buff = 0;
    // will need progress openingstory remove event listeners
    gameplayArea.removeEventListener("click", firstBattleStart);
    //adds soulCompress class to action2Span DIV so that it will show hover text to tell player the action is unavailable
    document.querySelector(".action2Span").classList.add("soulRestricted");
    // increments battleCounter by one
    battleCounter++;
    //call the static animation functions
    //show divs for this particular scene
    promptBoxText.innerText = "You picked a fight with Line."
    setTimeout(battleLoad, 100);
    // if level of hero is == 1, then hide three moves
    // if level of hero is == 2, then hide last move
    // start battle one loop by calling function globally defined
    // battleloop function during battle that detects if enemy is no longer alive
    attackActivate();
    heroStaticReady = true;
    battleOne = setInterval(battleLoopOne, 60);
    // let battleOne = setTimeout(battleLoopOne, 60);
    let battleOneLongTerm = setInterval(battleLoopOneLongTerm, 3000);
    // let battleOneLongTerm = setTimeout(battleLoopOneLongTerm, 300);
}



