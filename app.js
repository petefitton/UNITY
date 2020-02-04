// INDEX------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// functions for character creation

// DOM References

// variables and objects/arrays

// functions (excluding character creation)
    // functions for audio/sfx
    // functions for attacks/actions
    // functions for moving between different screens includes Prompt Box functions directly above First Battle functions
        // game loop functions during battle integrated into the various battle screen functions
    // functions for animations
    // function for leveling up
    // functions misc 
        // DOMContentLoaded






//CREDITS:

//animations for dissolving between screens using fade()
//taken from https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript

//code for random positive or negative:
//https://stackoverflow.com/questions/8611830/javascript-random-positive-or-negative-number







// functions for character creation--------------------------------------------------------------------------------------------


// constructor function to use for creating all characters

function Character(HPInput, SPInput, gritInput, nameInput, levelInput) {
    this.HP = HPInput;
    this.maxHP = HPInput;
    this.SP = SPInput;
    this.maxSP = SPInput;
    // may add SP2 & SP3
    this.grit = gritInput;
    this.maxGrit = gritInput;
    this.defBlock = false;
    this.buff = 0;
    this.name = nameInput;
    this.level = levelInput;
    // alive may be unnecessary
    this.alive = true;
}

// create protagonist object function
let hero = new Character(100, 0, 100, "PROMETHEUS", 1);

// should also call the create Crawler function to create the enemy with name enemyOne
let enemyOne;

//enemyOne Creation function
enemyOneCreation = function() {
    enemyOne = new Character(100, 100, 120, "LINE", 1);
}


// create enemyOne object function - will create in the actual start battle functions
// let enemyOne = new Character(100, 100, 120, ", 1);

    // create enemy2 object function -------STRETCH
    // create enemy3 object function -------STRETCH



// DOM References that I use frequently---------------------------------------------------------------------------

let gameplayArea = document.querySelector(".gameplayArea");
let promptBoxText = document.querySelector(".promptBoxText");
let promptBox = document.querySelector(".promptBox");
let promptBoxClick = document.querySelector(".promptBoxClick");

let audioIntro = document.querySelector(".audioIntro");
let sfxIntro = document.querySelector(".sfxIntro");

audioIntro.volume = 0.3;

let mainMenu = document.querySelector(".mainMenu");
let Screen = document.querySelector(".Screen");



// variables and objects/arrays---------------------------------------------------------------------------

// battleCounter = 0 by default and increments each time a battle is called
let battleCounter = 0;

// turnCounter defaults to 0 for beginning of each battle and increments after each enemy turn
let turnCounter = true;

// having issue where enemy is attacking before it should, so I decided to create a new variable:
let defenseReady = false;

// current enemy variable that changes for each battle
let currentEnemy;

// enemyMoveDelay to prevent enemy from taking move when hero ends battle
let enemyMoveDelay

// functions--------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------



// functions for audio/sfx---------------------------------------------------------------------------------------------------


let muteAllMusic = function() {
    audioIntro.muted = true;
    document.querySelector(".musicMuteButton").removeEventListener("click", muteAllMusic);
    document.querySelector(".musicMuteButton").addEventListener("click", unmuteAllMusic);
}

let unmuteAllMusic = function() {
    audioIntro.muted = false;
    document.querySelector(".musicMuteButton").addEventListener("click", muteAllMusic);
    document.querySelector(".musicMuteButton").removeEventListener("click", unmuteAllMusic);
}

let muteAllSFX = function() {
    sfxIntro.muted = true;
    document.querySelector(".sfxMuteButton").removeEventListener("click", muteAllSFX);
    document.querySelector(".sfxMuteButton").addEventListener("click", unmuteAllSFX);
}

let unmuteAllSFX = function() {
    sfxIntro.muted = false;
    document.querySelector(".sfxMuteButton").addEventListener("click", muteAllSFX);
    document.querySelector(".sfxMuteButton").removeEventListener("click", unmuteAllSFX);
}

let playIntroMusic = function() {
    audioIntro.play();
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
    // soul compress should default to being off until enemy is at 50% HP
    // document.querySelector(".action2").addEventListener('click', soulCompress);
    document.querySelector(".action3").addEventListener("click", rest);
}

let attackDeactivate = function() {
    document.querySelector(".action1").removeEventListener("click", bash);
    document.querySelector(".action2").removeEventListener("click", soulCompress);
    document.querySelector(".action3").removeEventListener("click", rest);
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
    setTimeout(showPromptBox, 700);
    // want effects of attack to wait until after the animation, but that will come in a bit
    currentEnemy.HP -= 21 + (Math.floor(Math.random() * 5) * (Math.round(Math.random()) * 2 - 1));
    hero.grit -= 10 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    // should have turnCounter set to false 
    turnCounter = false;
}

// 'soul compress' SP damage - damages SP of enemy
let soulCompress = function() {
    attackDeactivate();
    promptBoxText.innerText = "You used Soul Compress";
    setTimeout(showPromptBox, 700);
    enemyOne.SP -= 26 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    hero.grit -= 15 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    // should have turnCounter set to false 
    turnCounter = false;
}

// rest
let rest = function() {
    attackDeactivate();
    promptBoxText.innerText = "You used Rest";
    setTimeout(showPromptBox, 700);
    hero.HP += 26 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1));
    hero.grit += 25 (Math.floor(Math.random() * 3) * (Math.round(Math.random()) * 2 - 1));
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
    turnCounter = true;
    promptBoxText.innerText = "Line used Stab";
    showPromptBoxEnemy();
    hero.HP -= (13 + (Math.floor(Math.random() * 4) * (Math.round(Math.random()) * 2 - 1)) + enemyOne.buff);
}

let brandish = function() {
    // should have turnCounter set to true
    turnCounter = true;
    promptBoxText.innerText = "Line used Brandish - its strength will increase for a turn";
    showPromptBoxEnemy();
    enemyOne.buff = 20 + (Math.floor(Math.random() * 5) * (Math.round(Math.random()) * 2 - 1));
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
    gameplayArea.removeEventListener("click", titleScreenFade);
    document.querySelector(".musicMuteButton").removeEventListener("click", muteAllMusic);
    document.querySelector(".sfxMuteButton").removeEventListener("click", muteAllSFX);
    document.querySelector(".sfxPlayButton").removeEventListener("click", playIntroSFX);
    document.querySelector(".returnMainMenu").removeEventListener("click", showMainMenu);
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
    //return to Main Menu after winning game
    document.querySelector(".returnMainMenu").removeEventListener("click", showMainMenuTwo);
    showMainMenu();
    let infiniteMode = document.createElement("div");
    let infiniteModeContent = document.createTextNode("INFINITE MODE");
    infiniteMode.appendChild(infiniteModeContent);
    mainMenu.appendChild(infiniteMode);
    infiniteMode.style.textAlign = "center";
    infiniteMode.style.cursor = "pointer";
    infiniteMode.style.maxWidth = "120px";
    infiniteMode.style.margin = "4px auto";
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

    document.querySelector(".returnButtonInstructions").addEventListener("click", mainMenuReturn);
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





// function for showing all divs for opening story screen
let startOpeningStory = function() {
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
    // console.log("empty prompt box function running - means defense Ready is set to true now & innerText of promptBoxText is an empty string")
    promptBoxText.innerText = "";
    promptBoxClick.style.display = "none";
    let defenseReadyTrue = function() {
        defenseReady = true;
    }
    setTimeout(defenseReadyTrue, 500);
}

let showPromptBox = function() {
    // console.log("show prompt box function running")
    // let delayedFunction = function() {
    //     console.log("delayed Function running")
        gameplayArea.addEventListener("click", emptyPromptBoxAndDefenseReady);
    // }
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
let firstBattleStart = function() {
    //initialize battle to have Soul attacks hidden
    soulAttacksDisable();
    //initialize battle to start with hero's turn
    turnCounter = true;
    hero.level = 1;
    hero.HP = hero.maxHP;
    hero.SP = hero.maxSP;
    hero.grit = hero.maxGrit;
    hero.defBlock = false;
    hero.buff = 0;
    // create enemyOne
    enemyOneCreation();
    // each battle will have a different currentEnemy:
    currentEnemy = enemyOne;
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
    let battleLoad = function() {
        showPromptBoxStart();
        let showFirstBattleScreen = function() {
            document.querySelector(".firstBattleScreen").style.display = "flex";
        }
        setTimeout(showFirstBattleScreen, 200);
    }
    setTimeout(battleLoad, 200);
    // if level of hero is == 1, then hide three moves
    // if level of hero is == 2, then hide last move
    // start battle one loop by calling function globally defined
    // battleloop function during battle that detects if enemy is no longer alive
    attackActivate();
    let battleLoopOne = function() {
        console.log("battleLoopOne running")
        if (currentEnemy.HP <= (currentEnemy.maxHP/2)) {
            setTimeout(soulAttacksEnable, 900);
        }
        // when dead, the setInterval stops and then runs level up function
        if (enemyOne.HP <= 0) {
            clearTimeout(enemyMoveDelay);
            clearInterval(battleOne);
            levelUpKill();
        } else if (hero.HP <= 0) {
            //kill hero function -----------------------------------------------------------------------------------------
            clearTimeout(enemyMoveDelay);
            clearInterval(battleOne);
            lose();
        } else if (currentEnemy.SP <= 0) {
            clearTimeout(enemyMoveDelay);
            clearInterval(battleOne);
            levelUpSP();
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
        turnController();
    }
    let battleOne = setInterval(battleLoopOne, 300);
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

let infiniteModeRun = function() {
    hideAll();
}


// lose function
let lose = function() {
    hideAll();
    document.querySelector(".returnMainMenu").addEventListener("click", showMainMenu);
    Screen.style.display = "block";
}

// functions for animations--------------------------------------------------------------------------------------------

// how do I want to handle animations?
//     static animation vs battle action animation
//     static = probably JS with some random activity that bounds back to center fairly quickly (small movements and at random intervals)
//     battle action = probably JS too


//animations for dissolving between screens using fade()
//taken from https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript
// animation between titleScreen and MainMenu
var titleScreenStyle = document.querySelector('.titleScreen').style;
titleScreenStyle.opacity = 1;
var titleScreenFade = function() {
    titleScreenStyle.opacity -= .1;
    if (titleScreenStyle.opacity < 0) {
        titleScreenStyle.display = "none";
        setTimeout(showMainMenu, 200);
    } else {
        setTimeout(titleScreenFade, 40);
    }
}

//animation between MainMenu and Options
//????

// animation MainMenu and openingStory
var mainMenuStyle = mainMenu.style;
mainMenuStyle.opacity = 1;
var mainMenuFade = function() {
    mainMenuStyle.opacity -= .1;
    if (mainMenuStyle.opacity < 0) {
        mainMenuStyle.display = "none";
        setTimeout(startOpeningStory, 200);
    } else {
        setTimeout(mainMenuFade, 40);
    }
}

// I need to think a bit about how I want to initiate static animations
    // need to place pseudocode LINEs of where that would go
    // need to figure out areas and place pseudocode for areas where I need to turn off static animation
        // static should turn off when battle animation is initiated
            // and return on after battle animation is over
        // static should turn off when the battle ends (maybe when level up is run?) or maybe put that inside the gameloop when the battle ends


// static animation function during battles on a set interval
// battle action animation functions
    // bash - damages HP of enemy
    // maybe called 'soul compress' SP damage - damages SP of enemy
    // rest
    // learned after 1st battle: block - reduces HP damage from enemy on that turn
    // learned after 1st battle: 'soul constrict' SP damage2D - damages SP of enemy in the second dimension
    // learned after 2nd battle: 'soul reduce' SP damage3D - damages SP of enemy in the second dimension
// staticAnimOff() function which turns off animation

// I will handle animations for LINE getting smaller with changes in the images, meaning that the action for reducing SP will call this function



// battle action animations
// at end of animation, I should initiate an eventlistener click for hidePromptBoxText(); which would be set on promptBoxText
// should also remove eventlistener once it has been clicked
// think about how the prompt box works for both hero and enemy attacks




// function for leveling up--------------------------------------------------------------------------------------------


//need divs in index.html for whatever level up stuff I want to show - maybe one larger div that goes in the center of the gameplay space
// level up sequence function should pop up a div which says what move or moves you have learned
let levelUpProceed = function() {
    // clear all divs function
    hideAll();
    // show all divs for battle 2 or 3 function according to what the current battle count is (or story if I got a ton done)
    //batCount==1 means you have just ended the first battle, so should load the second battle
    if (battleCounter == 1) {
        gameplayArea.removeEventListener('click', levelUpProceed);
        //secondBattleStart() will run when all three battles are set up, but for now, I am just running:
        startClosingStory();
        // secondBattleStart();
    }
    // if I added additional story or world map, this section would change ^^^^^^
    // it then removes itself (the eventlistener for confirming the text was read from leveling up)  - should include clicks as well as touches on mobile
}

// function for leveling up which includes learning new moves
let levelUpKill = function() {
    console.log("level Up function running")
    // remove event listeners for all action buttons
    document.querySelector(".action1").removeEventListener('click', bash);
    document.querySelector(".action2").removeEventListener('click', soulCompress);
    document.querySelector(".action3").removeEventListener('click', rest);
    // end of 1st and 2nd battles should run level up function according to battleCounter variable
    if (battleCounter == 1) {
        // if it's battle 1, then destroy enemyOne's object and then run level up sequence
        //learn two new moves
    } else if (battleCounter == 2) {
        // if it's battle 2, then destroy enemyTwo's object and then run level up sequence
        //learn new move
    }
    // addeventlistener for confirming you have read the text which then calls:  - should include clicks as well as touches on mobile
    gameplayArea.addEventListener('click', levelUpProceed);
}



// function for leveling up which includes learning new moves
let levelUpSP = function() {
    console.log("level Up function running")
    // remove event listeners for all action buttons
    document.querySelector(".action1").removeEventListener('click', bash);
    document.querySelector(".action2").removeEventListener('click', soulCompress);
    document.querySelector(".action3").removeEventListener('click', rest);
    // end of 1st and 2nd battles should run level up function according to battleCounter variable
    if (battleCounter == 1) {
        // if it's battle 1, then destroy enemyOne's object and then run level up sequence
        //learn two new moves
    } else if (battleCounter == 2) {
        // if it's battle 2, then destroy enemyTwo's object and then run level up sequence
        //learn new move
    }
    // addeventlistener for confirming you have read the text which then calls:  - should include clicks as well as touches on mobile
    gameplayArea.addEventListener('click', levelUpProceed);
}
// functions misc --------------------------------------------------------------------------------------------



// DOMContentLoaded function


document.addEventListener("DOMContentLoaded", function() {
    // so likely the title screen load page function will run
    // firstBattleStart();
    showTitleScreen();
});
