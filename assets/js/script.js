// Wait for DOM content to load before running code

document.addEventListener("DOMContentLoaded", function() {
    //display default tab content
    document.getElementById('defaultOpen').click();
})

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
    event.currentTartget.className += ' active';
}