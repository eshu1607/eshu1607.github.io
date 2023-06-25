// SMOOTH SCROLL

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0; i<navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        interval = setInterval(scrollVertically, 1, targetSection);
    });
}
var prev;
function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    if(prev == targetSectionCoordinates.top){
        clearInterval(interval);
        return;
    }
    prev=targetSectionCoordinates.top;
    window.scrollBy(0, 40);
}


// PROGRESS BAR

var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById("skills-container");
window.addEventListener('scroll', checkScroll);
var animationDone = false;
function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}
for (var bar of progressBars) {
    initialiseBar(bar);
}
function fillBar(bar) {
    var currentWidth = 0;
    var interval = setInterval(function () {
        if (currentWidth >= bar.getAttribute("data-bar-width")) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);
}
function checkScroll() {
    for(let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if((bar.getAttribute("data-visited") == "false") && (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        }
        else if(barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }
    }
}



