// INDEX------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


//--------- APP1.js File: -------------------------------------------------------------------------
// functions for character creation

// DOM References

// variables and objects/arrays



//--------- APP2.js File: -------------------------------------------------------------------------
    // functions for audio/sfx
    // functions for attacks/actions


//--------- APP3.js File: -------------------------------------------------------------------------
    // functions for moving between different screens includes Prompt Box functions directly above First Battle functions
        // game loop functions during battle integrated into the various battle screen functions


//--------- APP3.js File: -------------------------------------------------------------------------
    // functions for animations
    // function for leveling up
    // functions misc 
        // DOMContentLoaded






//CREDITS:

//animations for dissolving between screens using fade()
//taken from https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript

//code for random positive or negative:
//https://stackoverflow.com/questions/8611830/javascript-random-positive-or-negative-number

//music from Monolith OST made by ArcOfDream https://arcofdream.itch.io/monolith-ost
//SFX from Pokemon Gen 1 made by BellBlitzKing https://bellblitzking.itch.io/pokemon-sound-collection





// functions for character creation--------------------------------------------------------------------------------------------


// constructor function to use for creating all characters

function Character(HPInput, SPInput, gritInput, nameInput, levelInput, posBottom, posLeft, shadowBottom, shadowLeft) {
    function Position() {
        this.bottom = posBottom;
        this.bottomOrig = posBottom;
        this.left = posLeft;
        this.leftOrig = posLeft;
        this.shadBottom = shadowBottom;
        this.shadBottomOrig = shadowBottom;
        this.shadLeft = shadowLeft;
        this.shadLeftOrig = shadowLeft;
  };
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
    this.position = new Position(posBottom, posLeft);
  }

// create protagonist object function
let hero = new Character(100, 0, 100, "SISYPHUS", 1, 80, -270, 85, -266);


// should also call the create Crawler function to create the enemy with name enemyOne
let enemyOne;

//enemyOne Creation function
enemyOneCreation = function() {
    enemyOne = new Character(100, 100, 120, "LINE", 1, 235, 224, 195, 215);
}


//static animation variables - will be true if static is good to run; false if not
let heroStaticReady;

//move animation variables - will be false until a move has been selected
let heroMoveReady = false;

//bashAnimationRepeat setInterval set as a variable and declared globally so I can reset it in event that animation jumps out of bounds
//same for four staticanimations with Intervals
let bashAnimationRepeat;
let heroAnimationIntervalUp;
let heroAnimationIntervalDown;
let heroAnimationIntervalLeft;
let heroAnimationIntervalRight;

// variable for infiniteMode
infiniteMode = true;

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
audioIntro.volume = 0.8;
let openingStoryMusic = document.querySelector(".openingStoryMusic");
let battleMusic = document.querySelector(".battleMusic");
battleMusic.volume = 0.8;
let winMusic = document.querySelector(".winMusic");
let loseMusic = document.querySelector(".loseMusic");

let sfxIntro = document.querySelector(".sfxIntro");
let bashSFX = document.querySelector(".bashSFX");
let soulCompressSFX = document.querySelector(".soulCompressSFX");
let restSFX = document.querySelector(".restSFX");
let stabSFX = document.querySelector(".stabSFX");
let brandishSFX = document.querySelector(".brandishSFX");



let mainMenu = document.querySelector(".mainMenu");
let loseScreen = document.querySelector(".Screen");


let heroImg = document.querySelector(".heroImg");
let heroShadow = document.querySelector(".heroShadow");
let enemyImg = document.querySelector(".enemyImg");
let enemyShadow = document.querySelector(".enemyShadow");
let enemyBashMarks = document.querySelector(".bashMarks");



// global variable for infinite mode run function
let infiniteModeRun;

// variables and objects/arrays---------------------------------------------------------------------------

// battleCounter = 0 by default and increments each time a battle is called
let battleCounter = 0;

// turnCounter defaults to 0 for beginning of each battle and increments after each enemy turn
let turnCounter = true;

// buffCounter for enemy offensive buff
let buffCounter = false;

// having issue where enemy is attacking before it should, so I decided to create a new variable:
let defenseReady = false;

// current enemy variable that changes for each battle
let currentEnemy;

// enemyMoveDelay to prevent enemy from taking move when hero ends battle
let enemyMoveDelay

