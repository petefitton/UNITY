// INDEX------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// DOM References

// variables and objects/arrays

// functions
    // functions for character creation
    // functions for attacks/actions
    // functions for moving between different screens
        // game loop functions during battle integrated into the various battle screen functions
    // functions for animations
    // function for leveling up
    // functions misc 
        // DOMContentLoaded













// DOM References that I use frequently---------------------------------------------------------------------------






// variables and objects/arrays---------------------------------------------------------------------------

// battleCounter = 0 by default and increments each time a battle is called
let battleCounter = 0;

// turnCounter defaults to 0 for beginning of each battle and increments after each enemy turn
let turnCounter = true;




// functions--------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------




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
    this.block = false;
    this.buff = 0;
    this.name = nameInput;
    this.level = levelInput;
    // alive may be unnecessary
    this.alive = true;
}

// create protagonist object function
let hero = new Character(100, 0, 100, "Prometheus", 1);

// should also call the create Crawler function to create the enemy with name enemyOne
let enemyOne = new Character(100, 100, 120, "Line", 1);


// create enemyOne object function - will create in the actual start battle functions
// let enemyOne = new Character(100, 100, 120, "Line", 1);

    // create enemy2 object function -------STRETCH
    // create enemy3 object function -------STRETCH


    


// functions for attacks/actions------------------------------------------------------------------------------------------------------



// function for activating all attack buttons corresponding to current hero level
// activations should include click, touch, ideally arrow keys if I can easily add them
    // and also should change the mouseover of the cursor icon to something else
// this same function could also unhide the extra attack buttons corresponding to hero level


// function for deactivating all attack buttons
// should remove all of the activations from the above function

let attackActivate = function() {
    document.querySelector(".action1").addEventListener('click', bash);
    document.querySelector(".action2").addEventListener('click', soulCompress);
    document.querySelector(".action3").addEventListener('click', rest);
}

let attackDeactivate = function() {
    document.querySelector(".action1").removeEventListener('click', bash);
    document.querySelector(".action2").removeEventListener('click', soulCompress);
    document.querySelector(".action3").removeEventListener('click', rest);
    // add them for other actions if I get that far
}



// individual functions for each attack/action
    // should turn off static animation functions -----> staticAnimOff()
    // should call battle action functions
    // should resume static animation again unless dead
    // when static animations are turned off - I will need to make sure that the default images for the characters is called

// bash - damages HP of enemy
let bash = function() {
    attackDeactivate();
    enemyOne.HP -= 20;
    hero.grit -= 10;
    // should have turnCounter set to false 
    turnCounter = false;
}

// 'soul compress' SP damage - damages SP of enemy
let soulCompress = function() {
    attackDeactivate();
    enemyOne.SP -= 25;
    hero.grit -= 15;
    // should have turnCounter set to false 
    turnCounter = false;
}

// rest
let rest = function() {
    attackDeactivate();
    hero.HP += 25;
    hero.grit += 25;
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
let block = function() {
    attackDeactivate();
    hero.block = true;
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
    hero.HP -= (15 + enemyOne.buff);
    // should have turnCounter set to true
    turnCounter = true;
    attackActivate();
}

let brandish = function() {
    enemyOne.buff = 20;
    // should have turnCounter set to true
    turnCounter = true;
    attackActivate();
}

//enemyOne move select function
let enemyOneMoveSelect = function() {
    let x = Math.floor(Math.random());
    if (x == 0) {
        stab();
    } else {
        brandish();
    }
}

// functions for moving between different screens--------------------------------------------------------------------------------------------


// function which hides all divs for going between each screen/scene
let hideAll = function() {
    //hides all main divs
    //titleScreen
    document.querySelector(".titleScreen").style.display = "none";
    //mainMenu
    document.querySelector(".mainMenu").style.display = "none";
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
    // the addEventListener for the click anywhere function on title screen  - should include clicks as well as touches on mobile
    let titleScreenProceed = function() {
        document.querySelector(".gameplayArea").addEventListener("click", showMainMenu);
    }
    setTimeout(titleScreenProceed, 600);
    // start playing audio --------------------------TODO
    // should clear all divs function
    // removes the addeventlistener for click anywhere function
    // should run main menu screen start
}



let showMainMenu = function() {
    document.querySelector(".gameplayArea").removeEventListener("click", showMainMenu);
    hideAll();
    // function for showing all divs for main menu screen
    document.querySelector(".mainMenu").style.display = "block";
    // the addEventListener for the game start button  - should include clicks as well as touches on mobile
    document.querySelector(".playButton").addEventListener("click", startOpeningStory);




        // should clear all divs
        // and start opening story function
    // addevent listener for option button
        // should run function for going to option screen
}


// function for showing all divs for options screen/scene
    //this function shouldn't erase hide background as it should be seamless (should not run hide all divs)
    // should just hide necessary info from main menu screen
    // and unhide necessary info for options screen
    // remove event listeners for start game and options buttons - should include clicks as well as touches on mobile
    // add event listener to return button - should include clicks as well as touches on mobile
        // when return button is clicked or touched, the event listener for return button should go away
        // should run function for showing all divs for main menu screen


// return button function should do opposite of the above
    //this function shouldn't erase hide background as it should be seamless (should not run hide all divs)
    // should just hide necessary info from options screen
    // and unhide necessary info for main menu screen
    // remove event listener to return button - should include clicks as well as touches on mobile
    // add event listeners for start game and options buttons - should include clicks as well as touches on mobile



// function for showing all divs for opening story screen
let startOpeningStory = function() {
    document.querySelector(".playButton").removeEventListener("click", startOpeningStory);
    hideAll();
    document.querySelector(".openingStory").style.display = "block";
    // not sure what else should be here at the moment
    // will need progress openingstory add event listeners
    let openingStoryProceed = function() {
        document.querySelector(".gameplayArea").addEventListener("click", firstBattleStart);
    }
    setTimeout(openingStoryProceed, 400)
}





// function for showing all divs for 1st battle screen
let firstBattleStart = function() {
    // will need progress openingstory remove event listeners
    document.querySelector(".gameplayArea").removeEventListener("click", firstBattleStart);
    //hide all divs through hide divs function
    setTimeout(hideAll, 498);
    // increments battleCounter by one
    battleCounter++;
    //call the static animation functions
    //show divs for this particular scene
    let battleLoad = function() {
        document.querySelector(".firstBattleScreen").style.display = "flex";
    }
    setTimeout(battleLoad, 500);
    // if level of hero is == 1, then hide three moves
    // if level of hero is == 2, then hide last move
    // start battle one loop by calling function globally defined
    // battleloop function during battle that detects if enemy is no longer alive
    attackActivate();
    let battleLoop1 = function() {
        console.log("battleLoop running")
        // console.log(enemyOne.HP)
        // when dead, the setInterval stops and then runs level up function
        if (enemyOne.HP <= 0) {
            levelUp();
            clearInterval(battleOne);
        } else {
            console.log(enemyOne);
            document.querySelector(".enemyHP").innerText = `HP: ${enemyOne.HP}`
            document.querySelector(".enemySP").innerText = `SP: ${enemyOne.SP}`
            document.querySelector(".enemyGrit").innerText = `GRIT: ${enemyOne.grit}`
            document.querySelector(".enemyName").innerText = `${enemyOne.name}`
            // code for SP2 and SP3
            // document.querySelector(".enemySP2").innerText = `SP: ${enemy.sp2}`
            // document.querySelector(".enemySP3").innerText = `SP: ${enemy.sp3}`
            document.querySelector(".heroHP").innerText = `HP: ${hero.HP}`
            document.querySelector(".heroSP").innerText = `SP: ${hero.SP}`
            document.querySelector(".heroGrit").innerText = `GRIT: ${hero.grit}`
        }
        let turnController = function() {
            //I may not need the if true here, so I have marked out everything for now
            if (turnCounter == true) {
                        //hero's turn
                        // add event listeners for all action buttons
                // document.querySelector(".action1").addEventListener('click', bash);
                // document.querySelector(".action2").addEventListener('click', soulCompress);
                // document.querySelector(".action3").addEventListener('click', rest);
                        // DOM query other moves as I build it out more
            } else if (turnCounter == false) {
                enemyOneMoveSelect();
            }
        }
        turnController();
    }
    let battleOne = setInterval(battleLoop1, 300);
}



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
// function for showing all divs for credits screen/scene
    // once credits are fully displayed
        // addeventlistener click anywhere to Reset
            // when clicked/touched: the eventlistener removes itself
            // and runs gameReset function
// function for gameReset which executes once the game finishes and starts the game over without having to reload the page
    // all things should be initialized including the hero and all enemies
    // destroyed/removed as necessary


// functions for animations--------------------------------------------------------------------------------------------

// how do I want to handle animations?
//     static animation vs battle action animation
//     static = probably JS with some random activity that bounds back to center fairly quickly (small movements and at random intervals)
//     battle action = probably JS too


// I need to think a bit about how I want to initiate static animations
    // need to place pseudocode lines of where that would go
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

// I will handle animations for line getting smaller with changes in the images, meaning that the action for reducing SP will call this function




// function for leveling up--------------------------------------------------------------------------------------------

// function for leveling up which includes learning new moves
let levelUp = function() {
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
    //need divs in index.html for whatever level up stuff I want to show - maybe one larger div that goes in the center of the gameplay space
    // level up sequence function should pop up a div which says what move or moves you have learned
    let levelUpProceed = function() {
        // clear all divs function
        hideAll();
        // show all divs for battle 2 or 3 function according to what the current battle count is (or story if I got a ton done)
        //batCount==1 means you have just ended the first battle, so should load the second battle
        if (battleCounter == 1) {
            document.querySelector(".gameplayArea").removeEventListener('click', levelUpProceed);
            secondBattleStart();
        }
        // if I added additional story or world map, this section would change ^^^^^^
        // it then removes itself (the eventlistener for confirming the text was read from leveling up)  - should include clicks as well as touches on mobile
    }
    // addeventlistener for confirming you have read the text which then calls:  - should include clicks as well as touches on mobile
    document.querySelector(".gameplayArea").addEventListener('click', levelUpProceed);
}

// functions misc --------------------------------------------------------------------------------------------



// DOMContentLoaded function


document.addEventListener("DOMContentLoaded", function() {
    // so likely the title screen load page function will run
    // firstBattleStart();
    showTitleScreen();
});
