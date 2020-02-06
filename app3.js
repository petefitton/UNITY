// functions for moving between different screens--------------------------------------------------------------------------------------------


// function which hides all divs for going between each screen/scene
let hideAll = function() {
    //hides all main divs
    //titleScreen
    document.querySelector(".titleScreen").style.display = "none";
    //mainMenu
    mainMenu.style.display = "none";
    //optionsMenu
    document.querySelector(".optionsMenu").style.display = "none";
    //openingStory
    document.querySelector(".openingStory").style.display = "none";
    //firstBattleScreen
    document.querySelector(".firstBattleScreen").style.display = "none";
    //secondBattleScreen --------_STRETCH
    // document.querySelector(".secondBattleScreen").style.display = "none";
    //thirdBattleScreen --------_STRETCH
    // document.querySelector(".thirdBattleScreen").style.display = "none";
    //closingStory
    document.querySelector(".closingStory").style.display = "none";
    //creditsScreen
    document.querySelector(".creditsScreen").style.display = "none";
}


// function for showing all divs for title screen
let showTitleScreen = function() {
    hideAll();
    document.querySelector(".titleScreen").style.display = "block";
    // titleScreenProceed();
    gameplayArea.addEventListener("click", titleScreenFade);
    // the addEventListener for the click anywhere function on title screen  - should include clicks as well as touches on mobile
    // if fade is good, then I can delete the LINE directly below this one
    // setTimeout(titleScreenProceed, 600);
    // start playing audio --------------------------TODO
    gameplayArea.addEventListener("click", playIntroMusic);
    
    // should clear all divs function
    // removes the addeventlistener for click anywhere function
    // should run main menu screen start
}



// not sure why I originally broke this out, but I think I can remove it
// let titleScreenProceed = function() {
//     gameplayArea.addEventListener("click", titleScreenFade);
// }


let showMainMenu = function() {
    loseMusic.pause();
    audioIntro.play();
    gameplayArea.removeEventListener("click", titleScreenFade);
    document.querySelector(".musicMuteButton").removeEventListener("click", muteAllMusic);
    document.querySelector(".sfxMuteButton").removeEventListener("click", muteAllSFX);
    document.querySelector(".sfxPlayButton").removeEventListener("click", playIntroSFX);
    document.querySelector(".returnMainMenu").removeEventListener("click", showMainMenu);
    gameplayArea.removeEventListener("click", playIntroMusic);
    // should clear all divs
    hideAll();
    // function for showing all divs for main menu screen
    mainMenu.style.display = "block";
    // the addEventListener for the game start button  - should include clicks as well as touches on mobile
    document.querySelector(".playButton").addEventListener("click", startOpeningStory);
    // the addEventListener for the options button  - should include clicks as well as touches on mobile
    document.querySelector(".optionsButton").addEventListener("click", showOptions);
    // the addEventListener for the instructions button  - should include clicks as well as touches on mobile
    document.querySelector(".instructionsButton").addEventListener("click", showInstructions);
}

let showMainMenuTwo = function() {
    winMusic.pause();
    //return to Main Menu after winning game
    document.querySelector(".returnMainMenu").removeEventListener("click", showMainMenuTwo);
    if (infiniteMode) {
        infiniteMode = document.createElement("div");
        let infiniteModeContent = document.createTextNode("INFINITE MODE");
        infiniteMode.appendChild(infiniteModeContent);
        mainMenu.appendChild(infiniteMode);
        infiniteMode.style.textAlign = "center";
        infiniteMode.style.cursor = "pointer";
        infiniteMode.style.maxWidth = "120px";
        infiniteMode.style.margin = "4px auto";
        infiniteMode = false;
    }
    showMainMenu();
    infiniteMode.addEventListener("click", infiniteModeRun);
}

// function for showing all divs for options screen
let showOptions = function() {
    //this function shouldn't erase hide background as it should be seamless (should not run hide all divs)
    // should just hide necessary info from main menu screen
    mainMenu.style.display = "none";
    document.querySelector(".playButton").style.display = "none";
    document.querySelector(".optionsButton").style.display = "none";
    document.querySelector(".instructionsButton").style.display = "none";
    // and unhide necessary info for options screen
    document.querySelector(".optionsMenu").style.display = "block";
    document.querySelector(".musicMuteButton").addEventListener("click", muteAllMusic);
    document.querySelector(".sfxMuteButton").addEventListener("click", muteAllSFX);
    document.querySelector(".sfxPlayButton").addEventListener("click", playIntroSFX);

    // remove event listeners for start game and options buttons - should include clicks as well as touches on mobile
    // the removeEventListener for the play game button  - should include clicks as well as touches on mobile
    document.querySelector(".playButton").removeEventListener("click", startOpeningStory);
    // the removeEventListener for the options button  - should include clicks as well as touches on mobile
    document.querySelector(".optionsButton").removeEventListener("click", showOptions);
    // the removeEventListener for the instructions button  - should include clicks as well as touches on mobile
    document.querySelector(".instructionsButton").removeEventListener("click", showInstructions);

    document.querySelector(".returnButtonOptions").addEventListener("click", mainMenuReturn);
    // add event listener to return button - should include clicks as well as touches on mobile
        // when return button is clicked or touched, the event listener for return button should go away
        // should run function for showing all divs for main menu screen
}

let mainMenuReturn = function() {
    document.querySelector(".returnButtonOptions").removeEventListener("click", mainMenuReturn);
    document.querySelector(".returnButtonInstructions").removeEventListener("click", mainMenuReturn);
    document.querySelector(".instructionsButton").addEventListener("click", showInstructions);
    document.querySelector(".optionsButton").addEventListener("click", showOptions);
    document.querySelector(".playButton").addEventListener("click", startOpeningStory);
    document.querySelector(".musicMuteButton").removeEventListener("click", muteAllMusic);
    document.querySelector(".sfxMuteButton").removeEventListener("click", muteAllSFX);
    document.querySelector(".sfxPlayButton").removeEventListener("click", playIntroSFX);
    document.querySelector(".optionsMenu").style.display = "none";
    document.querySelector(".instructionsScreen").style.display = "none";
    document.querySelector(".instructionsScreenTwo").style.display = "none";
    mainMenu.style.display = "block";
    document.querySelector(".playButton").style.display = "block";
    document.querySelector(".optionsButton").style.display = "block";
    document.querySelector(".instructionsButton").style.display = "block";
// return button function should do opposite of the above
// make return button work for both options and instructions screen
    //this function shouldn't erase hide background as it should be seamless (should not run hide all divs)
    // should just hide necessary info from options screen
    // and unhide necessary info for main menu screen
    // remove event listener to return button - should include clicks as well as touches on mobile
    // add event listeners for start game and options buttons - should include clicks as well as touches on mobile
}


let showInstructions = function() {
    //this function shouldn't erase hide background as it should be seamless (should not run hide all divs)
    // should just hide necessary info from main menu screen
    mainMenu.style.display = "none";
    document.querySelector(".playButton").style.display = "none";
    document.querySelector(".optionsButton").style.display = "none";
    document.querySelector(".instructionsButton").style.display = "none";
    // and unhide necessary info for options screen
    document.querySelector(".instructionsScreen").style.display = "block";


    // I might be wrong, but I think these three event listeners should not be added here
    document.querySelector(".musicMuteButton").addEventListener("click", muteAllMusic);
    document.querySelector(".sfxMuteButton").addEventListener("click", muteAllSFX);
    document.querySelector(".sfxPlayButton").addEventListener("click", playIntroSFX);

    // remove event listeners for start game and options buttons - should include clicks as well as touches on mobile
    // the removeEventListener for the play game button  - should include clicks as well as touches on mobile
    document.querySelector(".playButton").removeEventListener("click", startOpeningStory);
    // the removeEventListener for the options button  - should include clicks as well as touches on mobile
    document.querySelector(".optionsButton").removeEventListener("click", showOptions);
    // the removeEventListener for the instructions button  - should include clicks as well as touches on mobile
    document.querySelector(".instructionsButton").removeEventListener("click", showInstructions);

    document.querySelector(".proceedInstructions").addEventListener("click", showInstructionsTwo);
    // add event listener to return button - should include clicks as well as touches on mobile
        // when return button is clicked or touched, the event listener for return button should go away
        // should run function for showing all divs for main menu screen



// function for showing all divs for instructions screen
    //this function shouldn't erase hide background as it should be seamless (should not run hide all divs)
    // should just hide necessary info from main menu screen
    // and unhide necessary info for instructions screen
    // remove event listeners for start game and options buttons - should include clicks as well as touches on mobile
    // add event listener to return button - should include clicks as well as touches on mobile
        // when return button is clicked or touched, the event listener for return button should go away
        // should run function for showing all divs for main menu screen
}

let showInstructionsTwo = function() {
    document.querySelector(".instructionsScreenTwo").style.display = "block";
    document.querySelector(".instructionsScreen").style.display = "none";
    document.querySelector(".returnButtonInstructions").addEventListener("click", mainMenuReturn);
}



// function for showing all divs for opening story screen
let startOpeningStory = function() {
    //stop audioIntro
    audioIntro.pause();
    // start audioOpeningStory
    openingStoryMusic.play();
    document.querySelector(".playButton").removeEventListener("click", startOpeningStory);
    hideAll();
    document.querySelector(".openingStory").style.display = "block";
    // not sure what else should be here at the moment
    // will need progress openingstory add event listeners
    let openingStoryProceed = function() {
        gameplayArea.addEventListener("click", firstBattleStart);
        // if I want to skip the battle sequences for testing:
        // gameplayArea.addEventListener("click", startClosingStory);
    }
    setTimeout(openingStoryProceed, 400)
}


// functions for Prompt Box

let hidePromptBox = function() {
    gameplayArea.removeEventListener("click", hidePromptBox);
    // console.log("hidePromptBox function running which sets innerText of promptBoxText to an empty string")
    promptBox.style.display = "none";
    promptBoxText.innerText = "";
}

let hidePromptBoxPlusActivate = function() {
    gameplayArea.removeEventListener("click", hidePromptBoxPlusActivate);
    // console.log("hidePromptBoxPlusActivation function running")
    hidePromptBox();
    attackActivate();
}

let emptyPromptBoxAndDefenseReady = function() {
    gameplayArea.removeEventListener("click", emptyPromptBoxAndDefenseReady);
    console.log("empty prompt box function running - means defense Ready is set to true now & innerText of promptBoxText is an empty string")
    promptBoxText.innerText = "";
    promptBoxClick.style.display = "none";
    let defenseReadyTrue = function() {
        defenseReady = true;
    }
    setTimeout(defenseReadyTrue, 500);
}

let showPromptBox = function() {
    console.log("show prompt box function running")
    // let delayedFunction = function() {
    //     console.log("delayed Function running")
    let promptBoxDelay = function() {
        gameplayArea.addEventListener("click", emptyPromptBoxAndDefenseReady);
    }
    setTimeout(promptBoxDelay, 700)
    // setTimeout(delayedFunction, 300);
    promptBoxClick.style.display = "block";
    promptBox.style.display = "block";
}

let showPromptBoxStart = function() {
    // let delayedFunction2 = function() {
    //     console.log("delayed Function2 running")
        gameplayArea.addEventListener("click", hidePromptBox);
    // }
    // setTimeout(delayedFunction2, 300);
    promptBoxClick.style.display = "block";
    promptBox.style.display = "block";
}

let showPromptBoxEnemy = function() {
    // console.log("showPromptBoxEnemy function running")
    gameplayArea.addEventListener("click", hidePromptBoxPlusActivate);
    promptBoxClick.style.display = "block";
    promptBox.style.display = "block";
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
    clearTimeout(heroAnimationIntervalleft);
    clearTimeout(heroAnimationIntervalRight);
    clearTimeout(bashAnimation);
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

    if (true) {
        // console.log("soul Attacks Enable about to run")
        setTimeout(soulAttacksEnable, 30);
    }
    // if (currentEnemy.HP <= (currentEnemy.maxHP/2)) {
    //     // console.log("soul Attacks Enable about to run")
    //     setTimeout(soulAttacksEnable, 3000);
    // }
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
            console.log("it is the enemy's turn and you are ready to defend function running")
            enemyMoveDelay = setTimeout(enemyOneMoveSelect, 300);
            defenseReady = false;
        }
    }
}

let battleLoopOne = function() {
    // console.log("battleLoopOne running")
    heroImg.style.bottom = hero.position.bottom + "px";
    heroShadow.style.bottom = hero.position.shadBottom + "px";
    heroImg.style.left = hero.position.left + "px";
    heroShadow.style.left = hero.position.shadLeft + "px";
    enemyImg.style.bottom = currentEnemy.position.bottom + "px";
    enemyShadow.style.bottom = currentEnemy.position.shadBottom + "px";
    enemyImg.style.left = currentEnemy.position.left + "px";
    enemyShadow.style.left = currentEnemy.position.shadLeft + "px";
    heroStaticHandler();
    // when dead, the setInterval stops and then runs level up function
    if (enemyOne.HP <= 0) {
        clearTimeout(enemyMoveDelay);
        clearInterval(battleOne);
        clearInterval(battleOneLongTerm);
        // need to revent show prompt box function
        setTimeout(levelUpKill, 1000);
    } else if (hero.HP <= 0) {
        //kill hero function -----------------------------------------------------------------------------------------
        clearTimeout(enemyMoveDelay);
        clearInterval(battleOne);
        clearInterval(battleOneLongTerm);
        setTimeout(lose, 1000);
    } else if (currentEnemy.SP <= 0) {
        clearTimeout(enemyMoveDelay);
        clearInterval(battleOne);
        clearInterval(battleOneLongTerm);
        setTimeout(levelUpSP, 1000);
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
    }
    turnController();
}

// calls the BattleLoop functions
let firstBattleStart = function() {
    // initialize enemyOne for when you beat the game and play again
    enemyOne.position.height = enemyOne.position.heightOrig;
    enemyOne.position.shadHeight = enemyOne.position.shadHeightOrig;
    enemyOne.position.shadBottom = enemyOne.position.shadBottomOrig;
    enemyOne.position.shadLeft = enemyOne.position.shadLeftOrig;
    enemyOne.SP = enemyOne.maxSP;
    //stop opening story audio
    openingStoryMusic.pause();
    //start battle audio
    battleMusic.play();
    battleCounter = 0;
    // create enemyOne
    // enemyOneCreation();
    // each battle will have a different currentEnemy:
    currentEnemy = enemyOne;
    enemyImg.style.height = currentEnemy.position.height + "px";
    enemyShadow.style.height = currentEnemy.position.shadHeight + "px";
    enemyShadow.style.bottom = currentEnemy.position.shadBottom + "px";
    enemyShadow.style.left = currentEnemy.position.shadLeft + "px";
    //initialize battle to have Soul attacks hidden
    soulAttacksDisable();
    //initialize battle to start with hero's turn
    heroImg.style.bottom = hero.position.bottom + "px";
    heroImg.style.left = hero.position.left + "px";
    enemyImg.style.bottom = currentEnemy.position.bottom + "px";
    enemyImg.style.left = currentEnemy.position.left + "px";
    turnCounter = true;
    hero.level = 1;
    hero.HP = hero.maxHP;
    hero.SP = hero.maxSP;
    hero.grit = hero.maxGrit;
    hero.defBlock = false;
    hero.buff = 0;
    // will need progress openingstory remove event listeners
    gameplayArea.removeEventListener("click", firstBattleStart);
    //adds soulCompress class to action2Span DIV so that it will show hover text to tell player the action is unavailable
    document.querySelector(".action2Span").classList.add("soulRestricted");
    //hide all divs through hide divs function
    setTimeout(hideAll, 198);
    // increments battleCounter by one
    battleCounter++;
    //call the static animation functions
    //show divs for this particular scene
    promptBoxText.innerText = "You picked a fight with line."
    setTimeout(battleLoad, 200);
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








let secondBattleStart = function() {
    //second battle stats for hero should default [HP should be set to maxHP for example]
}
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


// function for Closing Story Scene
let startClosingStory = function() {
    battleMusic.pause();
    winMusic.play();
    // remove any event listeners from previous screens

    ////////this startClosingStory directly below should be whatever is from the previous screen/event
    gameplayArea.removeEventListener("click", startClosingStory);
    hideAll();
    document.querySelector(".closingStory").style.display = "block";
    gameplayArea.addEventListener("click", rollCredits);
}


// function for showing all divs for credits screen/scene
let rollCredits = function() {
    gameplayArea.removeEventListener("click", rollCredits);
    hideAll();
    document.querySelector(".creditsScreen").style.display = "block";
    document.querySelector(".returnMainMenu").addEventListener("click", showMainMenuTwo);
}
    // once credits are fully displayed
        // addeventlistener click anywhere to Reset
            // when clicked/touched: the eventlistener removes itself
            // and runs gameReset function
// function for gameReset which executes once the game finishes and starts the game over without having to reload the page
    // all things should be initialized including the hero and all enemies
    // destroyed/removed as necessary
// function for losing game by losing all HP

infiniteModeRun = function() {
    hideAll();
}


// lose function
let lose = function() {
    loseMusic.play();
    hideAll();
    document.querySelector(".returnMainMenu").addEventListener("click", showMainMenu);
    loseScreen.style.display = "block";
}
