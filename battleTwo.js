//functions tied to BATTLE TWOOOOOOOOOO ---------------------------------------------------------------------------------

let battleTwoLoad = function() {
    document.querySelector(".enemySP2").style.display = "block";
    showPromptBoxStart();
    let showSecondBattleScreen = function() {
        document.querySelector(".secondBattleScreen").style.display = "flex";
    }
    setTimeout(showSecondBattleScreen, 200);
}

let battleLoopTwoLongTerm = function() {
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
    //     //used for testing
    //     // console.log("soul Attacks Enable about to run")
    //     soulAttacksEnable();
    // }
    if (currentEnemy.HP <= (currentEnemy.maxHP/2)) {
        // console.log("soul Attacks Enable about to run from Battle Loop Two Long Term")
        setTimeout(soulAttacksEnable, 2000);
    }
}

let battleLoopTwo = function() {
    // console.log("battleLoopTwo running")
    //battle loop adjusts the location of the hero & shadow image divs plus the same for the enemy
        //for positioning image divs on the screen
    heroTwoImg.style.bottom = hero.position.bottom + "px";
    heroTwoShadow.style.bottom = hero.position.shadBottom + "px";
    heroTwoImg.style.left = hero.position.left + "px";
    heroTwoShadow.style.left = hero.position.shadLeft + "px";
    //hero is good ^^^^^
    enemyTwoImg.style.bottom = currentEnemy.position.bottom + "px";
    enemyTwoShadow.style.bottom = currentEnemy.position.shadBottom + "px";
    enemyTwoImg.style.left = currentEnemy.position.left + "px";
    enemyTwoShadow.style.left = currentEnemy.position.shadLeft + "px";
    enemyTwoImg.style.borderLeft = currentEnemy.position.bordLeft + "px solid transparent";
    enemyTwoImg.style.borderRight = currentEnemy.position.bordRight + "px solid transparent";
    enemyTwoImg.style.borderBottom = currentEnemy.position.bordBottom + "px solid white";
    enemyTwoShadow.style.borderBottom = enemyTwo.position.shadBordBottom + "px solid rgb(36, 34, 34)";
    enemyTwoShadow.style.borderRight = enemyTwo.position.shadBordRight + "px solid transparent";
    enemyTwoShadow.style.borderLeft = enemyTwo.position.shadBordLeft + "px solid transparent";
    heroStaticHandler();
    // when dead, the setInterval stops and then runs level up function
    if (currentEnemy.HP <= 0) {
        enemyTwo.alive = false;
        clearTimeout(enemyMoveDelay);
        clearInterval(battleTwo);
        clearInterval(battleTwoLongTerm);
        if (infiniteMode) {
            setTimeout(infiniteModeRun, 4000);
        } else {
            // need to revent show prompt box function
            setTimeout(levelUpKill, 4000);
        }
    } else if (hero.HP <= 0) {
        //kill hero function -----------------------------------------------------------------------------------------
        clearTimeout(enemyMoveDelay);
        clearInterval(battleTwo);
        clearInterval(battleTwoLongTerm);
        setTimeout(lose, 4000);
    } else if (currentEnemy.SP <= 0 && currentEnemy.SP2 <= 0) {
        enemyTwo.alive = false;
        clearTimeout(enemyMoveDelay);
        clearInterval(battleTwo);
        clearInterval(battleTwoLongTerm);
        if (infiniteMode) {
            setTimeout(infiniteModeRun, 4000);
        } else {
            setTimeout(levelUpSP, 4000);
        }
    } else {
        // console.log(enemyTwo);
        document.querySelector(".enemyTwoHP").innerText = `HP: ${currentEnemy.HP}`
        document.querySelector(".enemyTwoSP").innerText = `SP: ${currentEnemy.SP}`
        document.querySelector(".enemyTwoSP2").innerText = `SP2: ${currentEnemy.SP2}`
        if (currentEnemy.grit <=0) {
            currentEnemy.grit = 0;
        }
        document.querySelector(".enemyTwoGrit").innerText = `GRIT: ${currentEnemy.grit}`
        document.querySelector(".enemyTwoName").innerText = `${currentEnemy.name}`
        // code for SP2 and SP3
        // document.querySelector(".enemySP2").innerText = `SP: ${enemy.sp2}`
        // document.querySelector(".enemySP3").innerText = `SP: ${enemy.sp3}`
        document.getElementsByClassName("heroHP")[1].innerText = `HP: ${hero.HP}`
        document.getElementsByClassName("heroSP")[1].innerText = `SP: ${hero.SP}`
        document.getElementsByClassName("heroGrit")[1].innerText = `GRIT: ${hero.grit}`
        document.getElementsByClassName("heroName")[1].innerText = `${hero.name}`
        document.getElementsByClassName("heroLevel")[1].innerText = `LVL: ${hero.level}`
    }
    turnController();
}





// calls the BattleLoop functions
let secondBattleStart = function() {
    document.querySelector(".brandish").style.display = "none";
    document.getElementsByClassName("brandish")[1].style.display = "none";
    //hide all divs through hide divs function
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
    // initialize hero Obj
    hero.position.shadBottom = hero.position.shadBottomOrig;
    hero.position.shadLeft = hero.position.shadLeftOrig;
    // initialize enemyTwo Obj for when you beat the game and play again
    // enemyTwo.position.height = enemyTwo.position.heightOrig;
    enemyTwo.position.shadHeight = enemyTwo.position.shadHeightOrig;
    enemyTwo.position.shadBottom = enemyTwo.position.shadBottomOrig;
    enemyTwo.position.shadLeft = enemyTwo.position.shadLeftOrig;
    //may need to add different initializations for shadows -------------------------------------------------------------------------
    enemyTwo.position.bordBottom = enemyTwo.position.bordBottomOrig;
    enemyTwo.position.bordRight = enemyTwo.position.bordRightOrig;
    enemyTwo.position.bordLeft = enemyTwo.position.bordLeftOrig;
    enemyTwo.position.left = enemyTwo.position.leftOrig;
    enemyTwo.position.bottom = enemyTwo.position.bottomOrig;
    enemyTwo.SP = enemyTwo.maxSP;
    enemyTwo.SP2 = enemyTwo.maxSP2;
    enemyTwo.HP = enemyTwo.maxHP;
    if (!enemyOne.alive) {
        enemyTwoCreation();
    }
    battleMusic.play();
    // battleCounter = 0;
    // create enemyTwo
    // enemyTwoCreation();
    // each battle will have a different currentEnemy:
    currentEnemy = enemyTwo;
    //initialize battle to have Soul attacks hidden
    soulAttacksDisable();
    setTimeout(soulAttacksDisable, 500);
    setTimeout(soulAttacksDisable, 1000);
    setTimeout(soulAttacksDisable, 1500);
    setTimeout(soulAttacksDisable, 2000);
    //initialize battle to start with hero's turn
    turnCounter = true;
    defenseReady = false;
    hero.HP = hero.maxHP;
    hero.SP = hero.maxSP;
    hero.grit = hero.maxGrit;
    hero.defBlock = false;
    hero.buff = 0;
    // will need progress openingstory remove event listeners
    gameplayArea.removeEventListener("click", secondBattleStart);
    //adds soulCompress class to action2Span DIV so that it will show hover text to tell player the action is unavailable
    document.querySelector(".action2Span").classList.add("soulRestricted");
    if (hero.level >= 2) {
        document.querySelector(".action5Span").classList.add("soulRestricted");
    }
    // increments battleCounter by one
    battleCounter++;
    //call the static animation functions
    //show divs for this particular scene
    promptBoxTwoText.innerText = "You picked a fight with Triangle."
    setTimeout(battleTwoLoad, 100);
    // if level of hero is == 1, then hide three moves
    // if level of hero is == 2, then hide last move
    // start battle one loop by calling function globally defined
    // battleloop function during battle that detects if enemy is no longer alive
    attackActivate();
    heroStaticReady = true;
    battleTwo = setInterval(battleLoopTwo, 60);
    // let battleOne = setTimeout(battleLoopOne, 60);
    battleTwoLongTerm = setInterval(battleLoopTwoLongTerm, 3000);
    // let battleOneLongTerm = setTimeout(battleLoopOneLongTerm, 300);
}