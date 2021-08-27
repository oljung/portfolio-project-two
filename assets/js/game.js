//These variables need to be glodal and must be declared before DOM is loaded
//create the txt variable controlling narrator text
let txt = "";
//create the index variable, deciding if and what character to type to narrator box
let index = 0;
let speed = 100;

// Wait for DOM content to load before running code
document.addEventListener("DOMContentLoaded", function() {
    //set default room and add active to classlist
    let defaultRoom = document.getElementById('living-room');
    defaultRoom.style.display = 'block';
    defaultRoom.className += ' active';
    
    //decide the text to print
    setNarratorText();
    //display the text
    displayNarratorText();
    
    //add event listener to complete text button
    document.getElementsByClassName('complete-button')[0].addEventListener('click', fillNarratorText);
})

/**
 * This function is called whenever the game needs to change the text in the narrator textbox
 */
function displayNarratorText(){
    //get the checkbox to check its value
    let checkbox = document.getElementById('auto-complete');
    textTyper();
    
    //determine status if checkbox
    /*if(checkbox.checked === true){
        fillNarratorText();
    } else {
        textTyper();
    }*/
}

/**
 * This function is called to set narrator text based on the current room, and what has happened in said room
 */
function setNarratorText(){
    index = 0;
    let room = document.getElementsByClassName('active')[0];
    if(room.id === 'living-room'){
        txt = 'You are standing in the living room...'
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
    index = -1;
    document.getElementById('narrator').innerHTML = txt;
}