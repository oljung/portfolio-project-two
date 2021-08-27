// Wait for DOM content to load before running code

document.addEventListener("DOMContentLoaded", function() {
    //create the txt variable controlling narrator text
    let txt = "";
    //create the index variable, deciding if and what character to type to narrator box
    let index = 0;
    //decide the text to print
    setNarratorText();
    //display the text
    displayNarratorText();
    
})

/**
 * This function is called whenever the game needs to change the text in the narrator textbox
 */
function displayNarratorText(){
    //get the checkbox to check its value
    let checkbox = document.getElementById('auto-complete');
    
    //determine status if checkbox
    if(checkbox.checked === true){
        document.getElementById('narrator').innerHTML = txt;
    } else {
        textTyper();
    }
}

/**
 * This function is called to set narrator text based on the current room, and what has happened in said room
 */
function setNarratorText(){

}

/**
 * This funtion will type out the text one letter at the time, giving it a more retro feel.
 */
function textTyper() {
    if(index >= 0 && index < txt.length){
        document.getElementById('narrator').innerHTML += txt[i];
        index++;
        setTimeout(textTyper(), 100);
    }
}