// functions for character creation--------------------------------------------------------------------------------------------


// constructor function to use for creating all characters

function Character(HPInput, SPInput, SP2Input, SP3Input, gritInput, nameInput, levelInput, posBottom, posLeft, shadowBottom, shadowLeft, heightInitial, widthInitial, shadHeightInitial, shadWidthInitial, borderBottom, borderRight, borderLeft) {
    function Position() {
        this.bottom = posBottom;
        this.bottomOrig = posBottom;
        this.left = posLeft;
        this.leftOrig = posLeft;
        this.shadBottom = shadowBottom;
        this.shadBottomOrig = shadowBottom;
        this.shadLeft = shadowLeft;
        this.shadLeftOrig = shadowLeft;
        this.height = heightInitial;
        this.heightOrig = heightInitial;
        this.width = widthInitial;
        this.widthOrig = widthInitial;
        this.shadHeight = shadHeightInitial;
        this.shadHeightOrig = shadHeightInitial;
        this.shadWidth = shadWidthInitial;
        this.shadWidthOrig = shadWidthInitial;
        this.bordBottom = borderBottom;
        this.bordBottomOrig = borderBottom;
        this.bordRight = borderRight;
        this.bordRightOrig = borderRight;
        this.bordLeft = borderLeft;
        this.bordLeftOrig = borderLeft;
        this.shadBordBottom = borderBottom;
        this.shadBordBottomOrig = borderBottom;
        this.shadBordRight = borderRight;
        this.shadBordRightOrig = borderRight;
        this.shadBordLeft = borderLeft;
        this.shadBordLeftOrig = borderLeft;
  };
    this.HP = HPInput;
    this.maxHP = HPInput;
    this.SP = SPInput;
    this.maxSP = SPInput;
    this.SP2 = SP2Input;
    this.maxSP2 = SP2Input;
    this.SP3 = SP3Input;
    this.maxSP3 = SP3Input;
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
let hero = new Character(100, 0, 0, 0, 100, "SISYPHUS", 1, 80, -270, 85, -266, 0, 0, 0, 0, 0, 0, 0);


//enemyOne Creation function
let enemyOne;
enemyOneCreation = function() {
    enemyOne = new Character(100, 100, 0, 0, 120, "LINE", 1, 235, 224, 195, 215, 70, 2, 41, 4, 0, 0, 0);
}
enemyOneCreation();

//enemyTwo Creation function
let enemyTwo;
enemyTwoCreation = function() {
    enemyTwo = new Character(120, 100, 100, 0, 120, "TRIANGLE", 1, 226, 177, 145, 175, 70, 2, 0, 0, 80, 40, 40);
}
enemyTwoCreation();

//enemyThree Creation function - did not reach this stretch goal
// enemyThreeCreation = function() {
//     enemyThree = new Character(100, 100, 100, 100, 120, "CUBE", 1, 235, 224, 195, 215, 70, 2, 41, 4);
// }
// enemyThreeCreation();

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
let heroBashRight;
let heroBashPrepare;
let heroBashPrepareTwo;
let heroBashReset;
let heroBashResetInterval;
let heroMoveReadyDelay;
let heroBashStartChain;


// variable for infiniteMode
let infiniteMode = false;



// DOM References that I use frequently---------------------------------------------------------------------------

let gameplayArea = document.querySelector(".gameplayArea");
let promptBoxText = document.querySelector(".promptBoxText");
let promptBox = document.querySelector(".promptBox");
let promptBoxClick = document.querySelector(".promptBoxClick");
let promptBoxTwoText = document.getElementsByClassName("promptBoxText")[1];
let promptBoxTwo = document.getElementsByClassName("promptBox")[1];
let promptBoxTwoClick = document.getElementsByClassName("promptBoxClick")[1];

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
let defBlockSFX = document.querySelector(".defBlockSFX");



let mainMenu = document.querySelector(".mainMenu");
let loseScreen = document.querySelector(".loseScreen");
let infiniteScreen = document.querySelector(".infiniteScreen");


let heroImg = document.querySelector(".heroImg");
let heroShadow = document.querySelector(".heroShadow");
let heroTwoImg = document.getElementsByClassName("heroImg")[1];
let heroTwoShadow = document.getElementsByClassName("heroShadow")[1];
let enemyImg = document.querySelector(".enemyImg");
let enemyShadow = document.querySelector(".enemyShadow");
let enemyBashMarks = document.querySelector(".bashMarks");


let enemyTwoBashMarks = document.getElementsByClassName("bashMarks")[1];


// initializing enemyImg height and width with DOM
enemyImg.style.height = enemyOne.position.height + "px";
enemyImg.style.width = enemyOne.position.width + "px";
enemyShadow.style.height = enemyOne.position.shadHeight + "px";
enemyShadow.style.width = enemyOne.position.shadWidth + "px";
// enemyShadow.style.height = 13;
// enemyShadow.style.height = 13;


let enemyTwoImg = document.querySelector(".enemyTwoImg");
let enemyTwoShadow = document.querySelector(".enemyTwoShadow");

// initializing enemyImg height and width with DOM
enemyTwoImg.style.height = enemyTwo.position.height + "px";
enemyTwoImg.style.width = enemyTwo.position.width + "px";
enemyTwoShadow.style.height = enemyTwo.position.shadHeight + "px";
enemyTwoShadow.style.width = enemyTwo.position.shadWidth + "px";
enemyTwoImg.style.borderBottom = enemyTwo.position.bordBottom + "px";
enemyTwoShadow.style.borderBottom = enemyTwo.position.shadBordBottom + "px solid rgb(36, 34, 34)";
enemyTwoShadow.style.borderRight = enemyTwo.position.shadBordRight + "px solid transparent";
enemyTwoShadow.style.borderLeft = enemyTwo.position.shadBordLeft + "px solid transparent";

// global variable for infinite mode run function
let infiniteModeRun;


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

let enemyHeight;
let enemyShadowHeight;

// enemyMoveDelay to prevent enemy from taking move when hero ends battle
let enemyMoveDelay;


// restZs
let restZs = document.querySelector(".restZs");
let restZsTwo = document.getElementsByClassName("restZs")[1];

let battleOne;
let battleOneLongTerm;
let battleTwoLongTerm;
