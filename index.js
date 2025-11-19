//-- EXPANDABLES LOGIC --
document.body.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable-title-bar");
    const expandable = ev.target.closest(".expandable");

    if (!isExpandableTitle) {
        return;
    }

    expandable.classList.toggle("expandable--open");
});


//-- NAVBAR FUNCTIONALITY --
window.onscroll = function() {scrollFunction()};

const navBar = document.getElementById("universal-nav");
if (navBar) {
    navBar.onmouseover = function() { hoverExpand() };
    navBar.onmouseout = function() { hoverCollapse() };
}

//scroll logic
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        //adjust navbar size
        document.getElementById("universal-nav").style.padding = "5px 22vh 5px 18vh";

        //fade out
        document.getElementById("xndr").style.opacity = "0";
        document.getElementById("navbar").style.opacity = "0";

        //hide after fade
        document.getElementById("xndr").style.visibility = "hidden";
        document.getElementById("navbar").style.visibility = "hidden";

        //reset display property
        document.getElementById("xndr").style.display = ""; 
        document.getElementById("navbar").style.display = "";
    } else {
        //adjust navbar size
        document.getElementById("universal-nav").style.padding = "2vh 22vh 2vh 18vh";

        //fade in
        document.getElementById("xndr").style.opacity = "1";
        document.getElementById("navbar").style.opacity = "1";

        document.getElementById("xndr").style.visibility = "visible";
        document.getElementById("navbar").style.visibility = "visible";

        //reset display property
        document.getElementById("xndr").style.display = "flex"; 
        document.getElementById("navbar").style.display = "flex";
    }
}

//hover logic
function hoverExpand() {
    // check if the page is scrolled down
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        // TEMPORARILY EXPAND NAV BAR
        navBar.style.padding = "2vh 22vh 2vh 18vh";
        
        // TEMPORARILY SHOW content (FADE IN)
        document.getElementById("xndr").style.visibility = "visible";
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("xndr").style.opacity = "1";
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("xndr").style.display = "flex";
        document.getElementById("navbar").style.display = "flex";
    }
}

function hoverCollapse() {
    // Check if the page is scrolled down
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        // RETURN TO SHRUNKEN STATE
        navBar.style.padding = "5px 22vh 5px 18vh";
        
        // HIDE content (FADE OUT)
        document.getElementById("xndr").style.opacity = "0";
        document.getElementById("navbar").style.opacity = "0";
        document.getElementById("xndr").style.visibility = "hidden";
        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("xndr").style.display = ""; 
        document.getElementById("navbar").style.display = ""; 
    }
}

// -- SCROLL BUTTON LOGIC --
document.addEventListener('DOMContentLoaded', () => {
    const openingButton = document.getElementById('opening-button');
    
    // get the target section
    const introSection = document.querySelector('.intro');

    // check to ensure both elements exist on the page
    if (openingButton && introSection) {

        openingButton.addEventListener('click', (event) => {
            // prevent the default anchor link behavior (which would cause a jump/page reload)
            event.preventDefault(); 
            
            // scroll the 'introSection' into view smoothly
            introSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contact-button');
    
    // get the target section
    const contactSection = document.querySelector('.contact-wrapper');

    // check to ensure both elements exist on the page
    if (contactButton && contactSection) {

        contactButton.addEventListener('click', (event) => {
            // prevent the default anchor link behavior (which would cause a jump/page reload)
            event.preventDefault(); 
            
            // scroll the 'introSection' into view smoothly
            contactSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});