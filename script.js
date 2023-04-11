'use strict';
//provides errors

const switcher = document.querySelector('.btn');
//pulls css .btn reference and links to JS switcher

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
//adds event handler (function) for click event
     const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark Mode";
    } else {
        this.textContent = "Light Mode";
    }
//if statement determines what to do if already on certain theme

console.log('current class name: ' + className);
//adds hidden message in webpage that can be read in developer tools - tells developer what theme is currently running
});
//


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}