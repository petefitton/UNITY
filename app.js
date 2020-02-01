// how do I want to handle animations?
//     static animation vs battle action animation
//     static = probably JS with some random activity that bounds back to center fairly quickly (small movements and at random intervals)
//     battle action = probably JS too
// DOM References that I use frequently---------------------------------------------------------------------------






// variables and objects/arrays---------------------------------------------------------------------------

// battleCounter = 0 by default and increments each time a battle is called

// class object to use for creating all characters



// functions--------------------------------------------------------------------------------------------

// create protagonist object function
// create enemy1 object function
    // create enemy2 object function
    // create enemy3 object function

// individual functions for each attack/action
    // should turn off static animation functions -----> staticAnimOff()
    // should call battle action functions



// function which hides all divs for going between each screen/scene

// function for showing all divs for title screen/scene
// function for showing all divs for main menu screen/scene
// function for showing all divs for options screen/scene
    //this function shouldn't erase hide background as it should be seamless (should not run hide all divs)
    // should just hide necessary info from main menu screen
    // and unhide necessary info for options screen
    // remove event listeners for start game and options buttons
    // add event listener to return button
// return button function should do opposite of the above
    //this function shouldn't erase hide background as it should be seamless (should not run hide all divs)
    // should just hide necessary info from options screen
    // and unhide necessary info for main menu screen
    // remove event listener to return button
    // add event listeners for start game and options buttons
// function for showing all divs for 1st battle screen/scene
    // increments battleCounter by one
    // 3 battles should call the static animation functions
    // don't know what 3 battles above means
    // should also call the create Crawler function to create the enemy with name enemy1
    // if level of hero is == 2, then show new two moves
    // if level of hero is == 3, then show all five moves
    // start gameloop function
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



// static animation function during battles on a set interval
// battle action functions
    // bash - damages HP of enemy
    // maybe called 'soul compress' SP damage - damages SP of enemy
    // learned after 1st battle: block - reduces HP damage from enemy on that turn
    // learned after 1st battle: 'soul constrict' SP damage2D - damages SP of enemy in the second dimension
    // learned after 2nd battle: 'soul reduce' SP damage3D - damages SP of enemy in the second dimension
// staticAnimOff() function which turns off animation

// I will handle animations for line getting smaller with changes in the images, meaning that the action for reducing SP will call this function


// function for going to option screen
// function for going back from option screen to the main menu screen

// function for leveling up which includes learning new moves
    // end of 1st and 2nd battles should run level up function according to battleCounter variable
    //need divs in index.html for whatever level up stuff I want to show - maybe one larger div that goes in the center of the gameplay space
    // does NOT show a bar that increases
    // just checks to see who the current battleCounter variable is at and then levels up accordingly
    // if it's battle 1, then destroy enemy1's object and then run level up sequence
    // level up sequence function should pop up a div which says what move or moves you have learned
    // addeventlistener for confirming you have read the text which then calls:
        // clear all divs function
        // show all divs for battle 2 or 3 function according to what the current battle count is
            // if I added additional story or world map, this section would change ^^^^^^
        // it then removes itself (the eventlistener for confirming the text was read from leveling up)


// gameloop function during battle that detects if enemy is no longer alive
    // runs on a setInterval of every second
    // when dead, the setInterval stops and then runs level up function
    // I think it might be called breakInterval??

// function for gameReset which executes once the game finishes and starts the game over without having to reload the page
    // all things should be initialized including the hero and all enemies
    // destroyed/removed as necessary

// title screen click anywhere function will
    // start playing audio and
    // run the hide all divs function
    // and run main menu show divs function

// DOMContentLoaded function
// these might be put into a different function since the game will start with the title screen rather than the main menu
    // the addEventListener for the game start button
    // the addEventListener for the options button
// so likely the title screen load page function will run
    // the addEventListener for the click anywhere function on title screen
