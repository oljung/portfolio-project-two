//These variables need to be glodal and must be declared before DOM is loaded
//create the txt variable controlling narrator text
let txt = "";
//create the index variable, deciding if and what character to type to narrator box
let index = 0;
//create timer that handles textTyper function
let timer;

//game logic related bools: These bool variables control much of the game's logic. Whenever an event that permanently changes the game takes place these variables will be changed
let spouse = true;
let tablet = false;
let needGroceries = false;
let light = false;


// Wait for DOM content to load before running code
document.addEventListener("DOMContentLoaded", function() {
    //set default room
    roomChange('living-room');
    
    //decide the text to print
    setNarratorText();
    //display the text
    displayNarratorText();
    
    //add event listener to complete text button
    document.getElementsByClassName('complete-button')[0].addEventListener('click', fillNarratorText);

    //add event listener to the enter key
    document.addEventListener('keyup', function(e) {
        //check if Enter was pressed
        if(e.key === 'Enter'){
            readInput();
        }
    })
})

/**
 * This function is called whenever the game needs to change the text in the narrator textbox
 */
function displayNarratorText(){
    //reset the character counter
    index = 0;
    
    //reset textToAdd string
    textToAdd = '';

    //clear the narrator text box for new input
    document.getElementById('narrator').innerHTML = '';
    
    //get the checkbox to check its value
    let checkbox = document.getElementById('auto-complete');
    //determine status if checkbox
    if(checkbox.checked === true){
        fillNarratorText();
    } else {
        textTyper();
    }
}

/**
 * This function is called to set narrator text based on the current room, and what has happened in said room
 */
function setNarratorText(){
    let room = document.getElementsByClassName('active-room')[0];
    if(room.id === 'living-room'){
        txt = 'You are standing in the living room...';
    } else if(room.id === 'kitchen') {
        txt = 'You are standing in the kitchen';
    } else if(room.id === 'girl-room') {
        txt = "You are standing in the girl's room";
    } else if(room.id === 'boy-room') {
        txt = "You are standing in the boy's room";
    }
}

/**
 * This funtion will type out the text one letter at the time, giving it a more retro feel.
 */
function textTyper() { // source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
    if(index >= 0 && index < txt.length) {
        document.getElementById('narrator').innerHTML += txt.charAt(index);
        index++;
        setTimeout(textTyper, 100);
    }
}

/*function addText() {
}*/

/**
 * Function for instantly filling hte narrator text box
 */
function fillNarratorText() {
    //stops the texttyper being called
    index = -1;
    //fills box with txt string
    document.getElementById('narrator').innerHTML = txt;
}

/**
 * Function for reading input from user and handling that input, changing the game or displaying error message if needed
 */
function readInput(){
    //get the input from action-input
    let action = document.getElementById('action');

    //get the input from target
    let target = document.getElementById('target');
    
    //change all digits to lower case, in case user used capital letters somewhere
    let actionLower = action.value.toLowerCase();
    
    //determine what to do based on action value
    switch(actionLower) {
        case 'move':
            changeLocation(target.value);
            break;
        case 'search':
            search(target.value);
            break;
        default:
            txt = 'That is not a valid action';
            displayNarratorText();
    }
}

/**
 * Function used to handling the move action
 */
function changeLocation(room) {
    //test the value of room and sends user to the correct room, or displays error message
    switch(room) {
        case 'living room':
            roomChange('living-room');
            break;
        case 'kitchen':
            roomChange(room);
            break;
        case 'girl room':
            roomChange('girl-room');
            break;
        case 'boy room':
            roomChange('boy-room');
            break;
        default:
            txt = 'That is not a valid location';
            displayNarratorText();
    }
}

/**
 * This function will change the main image and update the locations window with the currently active room then set and display text
 */
function roomChange(targetRoom) {
    //change display of all rooms to none and remove active room
    let rooms = document.getElementsByClassName('main-image');
    for(let i = 0; i < rooms.length; i++) {
        rooms[i].style.display = 'none';
        rooms[i].className = rooms[i].className.replace('active-room', '');
    }

    //remove "active" from the location in the locations text box
    let locations = document.getElementsByClassName('room');
    for(let i = 0; i < locations.length; i++) {
        locations[i].style.textDecoration = 'none'
        
    }

    //display the correct room and give it active-room class
    let locationImage = document.getElementById(targetRoom);
    locationImage.style.display = 'block';
    locationImage.className += ' active-room';

    //change the active location in the text box
    let activeLocation = document.getElementsByClassName(targetRoom)[0];
    activeLocation.style.textDecoration = 'underline';

    //set text and display it
    setNarratorText();
    displayNarratorText();
}
/**
 * This function will handle all the areas possible to search as well as specific locations in some rooms
 * @param {the item to search, passed as the target.value from input} item 
 */

function search(item) {
    //if target is room, meaning the player is searching room not item
    room = document.getElementsByClassName('active-room')[0];
    if(item === 'room'){
        switch(room.id) {
            case 'living-room':
            //if spouse is still present    
            if(spouse) {
                    txt = "Your spouse is sitting on the couch scrolling on the phone. On the left side on the same couch is the boy's tablet and underneath the couch a doll is poking out its head";
                } else {
                    txt = "Your spouse has left to shop for groceries and has vacated the couch, leaving only a pile of blankets."
                }
                break;
            case 'kitchen':
                txt = 'The kitchen is clean, bordering spotless. This reminds you that as long as the dishes are out of the way, the spouse will make every inch of the place sparkling. Most often the fridge is also well stocked...'
                break;
            case 'girl-room':
                txt = "The screaming that the girl makes is unbearable. You don't think you can survive this long enough to do a proper search. All you can hear is fluffy, the name of her new hideous stuffed animal";
                break;
            case 'boy-room':
                //if the boy is not yet distracted by tablet
                if(!tablet) {
                    txt = 'The boy is extremely upset at the moment and refuses to let you enter. It apears that you must distract him somehow if you are to search his room';
                } else {
                    txt = 'After distracting the boy with his tablet you are able to better search the room. You manage to find your new sunglasses that cost way more than reasonable, bent and broken on the floor. There is also a trail of something fluffy leading towards the closet'
                }
                break
        }
        //to search the fridge player must be located in the kitchen
    } else if(item === 'fridge' && room.id === 'kitchen') {
        //if spouse is still present
        if(!needGroceries) {
            txt = 'You are surprised to find the fridge nearly empty, even though your spouse was supposed to have shopped for groceries yesterday. There are certainly questions that needs ansers here';
            needGroceries = true;
        } else {
            txt = 'No, nothing has magically appeared since last you looked. Atleast it is being taken care of now'
        }
    } else if(item === 'blankets' && room.id === 'living-room') {
        if(spouse) {
            txt = 'Your spouse is cuddled up in those blankets and is not to keen on you rummaging about';
        } else {
            txt = 'The blankets are still warm, and after searching through then you find your the phone your spouse left for some reason, with the flashlight mode on';
        }
    } else if(item === 'closet' && room.id === 'boy-room') {
        if(tablet) { //the boy is distracted
            if(light) {
                txt = 'The phone gives off sufficient light to search the closet, under some towels you find "fluffy" somewhat beaten up, but you hope the girl will be happy regardless';
            } else { //if not light
                txt = 'The closet is way to dark, and you curse yourselft for not changing that lightbuld ages ago, as you know you should have';
            }
        } else { //boy is not distracted
            txt = 'The boy refuses to let you enter the room, not even to search the closet';
        }
    } else { //not a valid item to search
        txt = `You can not search that, either you are in the wrong location, or there is nothing special about "${item}"`;
    }
    displayNarratorText();
}