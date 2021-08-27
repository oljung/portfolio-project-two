// Wait for DOM content to load before running code

document.addEventListener("DOMContentLoaded", function() {
    //display default tab content
    document.getElementById('defaultOpen').click();

    //add eventlisteners to the images to enlarge
    let images = document.getElementsByClassName('modal-image');
    for(let i = 0; i < images.length; i++){
        images[i].addEventListener('click', displayModal);
    }
})

/**
 * 
 * @param {contains information about what was clicked} event 
 * @param {ID of the tab to display} tabName 
 * Function used for displaying the correct content based on what tab was clicked. Will also set clicked tab as active and remove the currently displayed content
 */
function displayContent(event, tabName){
    //declare variables
    let i, tabcontent, tablinks;

    // Hide all the content currently visible
    tabcontent = document.getElementsByClassName('tabcontent');
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }

    // Remove active class from tab
    tablinks = document.getElementsByClassName('tablinks');
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace('active', '');
    }

    // Show the tab that was clicked

    document.getElementById(tabName).style.display = 'inline-block';
    event.currentTarget.className += ' active';
}

/**
 * Function used to display modal with an enlarged version of an image that has been clicked
 */
function displayModal(){
    //get the modal
    let modal = document.getElementById('myModal');
    //get the modal image (the large image)
    let modalImg = document.getElementsByClassName('modal-content')[0];
    //display modal and set img src to the same as the image clicked
    modal.style.display = 'block';
    modalImg.src = this.src;

    //add listener to the "close" button
    let close = document.getElementsByClassName('close')[0]
    close.onclick = function(){
        modal.style.display = 'none';
    }
}