// DOM References that I use frequently---------------------------------------------------------------------------






// variables and objects/arrays---------------------------------------------------------------------------

// battleCounter = 0 by default and increments each time a battle is called

// class object to use for creating all characters



// functions--------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------




// functions for character creation--------------------------------------------------------------------------------------------

// create protagonist object function
// create enemy1 object function
    // create enemy2 object function
    // create enemy3 object function


    


// functions for attacks/actions------------------------------------------------------------------------------------------------------


// individual functions for each attack/action
    // should turn off static animation functions -----> staticAnimOff()
    // should call battle action functions





// functions for moving between different screens--------------------------------------------------------------------------------------------


// function which hides all divs for going between each screen/scene

// function for showing all divs for title screen
    // the addEventListener for the click anywhere function on title screen  - should include clicks as well as touches on mobile
        // start playing audio and
        // should clear all divs function
        // removes the addeventlistener for click anywhere function
        // should run main menu screen start
// function for showing all divs for main menu screen
    // the addEventListener for the game start button  - should include clicks as well as touches on mobile
        // should clear all divs
        // and start opening story function
    // addevent listener for option button
        // should run function for going to option screen
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
    // not sure what divs should be here at the moment
    // will want to
// function for showing all divs for 1st battle screen
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
// battle action functions
    // bash - damages HP of enemy
    // maybe called 'soul compress' SP damage - damages SP of enemy
    // learned after 1st battle: block - reduces HP damage from enemy on that turn
    // learned after 1st battle: 'soul constrict' SP damage2D - damages SP of enemy in the second dimension
    // learned after 2nd battle: 'soul reduce' SP damage3D - damages SP of enemy in the second dimension
// staticAnimOff() function which turns off animation

// I will handle animations for line getting smaller with changes in the images, meaning that the action for reducing SP will call this function




// function for leveling up--------------------------------------------------------------------------------------------


// function for leveling up which includes learning new moves
    // end of 1st and 2nd battles should run level up function according to battleCounter variable
    //need divs in index.html for whatever level up stuff I want to show - maybe one larger div that goes in the center of the gameplay space
    // does NOT show a bar that increases
    // just checks to see who the current battleCounter variable is at and then levels up accordingly
    // if it's battle 1, then destroy enemy1's object and then run level up sequence
    // level up sequence function should pop up a div which says what move or moves you have learned
    // addeventlistener for confirming you have read the text which then calls:  - should include clicks as well as touches on mobile
        // clear all divs function
        // show all divs for battle 2 or 3 function according to what the current battle count is
            // if I added additional story or world map, this section would change ^^^^^^
        // it then removes itself (the eventlistener for confirming the text was read from leveling up)  - should include clicks as well as touches on mobile


// functions misc --------------------------------------------------------------------------------------------


// gameloop function during battle that detects if enemy is no longer alive
    // runs on a setInterval of every second
    // when dead, the setInterval stops and then runs level up function
    // I think it might be called breakInterval??



// DOMContentLoaded function
    // so likely the title screen load page function will run
