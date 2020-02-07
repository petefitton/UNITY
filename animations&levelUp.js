// functions for animations--------------------------------------------------------------------------------------------

// how do I want to handle animations?
//     static animation vs battle action animation
//     static = probably JS with some random activity that bounds back to center fairly quickly (small movements and at random intervals)
//     battle action = probably JS too


//animations for dissolving between screens using fade()
//taken from https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript
// animation between titleScreen and MainMenu
let titleScreenStyle = document.querySelector('.titleScreen').style;
titleScreenStyle.opacity = 1;
let titleScreenFade = function() {
    titleScreenStyle.opacity -= .05;
    if (titleScreenStyle.opacity <= 0) {
        titleScreenStyle.display = "none";
        setTimeout(showMainMenu, 240);
    } else if (titleScreenStyle.opacity <= .5) {
        setTimeout(titleScreenFade, 50);
    } else if (titleScreenStyle.opacity <= .25) {
        setTimeout(titleScreenFade, 40);
    } else if (titleScreenStyle.opacity <= .15) {
        setTimeout(titleScreenFade, 30);
    } else {
        setTimeout(titleScreenFade, 80);
    }
}


// animation MainMenu and openingStory
let mainMenuStyle = mainMenu.style;
mainMenuStyle.opacity = 1;
let mainMenuFade = function() {
    mainMenuStyle.opacity -= .1;
    if (mainMenuStyle.opacity < 0) {
        mainMenuStyle.display = "none";
        setTimeout(startOpeningStory, 200);
    } else {
        setTimeout(mainMenuFade, 40);
    }
}


// STATIC ANIMATIONS-----------------------------------------------------------------------------------------------------

// hero static animation:

//game loop runs hero static animation on a setInterval
    // EX: in game loop var someVARIABLEname = setInterval(functionNAME, 300);
        // setInterval needs to set an interval on a function
        // clearInterval needs to clear the variable by name that is assigned to the setInterval
        
// EX in this animation area: let functionNAME = function() {}
let heroStaticAnimateUp = function() {
    // heroStaticReady = false;
    // console.log("heroStaticAnimateUp starting")
    // inside function, should change positions of heroImg
    let heroReturn;
    let heroMoveBack;
    let heroMoveOut = function() {
        // console.log("adding 1px to bottom")
        hero.position.bottom += 1;
        hero.position.shadBottom += 0.5;
        if (hero.position.bottom > hero.position.bottomOrig + 3) {
            // console.log("clearing additive pixel interval")
            clearInterval(heroAnimationIntervalUp);
            heroReturn = setInterval(heroMoveBack, 150);
        }
    }
    heroMoveBack = function() {
        // console.log("subtracting 1px to bottom")
        hero.position.bottom -= 1;
        hero.position.shadBottom -= 0.5;
        if (hero.position.bottom <= hero.position.bottomOrig) {
            // console.log("clearing return pixel interval")
            clearInterval(heroReturn);
            heroStaticReady = true;
        }
    }
    heroAnimationIntervalUp = setInterval(heroMoveOut, 150)
}

let heroStaticAnimateDown = function() {
    // heroStaticReady = false;
    // console.log("heroStaticAnimateDown starting")
    // inside function, should change positions of heroImg
    let heroReturn;
    let heroMoveBack;
    let heroMoveOut = function() {
        // console.log("subtracting 1px to bottom")
        hero.position.bottom -= 1;
        hero.position.shadBottom -= 0.5;
        if (hero.position.bottom < hero.position.bottomOrig - 2) {
            // console.log("clearing additive pixel interval")
            clearInterval(heroAnimationIntervalDown);
            heroReturn = setInterval(heroMoveBack, 150);
        }
    }
    heroMoveBack = function() {
        // console.log("adding 1px to bottom")
        hero.position.bottom += 1;
        hero.position.shadBottom += 0.5;
        if (hero.position.bottom >= hero.position.bottomOrig) {
            // console.log("clearing return pixel interval")
            clearInterval(heroReturn);
            heroStaticReady = true;
        }
    }
    heroAnimationIntervalDown = setInterval(heroMoveOut, 150)
}

let heroStaticAnimateRight = function() {
    // heroStaticReady = false;
    // console.log("heroStaticAnimateUp starting")
    // inside function, should change positions of heroImg
    let heroReturn;
    let heroMoveBack;
    let heroMoveOut = function() {
        // console.log("adding 1px to left")
        hero.position.left += 1;
        hero.position.shadLeft += 1;
        if (hero.position.left > hero.position.leftOrig + 3) {
            // console.log("clearing additive pixel interval")
            clearInterval(heroAnimationIntervalRight);
            heroReturn = setInterval(heroMoveBack, 150);
        }
    }
    heroMoveBack = function() {
        // console.log("subtracting 1px to left")
        hero.position.left -= 1;
        hero.position.shadLeft -= 1;
        if (hero.position.left <= hero.position.leftOrig) {
            // console.log("clearing return pixel interval")
            clearInterval(heroReturn);
            heroStaticReady = true;
        }
    }
    heroAnimationIntervalRight = setInterval(heroMoveOut, 150)
}

let heroStaticAnimateLeft = function() {
    // heroStaticReady = false;
    // console.log("heroStaticAnimateUp starting")
    // inside function, should change positions of heroImg
    let heroReturn;
    let heroMoveBack;
    let heroMoveOut = function() {
        // console.log("subtracting 1px to left")
        hero.position.left -= 1;
        hero.position.shadLeft -= 1;
        if (hero.position.left < hero.position.leftOrig - 3) {
            // console.log("clearing additive pixel interval")
            clearInterval(heroAnimationIntervalLeft);
            heroReturn = setInterval(heroMoveBack, 150);
        }
    }
    heroMoveBack = function() {
        // console.log("adding 1px to left")
        hero.position.left += 1;
        hero.position.shadLeft += 1;
        if (hero.position.left >= hero.position.leftOrig) {
            // console.log("clearing return pixel interval")
            clearInterval(heroReturn);
            heroStaticReady = true;
        }
    }
    heroAnimationIntervalLeft = setInterval(heroMoveOut, 150)
}


// static should turn off when battle animation is initiated
    // and return on after battle animation is over
// static should turn off when the battle ends (maybe when level up is run?) or maybe put that inside the gameloop when the battle ends


// battle action animation functions
    // bash - damages HP of enemy

let bashAnimation = function() {
    heroMoveReady = true;
    if (heroStaticReady == false) {
        bashAnimationRepeat = setTimeout(bashAnimation, 60);
    } else {
        //execute animation
        let bashAnimationNested = function() {
            // heroStaticReady = false;
            // console.log("heroStaticAnimateUp starting")
            // inside function, should change positions of heroImg
            // let heroReturn;
            let heroBashReset;
            let heroBashRight;
            let heroBashPrepare = function() {
                // console.log("adding 1px to left")
                hero.position.left -= 1;
                hero.position.shadLeft -= 1;
                hero.position.bottom -= 1;
                hero.position.shadBottom -= 0.5;
                if (hero.position.left < hero.position.leftOrig - 2) {
                    // console.log("clearing additive pixel interval")
                    clearInterval(heroBashStartChain);
                    heroCharge = setInterval(heroBashRight, 30);
                }
            }
            heroBashRight = function() {
                // console.log("subtracting 1px to left")
                hero.position.left += 1;
                hero.position.shadLeft += 1;
                hero.position.bottom += 1;
                hero.position.shadBottom += 0.5;
                if (hero.position.left > hero.position.leftOrig + 9) {
                    // console.log("clearing return pixel interval")
                    clearInterval(heroCharge);
                    heroSecondWindBack = setInterval(heroBashPrepareTwo, 40);
                }
            }
            let heroBashPrepareTwo = function() {
                // console.log("adding 1px to left")
                hero.position.left -= 1;
                hero.position.shadLeft -= 1;
                hero.position.bottom -= 1;
                hero.position.shadBottom -= 0.5;
                if (hero.position.left < hero.position.leftOrig - 2) {
                    // console.log("clearing additive pixel interval")
                    clearInterval(heroSecondWindBack);
                    heroSecondBash = setInterval(heroBashRightTwo, 20);
                }
            }
            heroBashRightTwo = function() {
                // console.log("subtracting 1px to left")
                hero.position.left += 1;
                hero.position.shadLeft += 1;
                hero.position.bottom += 1;
                hero.position.shadBottom += 0.5;
                if (hero.position.left > hero.position.leftOrig + 11) {
                    // console.log("clearing return pixel interval")
                    clearInterval(heroSecondBash);
                    bashSFX.play();
                    enemyBashMarks.style.display = "block";
                    enemyTwoBashMarks.style.display = "block";
                    heroBashResetInterval = setInterval(heroBashReset, 150);
                    currentEnemy.HP -= 21 + (Math.floor(Math.random() * 5) * (Math.round(Math.random()) * 2 - 1));
                    let bashPromptBox = setTimeout(showPromptBox, 1500);
                    if (currentEnemy.HP <= 0) {
                        clearTimeout(bashPromptBox);
                    }
                }
            }
            heroBashReset = function() {
                // console.log("returning back to default")
                hero.position.left -= 1;
                hero.position.shadLeft -= 1;
                hero.position.bottom -= 1;
                hero.position.shadBottom -= 0.5;
                let bashMarksRemovalDelay = function() {
                    enemyBashMarks.style.display = "none";
                    enemyTwoBashMarks.style.display = "none";
                    // should have turnCounter set to false 
                    turnCounter = false;
                }
                setTimeout(bashMarksRemovalDelay, 1000);
                if (hero.position.left == hero.position.leftOrig) {
                    // console.log("clearing return pixel interval")
                    clearInterval(heroBashResetInterval);
                    let heroMoveReadyDelay = function() {
                        heroMoveReady = false;
                    }
                    setTimeout(heroMoveReadyDelay, 1500)
                }
            }
            let heroBashStartChain = setInterval(heroBashPrepare, 200)
        }
        bashAnimationNested();
    }
}


// 'soul compress' SP damage - damages SP of enemy----------------------------------------------------------------------------


// variables for LINE or both LINE and TRIANGLE:
let heightReduction;
// using heightReduction as a function which contains both LINE and TRIANGLE checks, so not declaring a second function at the moment for border reduction
// accidentally made an unused INTERVAL variable here:
    // let heightReductionInterval;
let heightReductionInternal;
let heightReductionInternalTwo;
// using hRedInt for both LINE and TRIANGLE
let enemyHReductionAmount;
let enemyShadHReductionAmount;
let enemyShadBReductionAmount;
let enemyShadLReductionAmount;
let tempEnemyHeight;

// variables for TRIANGLE - 
let enemyBBReductionAmount;
// let enemyRBReductionAmount;
// let enemyLBReductionAmount;
let enemyShadBBReductionAmount;
// let enemyShadRBReductionAmount;
// let enemyShadLBReductionAmount;
let tempEnemyBordBottom;


// as height is reduced with soul compression, I do not need to worry about moving the positions of the enemy img and shad divs
    // do have to worry about that with soul constrict

let heightReductionHandler = function() {
    if (currentEnemy.name == "LINE") {
        currentEnemy.position.height -= (enemyHReductionAmount/80);
        currentEnemy.position.shadHeight -= (enemyShadHReductionAmount/80);
        currentEnemy.position.shadBottom += (enemyShadBReductionAmount/80);
        currentEnemy.position.shadLeft += (enemyShadLReductionAmount/80);
        enemyImg.style.height = currentEnemy.position.height + "px";
        enemyShadow.style.height = currentEnemy.position.shadHeight + "px";
        enemyShadow.style.bottom = currentEnemy.position.shadBottom + "px";
        enemyShadow.style.left = currentEnemy.position.shadLeft + "px";
    } else if (currentEnemy.name == "TRIANGLE") {
        //reduce height of Triangle
        currentEnemy.position.bordBottom -= (enemyBBReductionAmount/80);
        currentEnemy.position.shadBordBottom -= (enemyShadBBReductionAmount/80);
        currentEnemy.position.shadBottom += (enemyShadBBReductionAmount/78);
        enemyTwoImg.style.borderBottom = currentEnemy.position.bordBottom + "px solid white";
        enemyTwoShadow.style.borderBottom = currentEnemy.position.shadBordBottom + "px solid rgb(36, 34, 34)";
        enemyTwoShadow.style.bottom = currentEnemy.position.shadBottom + "px";
    }
}
// bottom of triangle shadow goes from 235px at its default initial pos (actually initial is 145)
// to 223px in its minimal pos (when SP is fully reduced)


let soulCompressAnimation = function() {
    heroMoveReady = true;
    if (heroStaticReady == false) {
        soulCompressAnimationRepeat = setTimeout(soulCompressAnimation, 60);
    } else {
        //execute animation
        let soulCompressAnimationNested = function() {
            console.log("soulCompressAnimationNested starting")
            let enemyHeightReduce = function() {
                tempEnemyHeight = currentEnemy.position.height;
                tempEnemyBordBottom = currentEnemy.position.height;
                enemyHReductionAmount = (((currentSoulCompressDmg/currentEnemy.maxSP) * currentEnemy.position.heightOrig));
                enemyShadHReductionAmount = (((currentSoulCompressDmg/currentEnemy.maxSP) * currentEnemy.position.shadHeightOrig));
                enemyShadBReductionAmount = (((currentSoulCompressDmg/currentEnemy.maxSP) * 38));
                enemyShadLReductionAmount = (((currentSoulCompressDmg/currentEnemy.maxSP) * 8));
                // need to calculate the bottom border number for both the image and the shadow of enemyTwo
                enemyBBReductionAmount = (((currentSoulCompressDmg/currentEnemy.maxSP) * currentEnemy.position.bordBottomOrig));
                enemyShadBBReductionAmount = (((currentSoulCompressDmg/currentEnemy.maxSP) * currentEnemy.position.shadBordBottomOrig));
                heightReduction = function() {
                    //perform incremental reductions
                    console.log("running heightReduction")
                    heightReductionHandler();
                    if (currentEnemy.name == "LINE") {
                        if (!(currentEnemy.position.height <= (tempEnemyHeight - (enemyHReductionAmount/2)))) {
                            setTimeout(heightReduction, 12);
                        } else {
                            //if reached half height reduction, move to next function
                            heightReductionInternal();
                        }
                        heightReductionInternal = function() {
                            heightReductionHandler();
                            if (!(currentEnemy.position.height <= (tempEnemyHeight - enemyHReductionAmount))) {
                                setTimeout(heightReductionInternal, 13);
                                //if reached full height reduction, stop repeating:
                            } else {
                                heroMoveReady = false;
                            }
                        }
                    } else if (currentEnemy.name == "TRIANGLE") {
                        if (!(currentEnemy.position.bordBottom <= (tempEnemyBordBottom - (enemyBBReductionAmount/2)))) {
                            setTimeout(heightReduction, 12);
                        } else {
                            //if reached half height reduction, move to next function
                            heightReductionTwoInternal();
                        }
                        heightReductionTwoInternal = function() {
                            heightReductionHandler();
                            if (!(currentEnemy.position.bordBottom <= (tempEnemyBordBottom - enemyBBReductionAmount))) {
                                setTimeout(heightReductionTwoInternal, 13);
                                //if reached full height (BB) reduction, stop repeating:
                            } else {
                                // if SP has been fully reduced, maintain a minimum 'height' of 2px
                                // if SP == 0, then make sure there remains a little thickness so you can see it
                                if (currentEnemy.position.bordBottom <= 0) {
                                    currentEnemy.position.bordBottom = 2;
                                    currentEnemy.position.shadBordBottom = 2;
                                    currentEnemy.position.shadBottom = 223;
                                    enemyTwoImg.style.borderBottom = currentEnemy.position.bordBottom + "px solid white";
                                    enemyTwoShadow.style.borderBottom = currentEnemy.position.shadBordBottom + "px solid rgb(36, 34, 34)";
                                    enemyTwoShadow.style.bottom = currentEnemy.position.shadBottom + "px";
                                }
                                heroMoveReady = false;
                            }
                        }
                    }
                }
                heightReduction();
            }()
        }()
    }
}


// rest
let incrementRest;
let incrementRestTwo;
let decrementRest;
let decrementRestTwo;


let restAnimation = function() {
    heroMoveReady = true;
    if (heroStaticReady == false) {
        bashAnimationRepeat = setTimeout(restAnimation, 60);
    } else {
        if (currentEnemy.name == "LINE") {
            restZs.style.bottom = 109 + "px";
            incrementRest = function() {
                restZs.style.display = "block";
                restZs.style.bottom = 110 + "px";
                setTimeout(incrementRestTwo, 600);
            }
            incrementRestTwo = function() {
                restZs.style.bottom = 111 + "px";
                setTimeout(decrementRest, 600);
            }
            decrementRest = function() {
                restZs.style.bottom = 110 + "px";
                setTimeout(decrementRestTwo, 600);
            }
            decrementRestTwo = function() {
                restZs.style.bottom = 109 + "px";
                //function to hide Z's
                let hideZs = function() {
                    restZs.style.display = "none";
                    heroMoveReady = false;
                }
                setTimeout(hideZs, 1500);
            }
        //show Z's
        setTimeout(incrementRest, 40);
        // triangle means it's the second battle div; not actually important that it's specifically the triangle who is the currentEnemy
        } else if (currentEnemy.name == "TRIANGLE") {
            restZsTwo.style.bottom = 109 + "px";
            incrementRest = function() {
                restZsTwo.style.display = "block";
                restZsTwo.style.bottom = 110 + "px";
                setTimeout(incrementRestTwo, 600);
            }
            incrementRestTwo = function() {
                restZsTwo.style.bottom = 111 + "px";
                setTimeout(decrementRest, 600);
            }
            decrementRest = function() {
                restZsTwo.style.bottom = 110 + "px";
                setTimeout(decrementRestTwo, 600);
            }
            decrementRestTwo = function() {
                restZsTwo.style.bottom = 109 + "px";
                //function to hide Z's
                let hideZs = function() {
                    restZsTwo.style.display = "none";
                    heroMoveReady = false;
                }
                setTimeout(hideZs, 1500);
            }
        //show Z's
        setTimeout(incrementRest, 40);
        }
    }
}
// enemyShadow.style.left = currentEnemy.position.shadLeft + "px";



let stabAnimation = function() {
    //slashing white line through circle
    heroMoveReady = true;
    if (heroStaticReady == true) {
        document.querySelector(".stabMarkContainer").style.display = "block";
        document.getElementsByClassName("stabMarkContainer")[1].style.display = "block";
        let stabDelay = function() {
            document.querySelector(".stabMarkContainer").style.display = "none";
            document.getElementsByClassName("stabMarkContainer")[1].style.display = "none";
            heroMoveReady = false;
        }
        setTimeout(stabDelay, 1300);
    } else {
        setTimeout(stabAnimation, 20);
    }
}



//UNNEEDED as it's in defBlock()....----- learned after 1st battle: block - reduces HP damage from enemy on that turn

// learned after 1st battle: 'soul constrict' SP damage2D - damages SP of enemy in the second dimension------------------------------------

// variables for LINE or both LINE and TRIANGLE:
let widthReduction;
let widthReductionInternal;
let widthReductionInternalTwo;
// using wRedInt for both LINE and TRIANGLE
let enemyWReductionAmount;
//need vars for enemyTwo's border-left & right for both img & shadow
//need vars for enemyTwo's left for both img & shadow
let enemyLeftIncreaseAmount;
let enemyBordLeftReductionAmount;
// do not need this as left & right are identical let enemyBordRightReductionAmount;
// do not need this either because it'll be identical to the above let enemyShadBordLeftReductionAmount;
// nor this let enemyShadBordRightReductionAmount;
// this will be identical to left of img up above ---> let enemyShadLeftIncreaseAmount;

//temp var for calculations below
let tempEnemyBordLeft;


let widthReductionHandler = function() {
    if (currentEnemy.name == "LINE") {
        //do nothing
    } else if (currentEnemy.name == "TRIANGLE") {
        //reduce border left, border right, and increase left position of Triangle img
        //reduce border left, border right, and increase left position of Triangle shadow
        // note that I am not using enemyBord!RIGHT! etc
        currentEnemy.position.bordLeft -= (enemyBordLeftReductionAmount/80);
        currentEnemy.position.bordRight -= (enemyBordLeftReductionAmount/80);
        currentEnemy.position.left += (enemyLeftIncreaseAmount/80);
        currentEnemy.position.shadBordLeft -= (enemyBordLeftReductionAmount/80);
        currentEnemy.position.shadBordRight -= (enemyBordLeftReductionAmount/80);
        currentEnemy.position.shadLeft += (enemyShadLeftIncreaseAmount/80);
        enemyTwoImg.style.borderLeft = currentEnemy.position.bordLeft + "px solid transparent";
        enemyTwoImg.style.borderRight = currentEnemy.position.bordRight + "px solid transparent";
        enemyTwoImg.style.left = currentEnemy.position.left + "px";
        enemyTwoShadow.style.borderLeft = currentEnemy.position.shadBordLeft + "px solid transparent";
        enemyTwoShadow.style.borderRight = currentEnemy.position.shadBordRight + "px solid transparent";
        enemyTwoShadow.style.left = currentEnemy.position.shadLeft + "px";
    }
}
// bottom of triangle shadow goes from 235px at its default initial pos (actually initial is 145)
// to 223px in its minimal pos (when SP is fully reduced)


let soulConstrictAnimation = function() {
    heroMoveReady = true;
    if (heroStaticReady == false) {
        soulConstrictAnimationRepeat = setTimeout(soulConstrictAnimation, 60);
    } else {
        //execute animation
        let soulConstrictAnimationNested = function() {
            console.log("soulConstrictAnimationNested starting")
            let enemyWidthReduce = function() {
                tempEnemyBordLeft = currentEnemy.position.bordLeft;
                // tempEnemyBordBottom = currentEnemy.position.height;
                enemyBordLeftReductionAmount = (((currentSoulConstrictDmg/currentEnemy.maxSP2) * currentEnemy.position.bordLeftOrig));
                enemyLeftIncreaseAmount = (((currentSoulConstrictDmg/currentEnemy.maxSP2) * 39));
                enemyShadLeftIncreaseAmount = (((currentSoulConstrictDmg/currentEnemy.maxSP2) * 38));
                widthReduction = function() {
                    //perform incremental reductions
                    console.log("running widthReduction")
                    widthReductionHandler();
                    if (currentEnemy.name == "LINE") {
                        //do nothing
                    } else if (currentEnemy.name == "TRIANGLE") {
                        if (!(currentEnemy.position.bordLeft <= (tempEnemyBordLeft - (enemyBordLeftReductionAmount/2)))) {
                            setTimeout(widthReduction, 12);
                        } else {
                            //if reached half width reduction, move to next function
                            widthReductionTwoInternal();
                        }
                        widthReductionTwoInternal = function() {
                            widthReductionHandler();
                            if (!(currentEnemy.position.bordLeft <= (tempEnemyBordLeft - enemyBordLeftReductionAmount))) {
                                setTimeout(widthReductionTwoInternal, 13);
                                //if reached full width (BB) reduction, stop repeating:
                            } else {
                                // if SP has been fully reduced, maintain a minimum 'width' of 2px
                                // if SP == 0, then make sure there remains a little thickness so you can see it
                                if (currentEnemy.position.bordLeft <= 0) {
                                    currentEnemy.position.bordLeft = 2;
                                    currentEnemy.position.bordRight = 2;
                                    currentEnemy.position.left = 216;
                                    currentEnemy.position.shadBordLeft = 2;
                                    currentEnemy.position.shadBordRight = 2
                                    currentEnemy.position.shadLeft = 213;
                                    enemyTwoImg.style.borderLeft = currentEnemy.position.bordLeft + "px solid transparent";
                                    enemyTwoImg.style.borderRight = currentEnemy.position.bordRight + "px solid transparent";
                                    enemyTwoImg.style.left = currentEnemy.position.left + "px";
                                    enemyTwoShadow.style.borderLeft = currentEnemy.position.shadBordLeft + "px solid transparent";
                                    enemyTwoShadow.style.borderRight = currentEnemy.position.shadBordRight + "px solid transparent";
                                    enemyTwoShadow.style.left = currentEnemy.position.shadLeft + "px";
                                }
                                heroMoveReady = false;
                            }
                        }
                    }
                }
                widthReduction();
            }()
        }()
    }
}




















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
        setTimeout(secondBattleStart, 500);
        // secondBattleStart();
    } else {
        gameplayArea.removeEventListener('click', levelUpProceed);
        //secondBattleStart() will run when all three battles are set up, but for now, I am just running:
        setTimeout(startClosingStory, 500);
    }
    // if I added additional story or world map, this section would change ^^^^^^
    // it then removes itself (the eventlistener for confirming the text was read from leveling up)  - should include clicks as well as touches on mobile
}

// function for leveling up which includes learning new moves
let levelUpKill = function() {
    console.log("level Up function running")
    hero.level++;
    // remove event listeners for all action buttons
    document.querySelector(".action1").removeEventListener('click', bash);
    document.querySelector(".action2").removeEventListener('click', soulCompress);
    document.querySelector(".action3").removeEventListener('click', rest);
    document.getElementsByClassName("action1")[1].removeEventListener('click', bash);
    document.getElementsByClassName("action2")[1].removeEventListener('click', soulCompress);
    document.getElementsByClassName("action3")[1].removeEventListener('click', rest);
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
    hero.level++;
    // remove event listeners for all action buttons
    document.querySelector(".action1").removeEventListener('click', bash);
    document.querySelector(".action2").removeEventListener('click', soulCompress);
    document.querySelector(".action3").removeEventListener('click', rest);
    document.getElementsByClassName("action1")[1].removeEventListener('click', bash);
    document.getElementsByClassName("action2")[1].removeEventListener('click', soulCompress);
    document.getElementsByClassName("action3")[1].removeEventListener('click', rest);
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
