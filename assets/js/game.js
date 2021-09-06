let txt = "";

let index = 0;

//game logic related bools: These bool variables control much of the game's logic. Whenever an event that permanently changes the game takes place these variables will be changed
let spouse = true;
let tablet = false;
let needGroceries = false;
let findFluffy = false;
let gameEnd = false;



document.addEventListener("DOMContentLoaded", function() {
    //set default room
    roomChange('living-room');
    

    setNarratorText();

    displayNarratorText();
    
    //add event listener to narrator text box
    document.getElementsByClassName('narrator-text')[0].addEventListener('click', fillNarratorText);

    //add event listener to the enter key
    document.addEventListener('keyup', function(e) {
        if(e.key === 'Enter'){
            readInput();
        }
    });

    //add event listener to the execute button
    document.getElementById('execute').addEventListener('click', readInput);

    //add event listeners to the inputs clearing the text on focus
    let inputs = document.getElementsByClassName('action-input');
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].onfocus = function(){this.value = '';};
    }
});

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

    if(checkbox.checked === true || gameEnd){
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

    //use object to set txt based on room.id
    const message = {
        'living-room': 'You are standing in the living room, just minutes before your favourite "young people on a beach drama" show starts. There is an awful noise coming from the girl in the next room, you need to sort this or risk missing crucial information in the shows triangle drama...',
        'kitchen': 'You are standing in the kitchen, the fridge is giving off a soft humming noice and the smell of fried bacon still lingers from the lunch you just had',
        'girl-room': "You are standing in front of the girl's room, where pandemonium is taking place. Apparently the girl has lost something, and until it is recovered you will all suffer...",
        'boy-room': "You are standing in front of the boy's room, where an extremely angry boy is sitting on his bed. He seems to have just had a fight with both his sister and the other parent and is currently not allowing visitors"
    };
    txt = message[room.id];
}

/**
 * This funtion will type out the text one letter at the time, giving it a more retro feel.
 */
function textTyper() { // source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
    if(index >= 0 && index < txt.length) {
        document.getElementById('narrator').innerHTML += txt.charAt(index);
        index++;
        setTimeout(textTyper, 50);
    }
}

/**
 * Function for instantly filling the narrator text box
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
    let targetLower = target.value.toLowerCase();
    
    //determine what to do based on action value
    switch(actionLower) {
        case 'move':
            changeLocation(targetLower);
            break;
        case 'search':
            search(targetLower);
            break;
        case 'pick up':
            pickUpItem(targetLower);
            break;
        case 'give':
            giveItem(targetLower);
            break;
        case 'drop':
            dropItem(targetLower);
            break;
        case 'talk to':
            talkTo(targetLower);
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
        case "girl's room":
            roomChange('girl-room');
            break;
        case "boy's room":
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
        locations[i].style.textDecoration = 'none';
        
    }

    //display the correct room and give it active-room class
    let locationImage = document.getElementById(targetRoom);
    locationImage.style.display = 'block';
    locationImage.className += ' active-room';

    //change the active location in the text box
    let activeLocation = document.getElementsByClassName(targetRoom)[0];
    activeLocation.style.textDecoration = 'underline';

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
                    txt = "Your spouse is sitting on the couch scrolling on the phone. On the left side of the same couch is the boy's tablet and underneath the couch a doll is poking out its head";
                } else {
                    txt = "Your spouse has left to shop for groceries and has vacated the couch, leaving only a pile of blankets.";
                }
                break;
            case 'kitchen':
                txt = 'The kitchen is clean, bordering spotless. This reminds you that as long as the dishes are out of the way, the spouse will make every inch of the place sparkling. Most often the fridge is also well stocked...';
                break;
            case 'girl-room':
                txt = "The screaming that the girl makes is unbearable. You don't think you can survive this long enough to do a proper search. All you can hear is fluffy, the name of her new hideous stuffed animal";
                break;
            case 'boy-room':
                //if the boy is not yet distracted by tablet
                if(!tablet) {
                    txt = 'The boy is extremely upset at the moment and refuses to let you enter. It apears that you must distract him somehow if you are to search his room';
                } else {
                    txt = 'After distracting the boy with his tablet you are able to better search the room. You manage to find your new sunglasses that cost way more than reasonable, bent and broken on the floor. There is also a trail of something fluffy leading towards the closet';
                }
                break;
        }
        //to search the fridge player must be located in the kitchen
    } else if(item === 'fridge' && room.id === 'kitchen') {
        //if spouse is still present
        if(!needGroceries) {
            txt = 'You are surprised to find the fridge nearly empty, even though your spouse was supposed to have shopped for groceries yesterday. There are certainly questions that needs ansers here';
            needGroceries = true;
        } else {
            txt = 'No, nothing has magically appeared since last you looked. Atleast it is being taken care of now';
        }
    } else if(item === 'blankets' && room.id === 'living-room') {
        if(spouse) {
            txt = 'Your spouse is cuddled up nicely in those blankets and is not to keen on you rummaging about';
        } else {
            txt = 'The blankets are still warm, and after searching through then you find the phone your spouse left for some reason, with the flashlight mode on';
        }
    } else if(item === 'closet' && room.id === 'boy-room') {
        if(tablet) { //the boy is distracted
            //check if player has a "light"
            light = checkLight();
            if(light) {
                txt = 'The phone gives off sufficient light to search the closet. Under some towels you find "fluffy" somewhat beaten up, but you hope the girl will be happy regardless';
                findFluffy = true;
            } else { //if not light
                txt = 'The closet is way to dark, and you curse yourself for not changing that lightbuld ages ago, as you know you should have';
            }
        } else { //boy is not distracted
            txt = 'The boy refuses to let you enter the room, not even to search the closet';
        }
    } else { //not a valid item to search
        txt = `You can not search that, either you are in the wrong location, or there is nothing special about it, or "${item}" simply doesn't exist`;
    }
    displayNarratorText();
}

/**
 * This function handles all the item pick ups depending on what room the player is in
 * @param {the item the player is attempting to pick up} item 
 */
function pickUpItem(item) {

    let inventory = document.getElementById('inventory');
    

    room = document.getElementsByClassName('active-room')[0];

    //if the player is not holding an item
    if(inventory.innerText === 'empty') {
        //different outcomes based on location
        switch(room.id) {
            case 'living-room':
                //trying to pick up tablet
                if(item === 'tablet') {
                    //if spouse is present
                    if(spouse) {
                        txt = 'Your spouse looks up at you as you try to grab the tablet: "I thought we agreed his time on that thing was out for today?" The tablet is staying where it is';
                    } else {
                        txt = 'With the spouse gone, there is nothing stopping you from taking the tablet to use for whatever you find suitable.';
                        inventory.innerText = item;
                    }
                } else if(item === 'doll') {
                    txt = "You pick up what used to be the girl's favourite doll. Perhaps this will calm her down?";
                    inventory.innerText = item;
                } else if(item === 'phone') {
                    if(spouse) {
                        txt = "As you try to grab the phone from your spouse's hands, your spouse grips the phone harder. In your contest for the phone it slips, hits the floor and breaks. Instead of watching half-naked, attractive young people on a beach you aren now shopping for a phone.";
                        gameOver();
                    } else {
                        txt = 'You pick up the phone, nearly blinding yourself from the intense shine of the flashlight function';
                        inventory.innerText = item;
                    }
                } else {
                    txt = 'You are unable to locate that item here';
                }
                break;
            case 'boy-room':
                //if boy is distracted
                if(tablet) {
                    //trying to pick up fluffy
                    if(item === 'fluffy') {
                        //the player has found fluffy
                        if(findFluffy) {
                            txt = "Finally, you hold the hideous creature known as fluffy in your hands. If this doesn't calm the girl down, nothing will";
                            inventory.innerText = item;
                        } else { //not located fluffy
                            txt = "You still havn't located fluffy, so obviously you can't pick it up...";
                        }
                    } else if (item === 'sunglasses') {
                        txt = 'These were some damn cool shades! Hopefully they can still be salvaged, you think to yourself as you make a mental note not to leave expensive stuff around the house';
                        inventory.innerText = item;
                    } else {
                        txt = 'You are unable to locate that item here';
                    }
                } else { //boy won't let you in
                    txt = 'There is just no way to enter that room right now and live to tell the tale';
                }
                break;
            default:
                txt = 'There is nothin here to pick up';
        }
    } else { //inventory is not empty, no items will be picked up
        txt = 'You are currently holding an item. You must drop that first before you can pick up a new one';
    }
    displayNarratorText();
}

/**
 * This function checks if the player is holding the phone, thus having light to see in dark rooms
 */
function checkLight() {
    let light = false;
    //get the inventory element
    let inventory = document.getElementById('inventory');
    //check the value of inventory's text
    if(inventory.innerText === 'phone') {
        light = true;
    }
    return light;
}

/**
 * This function is used to handle when a player tries to give an item. It will have different outcomes based on location and item in question
 * @param {item to give, if possible} item 
 */
function giveItem(item) {
    //get information about current item
    let inventory = document.getElementById('inventory');

    //get information about the current location
    let room = document.getElementsByClassName('active-room')[0];
    
    //check if the player is carrying an item
    if(inventory.innerText !== 'empty') { //inventory is not empty determine what happens based on location and item to give
        if(item === inventory.innerText) {
            //handle the rooms differently
            switch(room.id) {
                case 'girl-room':
                    if(item === 'fluffy') {
                        txt = "The girl's face lights up in excitement as she reaches for the monstrosity. The shrieking is abruptly ended as the girl hugs her fluffy. And just in time for the alcohol infused drama on the beach to begin";
                        inventory.innerText = 'empty';
                        gameWon();
                    } else {
                        txt = `The girl gives off an even higher shriek and throws the ${item} at your face. You hear a crunching noise as your nose breaks and you realize you will be spending the night at the ER rather than watching those young people get into trouble`;
                        inventory.innerText = 'empty';
                        gameOver();
                    }
                    break;
                case 'boy-room':
                    if(item === 'tablet') {
                        txt = "The boy's sullen expression lights up as he sees his tablet. He quickly grabs it then hides under the covers and all that is left to identify him is a mound on the bed giving of gaming sounds";
                        inventory.innerText = 'empty';
                        tablet = true;
                    } else {
                        txt = `The boy doesn't want the ${item}. He refuses to take it and glares angrily at you`;
                    }
                    break;
                case 'living room':
                    if(spouse) {
                        txt = 'Your spouse does not want anything from you at the moment';
                    } else {
                        txt = 'There is no one here to give an item to...';
                    }
                    break;
                default:
                    txt = 'There is no one here to give an item to...';
            }
        } else { //item to give does not match inventory item
            txt = 'You are not currently holding that item';
        }
    } else { //inventory is emtpy
        txt = 'You have no item to give';
    }
    displayNarratorText();
}

/**
 * This function will let the user drop whatever item is carried
 * @param {the item to drop} item 
 */
function dropItem(item) {
    //get information on inventory status
    let inventory = document.getElementById('inventory');

    //check inventory
    if(inventory.innerText === 'empty') {
        txt = ' You are not carrying anything and have nothing to drop';
    } else { //user has an item
        if(item === inventory.innerText) { //if user input is the same as item in inventory
            txt = `You drop the ${item} on the ground. Don't worry, if you need it again it will have magically reappeared where you first found it.`;
            inventory.innerHTML = 'empty';
        } else { //user input does not match item in inventory
            txt = `You are not holding ${item}. You can't drop something you don't have`; 
        }
    }
    displayNarratorText();
}

/**
 * Function for handling the talk to action, giving different results based on who is present in the location
 * @param {the character to talk to} character 
 */
function talkTo(character) {
    //get current location
    let room = document.getElementsByClassName('active-room')[0];
    //handle cases for room.id
    switch(room.id) {
        case 'living-room':
            if(!spouse) {//if spouse is not present
                txt = "There is no one here to talk to and while some find talking to inanimate objects endearing, it really isn't";
            } else { //spouse is still present
                if(character === 'spouse') { //player tries to talk to spouse
                    //check if player knows groceries are needed
                    if(needGroceries) {
                        txt = 'As you mention there are no groceries, your spouse finally stops scrolling the phone, offers up plenty of excuses and leaves for the supermarket';
                        spouse = false;
                    } else {
                        txt = 'Your spouse is scrolling on the phone with deep concentration, mostly humming in response to anything you say';
                    }
                } else {//the player tries to talk to someone other than spouse
                    txt = `${character} is not here, you can only talk to someone who is present`;
                }
            }
            break;
        case 'girl-room':
            if(character === 'girl') {
                txt = "The girl is to upset and doesn't even notice you trying to talk to her";
            } else {//tries to talk to someone who isn't there
                txt = `${character} is not here, you can only talk to someone who is present`;
            }
            break;
        case 'boy-room':
            if(character === 'boy') {
                //check if boy has tablet
                if(tablet) {
                    txt = 'The boy is to focused on the games on his tablet to even notice you';
                } else { //boy does not have tablet
                    txt = 'The boy looks at you with fire in his eyes, and anything you say is met with the mumbling of "I want my tablet!"';
                }
            } else {
                txt = `${character} is not here, you can only talk to someone who is present`;
            }
            break;
        default:
            txt = "There is no one here to talk to and while some find talking to inanimate objects endearing, it really isn't";
    }
    displayNarratorText();
}

function gameOver() {
    gameEnd = true;
    setTimeout(function() {
        document.getElementById('game-lost').style.display = 'block';
    }, 10000);
}

function gameWon() {
    gameEnd = true;
    setTimeout(function() {
        document.getElementById('game-won').style.display = 'block';
    }, 10000);
}