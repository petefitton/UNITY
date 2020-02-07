# UNITY
### A game where there shall be only ONE!!1


PROPOSAL------------------------------------------------------------------------------------------------------

I want to make a grayscale, turn-based RPG game

Tech involved includes HTML, CSS, and JS. Most of the game's tech will deal with functions and objects as well as DOM queries.

The MVP is a start screen with a play game button followed by a short amount of story and then a single battle followed by a small amount of story + credits.
Further information can be expounded upon (game mechanics).
There will also be an options page on the start screen where you can mute audio for music and SFX. Audio will be sourced and the game will only be used for non-commercial purposes.

Stretch Goals in order of importance:

Mobile Friendly
Battle animations when taking actions
Second battle - including a new action for the protagonist (level up after 1st battle)
Battle only version of the game which skips the story, accessible after beating the game
Third battle - includes a fourth new action (level up after 2nd battle)
World Map
Create original audio/music
Playable with only arrow keys rather than mouse clicks (how can I make it more accessible? can I assign alt names to the action buttons in the battle in order to have action names listed out?)
Make a custom background for some of the scenes that moves

Wireframes:

![Wireframes](/img/Proj1Wireframes.jpeg)



Planning Stage --------------------------------------------------------------------------------------------------------


When getting started on Friday, Jan 31st, 2020, I spent a lot of that night and most of the next morning and afternoon writing a lot of text files on my computer about what I wanted to do.  As part of that process, I also wrote a lot of pseudocode and worked to organize the code in ways that made sense.

I started with HTML and built outwards with CSS and then JS.  I built some of the various scenes, such as the Title Screen, the Main Menu, and then the first battle.  I built the JS mostly from the first battle outwards, and made a full single-battle game before moving on to my stretch goals.


Game Functionality ------------------------------------------------------------------------------------------------------

The game uses HTML, CSS, and vanilla JS to manage everything.  Each battle can be won in two ways: by killing the enemy or reducing all of their soul points to zero.

Soul points is a mechanic that is tied to the characters' existence in multiple-dimensions.  For example, the protagonist (a sort of anti-hero) has 0 SP as he is effectively restricted to his zero dimensional universe.  The first enemy is a line which exists in a one-dimensional space, and the second enemy is a triangle which exists in a two-dimensional space.

There are basic attacks for each character as well as some defensive and offensive buffs as well as some recovery actions that heal GRIT and/or HP.

GRIT is a mechanic that plays the role of stamina in a typical RPG. Taking actions uses GRIT, so running out of GRIT requires a forced rest.

When an enemy's SP is reduced, JS manipulates the CSS to reduce the size of the enemy's image so that it appears as if the protagonist is restricting that enemy's dimensionality further and further into a zero-dimensional space.




Issues ------------------------------------------------------------------------------------------------------------------

The biggest common issue that I ran into was forgetting to remove some of the event listeners.  They are added and removed constantly, so it took some testing with console log's to figure out where exactly the event listeners were not getting removed.  All of those problems have been solved as far as I can tell.

I also had some glitches in animations.  I suspect they were occurring due to the way that JS handles timing.  I use a lot of setTimeouts in the game to make the battle's timing feel a bit more fluid, but I was having some issues where the animations would not be turned off if the player clicked too quickly to continue the battle.  I made some failsafe resets and placed them in the battle loops to aid with any glitches that do occur.

I also had some glitches in Infinite Mode (this feature is described further below).  I think these issues also were occurring because of some setTimeouts in addition to some things not being reset fully when switching between the various battles over and over.  I worked on it to add those additional initializations and attempted to fine-tune the setTimeouts as well.  It is also fixed as far as I can tell.



Features/Stretch Goals ---------------------------------------------------------------------------------------------------

MOBILE FIRST
The game was tested with Chrome's developer tools to check general mobile compatibility during the entire development process.  I am excited to see what the mobile experience is like and expect to learn a great deal after testing the game on a variety of mobile devices.


BATTLE ANIMATIONS
Each action in battle has a corresponding animation whether simply popping up an "icon" or changing the size of div's.  I also created a static animation for the hero that makes the battle feel a bit more dynamic while the player is deciding what action to take.


SECOND BATTLE
I was able to successfully create a second battle.  When I first got started on the second battle on the eve before the last full-day of work, I realized how much work would be involved in getting everything to a workable place, including the new animations for changing the size of the enemy div's when the hero uses the various soul attacks.  All of the calculations for the div's were different, especially because of the nature of the two enemy image div's - the line was made by having a solid white background while the triangle had zero width and height but was made visible by giving it a solid white bottom-border with transparent right- and left-borders.  These all required their own DOM queries and also had corresponding queries for the shadows.


INFINITE MODE
I was really happy to be able to fully implement Infinite Mode.  Infinite Mode unlocks when you fully beat the game.  It allows you to continue battling enemies indefinitely.  I have tested going through many battles and there do not seem to be any bugs even after playing many battles successively.

LEVEL UP
I was also able to implement a brief leveling up scene after defeating the first enemy.


Sources -----------------------------------------------------------------------------------------------------------------

Music was taken from "Monolith OST" and was made by ArcOfDream https://arcofdream.itch.io/monolith-ost

The SFX were taken from Pokemon Generation 1 and were made by BellBlitzKing https://bellblitzking.itch.io/pokemon-sound-collection

Small coding ideas were sourced from StackOverflow with some additional help from Sarah King and Anna Zocher.

Cursor found here: http://www.rw-designer.com

Icons from: https://game-icons.net/