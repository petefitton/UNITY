
//functions tied to BATTLE TWOOOOOOOOOO ---------------------------------------------------------------------------------

let battleTwoLoad = function() {
    document.querySelector(".enemySP2").style.display = "block";
    showPromptBoxStart();
    let showSecondBattleScreen = function() {
        document.querySelector(".secondBattleScreen").style.display = "flex";
    }
    setTimeout(showSecondBattleScreen, 200);
}

let battleLoopTwo = function() {
    // console.log("battleLoopOne running")
    heroImg.style.bottom = hero.position.bottom + "px";
    heroShadow.style.bottom = hero.position.shadBottom + "px";
    heroImg.style.left = hero.position.left + "px";
    heroShadow.style.left = hero.position.shadLeft + "px";
    enemyTwoImg.style.bottom = currentEnemy.position.bottom + "px";
    enemyTwoShadow.style.bottom = currentEnemy.position.shadBottom + "px";
    enemyTwoImg.style.left = currentEnemy.position.left + "px";
    enemyTwoShadow.style.left = currentEnemy.position.shadLeft + "px";
    enemyTwoImg.style.borderLeft = currentEnemy.position.bordLeft + "px solid transparent";
    enemyTwoImg.style.borderRight = currentEnemy.position.bordRight + "px solid transparent";
    enemyTwoImg.style.borderBottom = currentEnemy.position.bordBottom + "px solid white";
    heroStaticHandler();
    // when dead, the setInterval stops and then runs level up function
    if (enemyTwo.HP <= 0) {
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
        document.querySelector(".enemyHP").innerText = `HP: ${currentEnemy.HP}`
        document.querySelector(".enemySP").innerText = `SP: ${currentEnemy.SP}`
        document.querySelector(".enemySP2").innerText = `SP: ${currentEnemy.SP2}`
        document.querySelector(".enemyGrit").innerText = `GRIT: ${currentEnemy.grit}`
        document.querySelector(".enemyName").innerText = `${currentEnemy.name}`
        // code for SP2 and SP3
        // document.querySelector(".enemySP2").innerText = `SP: ${enemy.sp2}`
        // document.querySelector(".enemySP3").innerText = `SP: ${enemy.sp3}`
        document.querySelector(".heroHP").innerText = `HP: ${hero.HP}`
        document.querySelector(".heroSP").innerText = `SP: ${hero.SP}`
        document.querySelector(".heroGrit").innerText = `GRIT: ${hero.grit}`
        document.querySelector(".heroName").innerText = `${hero.name}`
    }
    turnController();
}





// calls the BattleLoop functions
let secondBattleStart = function() {
    // initialize enemyTwo for when you beat the game and play again
    // enemyTwo.position.height = enemyTwo.position.heightOrig;
    enemyTwo.position.shadHeight = enemyTwo.position.shadHeightOrig;
    enemyTwo.position.shadBottom = enemyTwo.position.shadBottomOrig;
    enemyTwo.position.shadLeft = enemyTwo.position.shadLeftOrig;
    enemyTwo.position.bordBottom = enemyTwo.position.bordBottomOrig;
    enemyTwo.position.bordRight = enemyTwo.position.bordRightOrig;
    enemyTwo.position.bordLeft = enemyTwo.position.bordLeftOrig;
    enemyTwo.SP = enemyTwo.maxSP;
    enemyTwo.SP2 = enemyTwo.maxSP2;
    //stop opening story audio
    openingStoryMusic.pause();
    //start battle audio
    battleMusic.play();
    battleCounter = 0;
    // create enemyTwo
    // enemyTwoCreation();
    // each battle will have a different currentEnemy:
    currentEnemy = enemyTwo;
    enemyTwoImg.style.height = currentEnemy.position.height + "px";
    enemyTwoShadow.style.height = currentEnemy.position.shadHeight + "px";
    enemyTwoShadow.style.bottom = currentEnemy.position.shadBottom + "px";
    enemyTwoShadow.style.left = currentEnemy.position.shadLeft + "px";
    //initialize battle to have Soul attacks hidden
    soulAttacksDisable();
    //initialize battle to start with hero's turn
    hero.position.bottom = hero.position.bottomOrig
    hero.position.left = hero.position.leftOrig
    hero.position.shadBottom = hero.position.shadBottomOrig
    hero.position.shadLeft = hero.position.shadLeftOrig
    heroImg.style.bottom = hero.position.bottom + "px";
    heroImg.style.left = hero.position.left + "px";
    heroShadow.style.bottom = hero.position.shadBottom + "px";
    heroShadow.style.left = hero.position.shadLeft + "px";
    enemyTwoImg.style.bottom = currentEnemy.position.bottom + "px";
    enemyTwoImg.style.left = currentEnemy.position.left + "px";
    turnCounter = true;
    hero.level = 1;
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
    promptBoxText.innerText = "You picked a fight with Triangle."
    setTimeout(battleTwoLoad, 200);
    // if level of hero is == 1, then hide three moves
    // if level of hero is == 2, then hide last move
    // start battle one loop by calling function globally defined
    // battleloop function during battle that detects if enemy is no longer alive
    attackActivate();
    heroStaticReady = true;
    battleTwo = setInterval(battleLoopTwo, 60);
    // let battleOne = setTimeout(battleLoopOne, 60);
    let battleOneLongTerm = setInterval(battleLoopOneLongTerm, 3000);
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

