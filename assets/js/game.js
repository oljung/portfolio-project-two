//These variables need to be glodal and must be declared before DOM is loaded
//create the txt variable controlling narrator text
let txt = "";
//create the index variable, deciding if and what character to type to narrator box
let index = 0;
let speed = 100;

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
    }
}

/**
 * This funtion will type out the text one letter at the time, giving it a more retro feel.
 */
function textTyper() {
    timer = setInterval(addText, 100);
}

function addText() {
    if(index >= 0 && index < txt.length){
        textToAdd = txt;
        document.getElementById('narrator').innerHTML += textToAdd[index];
        index++;
    }
}

/**
 * Function for instantly filling hte narrator text box
 */
function fillNarratorText() {
    //stops the texttyper being called
    clearInterval(timer);
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
        locations[i].className = locations[i].className.replace('active-location', '');
    }

    //display the correct room and give it active-room class
    let locationImage = document.getElementById(targetRoom);
    locationImage.style.display = 'block';
    locationImage.className += ' active-room';

    //change the active location in the text box
    let activeLocation = document.getElementsByClassName(targetRoom)[0];
    activeLocation.className += ' active-location';

    //set text and display it
    setNarratorText();
    displayNarratorText();
}