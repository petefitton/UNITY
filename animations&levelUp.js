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

//animation between MainMenu and Options
// let titleScreenStyle = document.querySelector('.titleScreen').style;
// titleScreenStyle.opacity = 1;
// let titleScreenFade = function() {
//     titleScreenStyle.opacity -= .05;
//     if (titleScreenStyle.opacity <= 0) {
//         titleScreenStyle.display = "none";
//         setTimeout(showMainMenu, 240);
//     } else if (titleScreenStyle.opacity <= .5) {
//         setTimeout(titleScreenFade, 50);
//     } else if (titleScreenStyle.opacity <= .25) {
//         setTimeout(titleScreenFade, 40);
//     } else if (titleScreenStyle.opacity <= .15) {
//         setTimeout(titleScreenFade, 30);
//     } else {
//         setTimeout(titleScreenFade, 80);
//     }
// }

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
    // 'soul compress' SP damage - damages SP of enemy
let heightReduction;
let heightReductionInterval;
let heightReductionInternal;
let enemyHReductionAmount;
let enemyShadHReductionAmount;
let enemyShadBReductionAmount;
let enemyShadLReductionAmount;
let tempEnemyHeight;


let heightReductionHandler = function() {
    currentEnemy.position.height -= (enemyHReductionAmount/80);
    currentEnemy.position.shadHeight -= (enemyShadHReductionAmount/80);
    currentEnemy.position.shadBottom += (enemyShadBReductionAmount/80);
    currentEnemy.position.shadLeft += (enemyShadLReductionAmount/80);
    enemyImg.style.height = currentEnemy.position.height + "px";
    enemyShadow.style.height = currentEnemy.position.shadHeight + "px";
    enemyShadow.style.bottom = currentEnemy.position.shadBottom + "px";
    enemyShadow.style.left = currentEnemy.position.shadLeft + "px";
}


let soulCompressAnimation = function() {
    heroMoveReady = true;
    if (heroStaticReady == false) {
        soulCompressAnimationRepeat = setTimeout(soulCompressAnimation, 60);
    } else {
        //execute animation
        let soulCompressAnimationNested = function() {
            console.log("soulCompressAnimationNested starting")
            // function should change height of enemy
            let enemyHeightReduce = function() {
                // console.log("adding 1px to left")
                // enemyImg.height -= ((currentSoulCompressDmg/100) * 70);
                tempEnemyHeight = currentEnemy.position.height;
            // let tempEnemyShadHeight = currentEnemy.position.shadHeight;
            // let tempEnemyShadBottom = currentEnemy.position.shadBottom;
            // let tempEnemyShadLeft = currentEnemy.position.shadLeft;
                    // currentEnemy.position.height -= (((currentSoulCompressDmg/currentEnemy.maxSP) * currentEnemy.position.heightOrig));
                    // // as shadow gets smaller in height, it needs to increase in both bottom and left positions a little bit
                    //     // bottom increases by 38px over the full course of the SP damage
                    //     // left increases by 7px over the full course of the SP damage
                    // currentEnemy.position.shadHeight -= (((currentSoulCompressDmg/currentEnemy.maxSP) * currentEnemy.position.shadHeightOrig));
                    // currentEnemy.position.shadBottom += (((currentSoulCompressDmg/currentEnemy.maxSP) * 38));
                    // currentEnemy.position.shadLeft += (((currentSoulCompressDmg/currentEnemy.maxSP) * 8));
                enemyHReductionAmount = (((currentSoulCompressDmg/currentEnemy.maxSP) * currentEnemy.position.heightOrig));
                // as shadow gets smaller in height, it needs to increase in both bottom and left positions a little bit
                    // bottom increases by 38px over the full course of the SP damage
                    // left increases by 7px over the full course of the SP damage
                enemyShadHReductionAmount = (((currentSoulCompressDmg/currentEnemy.maxSP) * currentEnemy.position.shadHeightOrig));
                enemyShadBReductionAmount = (((currentSoulCompressDmg/currentEnemy.maxSP) * 38));
                enemyShadLReductionAmount = (((currentSoulCompressDmg/currentEnemy.maxSP) * 8));
                // if (currentEnemy.position.height <= 0) {
                //     currentEnemy.position.shadHeight = 0;
                //     currentEnemy.position.shadBottom = 0;
                //     currentEnemy.position.shadLeft = 0;
                // }
                // currentEnemy.position.height -= 0;
                // currentEnemy.position.shadHeight -= 0;
                // currentEnemy.position.shadBottom -= 0;
                // currentEnemy.position.shadLeft -= 0;
                heightReduction = function() {
                    //perform incremental reductions
                    console.log("running heightReduction")
                    heightReductionHandler();
                    if (!(currentEnemy.position.height <= (tempEnemyHeight - (enemyHReductionAmount/2)))) {
                        setTimeout(heightReduction, 12);
                    } else {
                        //if reached half height reduction, move to next function
                        heightReductionInternal();
                    }
                    heightReductionInternal = function() {
                        heightReductionHandler();
                        if (!(currentEnemy.position.height <= (tempEnemyHeight - enemyHReductionAmount))) {
                            //if reached full height reduction, stop repeating:
                            setTimeout(heightReductionInternal, 13);
                        } else {
                            heroMoveReady = false;
                        }
                    }
                }
                heightReduction();


                // enemyImg.style.height = currentEnemy.position.height + "px";
                // // as shadow gets smaller in height, it needs to increase in both bottom and left positions a little bit
                //     // bottom increases by 38px over the full course of the SP damage
                //     // left increases by 7px over the full course of the SP damage
                // enemyShadow.style.height = currentEnemy.position.shadHeight + "px";
                // enemyShadow.style.bottom = currentEnemy.position.shadBottom + "px";
                // enemyShadow.style.left = currentEnemy.position.shadLeft + "px";
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
    }
}
// enemyShadow.style.left = currentEnemy.position.shadLeft + "px";



let stabAnimation = function() {
    //slashing white line through circle
    heroMoveReady = true;
    if (heroStaticReady == true) {
        document.querySelector(".stabMarkContainer").style.display = "block";
        let stabDelay = function() {
            document.querySelector(".stabMarkContainer").style.display = "none";
            heroMoveReady = false;
        }
        setTimeout(stabDelay, 1300);
    } else {
        setTimeout(stabAnimation, 20);
    }
}



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
        secondBattleStart();
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
