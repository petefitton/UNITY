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

    if (true) {
        //used for testing
        // console.log("soul Attacks Enable about to run")
        soulAttacksEnable();
    }
    //commented out for testing
    // if (currentEnemy.HP <= (currentEnemy.maxHP/2)) {
    //     // console.log("soul Attacks Enable about to run")
    //     setTimeout(soulAttacksEnable, 3000);
    // }
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
        clearTimeout(enemyMoveDelay);
        clearInterval(battleTwo);
        clearInterval(battleTwoLongTerm);
        // need to revent show prompt box function
        setTimeout(levelUpKill, 1000);
    } else if (hero.HP <= 0) {
        //kill hero function -----------------------------------------------------------------------------------------
        clearTimeout(enemyMoveDelay);
        clearInterval(battleTwo);
        clearInterval(battleTwoLongTerm);
        setTimeout(lose, 1000);
    } else if (currentEnemy.SP <= 0 && currentEnemy.SP2 <= 0) {
        clearTimeout(enemyMoveDelay);
        clearInterval(battleTwo);
        clearInterval(battleTwoLongTerm);
        setTimeout(levelUpSP, 1000);
    } else {
        // console.log(enemyTwo);
        document.querySelector(".enemyTwoHP").innerText = `HP: ${currentEnemy.HP}`
        document.querySelector(".enemyTwoSP").innerText = `SP: ${currentEnemy.SP}`
        document.querySelector(".enemyTwoSP2").innerText = `SP: ${currentEnemy.SP2}`
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
    }
    turnController();
}





// calls the BattleLoop functions
let secondBattleStart = function() {
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
    //stop opening story audio
    openingStoryMusic.pause();
    //start battle audio
    battleMusic.play();
    // battleCounter = 0;
    // create enemyTwo
    // enemyTwoCreation();
    // each battle will have a different currentEnemy:
    currentEnemy = enemyTwo;
                // enemyTwoImg.style.height = currentEnemy.position.height + "px";
                // enemyTwoShadow.style.height = currentEnemy.position.shadHeight + "px";
                // enemyTwoShadow.style.bottom = currentEnemy.position.shadBottom + "px";
                // enemyTwoShadow.style.left = currentEnemy.position.shadLeft + "px";
    //initialize battle to have Soul attacks hidden
    soulAttacksDisable();
    //initialize battle to start with hero's turn
    //may be able to delete this big block of code:
                                                            // hero.position.bottom = hero.position.bottomOrig
                                                            // hero.position.left = hero.position.leftOrig
                                                            // hero.position.shadBottom = hero.position.shadBottomOrig
                                                            // hero.position.shadLeft = hero.position.shadLeftOrig
                                                            // heroImg.style.bottom = hero.position.bottom + "px";
                                                            // heroImg.style.left = hero.position.left + "px";
                                                            // heroShadow.style.bottom = hero.position.shadBottom + "px";
                                                            // heroShadow.style.left = hero.position.shadLeft + "px";
                                                            // enemyTwoImg.style.bottom = currentEnemy.position.bottom + "px";
                                                            // enemyTwoImg.style.left = currentEnemy.position.left + "px";
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
    //hide all divs through hide divs function
    setTimeout(hideAll, 198);
    // increments battleCounter by one
    battleCounter++;
    //call the static animation functions
    //show divs for this particular scene
    promptBoxTwoText.innerText = "You picked a fight with Triangle."
    setTimeout(battleTwoLoad, 200);
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








// let secondBattleStart = function() {
//     //second battle stats for hero should default [HP should be set to maxHP for example]
// }
//for second function it would be nice if the promptBoxClick p tag just disappeared, so maybe create new versions
//of the prompt box handlers for second battle
// function for showing all divs for 2nd battle screen/scene
    // increments battleCounter by one
    // 2nd battle should not create a new protagonist but should carry over the old one
    // how do I want to handle HP from 1st to 2nd battle? automatic full HP?
    // should also call the create Crawler function to create the enemy with name enemy2
    // 2nd battle should have the new move from levelling up - 'block'
    // if level of hero is == 2, then show new two moves
    // if level of hero is == 3, then show all five moves
    // start gameloop function
// function for showing all divs for 3rd battle screen/scene
    // increments battleCounter by one
    // should also call the create Crawler function to create the enemy with name enemy3
    // if level of hero is == 2, then show new two moves
    // if level of hero is == 3, then show all five moves
    // start gameloop function

