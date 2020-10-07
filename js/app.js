/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function navBarHelper(section){

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.dataset.anchor = section.getAttribute('id');
    
    a.textContent = section.dataset.nav;
    a.className = 'menu__link';
    li.appendChild(a);
    return li;

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navBarBuilder(){
    const fragment = document.createDocumentFragment();
    for(const section of sections){
        const li = navBarHelper(section);
        console.log(li);
        fragment.appendChild(li);
    }
    navList.appendChild(fragment);
}


// Add class 'active' to section when near top of viewport
function addActive(){
    for(const section of sections){
        const viewable = section.getBoundingClientRect();
        if (window.scrollY >= viewable.top){
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToAnchor(event){
    location.hash="#"+event.target.dataset.anchor;
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', navBarBuilder()); 

// Scroll to section on link click
navList.addEventListener('click', scrollToAnchor);

// Set sections as active
document.addEventListener('scroll', addActive);

