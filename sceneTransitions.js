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
    document.querySelector(".secondBattleScreen").style.display = "none";
    //secondBattleScreen --------_STRETCH
    // document.querySelector(".secondBattleScreen").style.display = "none";
    //thirdBattleScreen --------_STRETCH
    // document.querySelector(".thirdBattleScreen").style.display = "none";
    //closingStory
    document.querySelector(".closingStory").style.display = "none";
    //creditsScreen
    document.querySelector(".creditsScreen").style.display = "none";
    loseScreen.style.display = "none";
    infiniteScreen.style.display = "none";
    document.querySelector(".levelUpScreen").style.display = "none";
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
    }
    showMainMenu();
    //adding event listener to infiniteMode on next line

    let pleaseWorks = document.querySelector(".mainMenu").childNodes;
    // console.log(pleaseWorks);
    pleaseWorks[pleaseWorks.length - 1].addEventListener("click", infiniteModeRun);
    // infiniteMode.addEventListener("click", infiniteModeRun);
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
    infiniteMode = true;
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
let infiniteRandom;

infiniteModeRun = function() {
    hideAll();
    infiniteScreen.style.display = "block";
    infiniteRandom = Math.round(Math.random());
    if (infiniteRandom === 0) {
        setTimeout(firstBattleStart, 3000);
    } else if (infiniteRandom === 1) {
        setTimeout(secondBattleStart, 3000);
    } else {
        console.log("error with infinite mode")
        infiniteModeRun();
    }
}


// lose function
let lose = function() {
    infiniteMode = false;
    battleMusic.pause();
    loseMusic.play();
    hideAll();
    document.querySelector(".returnMainMenuLose").addEventListener("click", showMainMenu);
    loseScreen.style.display = "block";
}
