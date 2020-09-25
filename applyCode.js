//Ignore this
function sleep (time) {return new Promise((resolve) => setTimeout(resolve, time));}
//Ignore this

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ CSS Styling
(() => {
function applyStyles() {

const linkElem = document.createElement("link");
linkElem.rel = "stylesheet"

if (location.href.match(/view_all_playlists/)) {
linkElem.href = chrome.runtime.getURL("styles/Style1.css");
} 


else {
linkElem.href = chrome.runtime.getURL("styles/Style2.css");


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Repeat Button
var video, controls;
var play = false;
var repeater, repeatButton, repeatButtonIcon;
var icon, iconActive;
var run = 1;


trySetup = setTimeout(setup, 500);

//Check if video and controls have been loaded
function setup(){
if(run++ < 7){
video = document.getElementsByClassName("video-stream html5-main-video")[0];
controls = document.getElementsByClassName("ytp-chrome-controls")[0];
if(video != undefined && controls.children.length > 0) {
addButton();
video.onended = () => { if(play == true) video.play(); };
}
else
{
trySetup = setTimeout(setup, 100);
}
}
}


//Add button to the video controls and listeners for the button
function addButton(){
icon = chrome.extension.getURL("images/RepeatOff.png");
iconActive = chrome.extension.getURL("images/RepeatOn.png");

//Create button and icon
repeatButton = document.createElement("button");
repeatButton.setAttribute("class", "ytp-size-button ytp-button");
repeatButton.setAttribute("role", "button");
repeatButton.setAttribute("aria-haspopup", true);

repeatButtonIcon = document.createElement("img");
repeatButtonIcon.style.float = "right";
repeatButtonIcon.src = icon;

//Create tooltip
var tooltip = document.createElement("div");
tooltip.className = "ytp-tooltip  ytp-bottom";
tooltip.style.display = "none";

var wrapper = document.createElement("div");
wrapper.className = "ytp-tooltip-text-wrapper";

var span = document.createElement("span");
span.className = "ytp-tooltip-text";
span.innerHTML = "Repeat";

//Position
var position = document.getElementsByClassName("ytp-storyboard")[0];
wrapper.appendChild(span);
tooltip.appendChild(wrapper);
document.getElementById("movie_player").insertBefore(tooltip, position);

repeatButton.appendChild(repeatButtonIcon);
var container = document.getElementsByClassName("ytp-right-controls")[0];
container.insertBefore(repeatButton, container.firstChild);

//EventListener
//-------------------------------------------------------------------
repeatButton.addEventListener("click", () => {
play = !play;
if(play) {
repeatButtonIcon.src = iconActive;
video.setAttribute("loop", true);
}
else {
repeatButtonIcon.src = icon;
video.removeAttribute("loop", true);
}
});
//-------------------------------------------------------------------
repeatButton.addEventListener("mouseover", () => {
var videoHeight = parseInt(document.getElementsByClassName("video-stream html5-main-video")[0].style.height, 10);
tooltip.style.left = repeatButton.offsetLeft + "px";
tooltip.style.top = (videoHeight - 75) + "px";
tooltip.style.display = "inline";
tooltip.style.marginLeft = "-5px";
});

repeatButton.addEventListener("mouseleave", () => {
tooltip.style.display = "none";
});
}

//Reset on location change
document.addEventListener('spfdone', function() {
repeatButtonIcon.src = icon;
});

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Repeat Button
}
 
document.documentElement.appendChild(linkElem);
}

if (!window.alreadyApplied) {
window.alreadyApplied = true;
applyStyles();
}
})()
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ CSS Styling























//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Hotkeys (Done)
window.onkeydown = function(e) {
  if (e.which == 49) {
document.querySelector(".playlist-item:nth-child(1) > div > div.vm-pl-thumbs > a > span").setAttribute('style', 'background-color: white !important');


}};

window.onkeyup = function(e) {
  if (e.which == 49) {



document.querySelector(".playlist-item:nth-child(1) > div > div.vm-pl-thumbs > a > span").click();
}};
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Hotkeys (Done)



//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Disable 0-9 (Done)
function keyboard_event_handler(e) {
    // Don't prevent entering numbers in input areas
    if (e.target.tagName == 'INPUT' ||
	e.target.tagName == 'SELECT' ||
	e.target.tagName == 'TEXTAREA' ||
	e.target.isContentEditable) {
	return;
    }
    // Trap number keys
    if (e.key >= '0' && e.key <= '9') {
	e.stopImmediatePropagation();
    }
}
window.addEventListener('keydown', keyboard_event_handler, true);
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Disable 0-9 (Done)











//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Disable right-click (Done)
window.addEventListener("mousedown", e => {
   if (e.button === 2) {
       e.stopImmediatePropagation()
   } 
}, {capture: true})
 
window.addEventListener("mouseup", e => {
   if (e.button === 2) {
       e.stopImmediatePropagation()
   } 
}, {capture: true})
 
window.addEventListener("contextmenu", e => {
   e.preventDefault()
   e.stopImmediatePropagation() 
}, {capture: true})
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Disable right-click (Done)






/*
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Resize (Done, enable when extension is finished)

var the_timer;
 
window.addEventListener('resize', function(){
  clearTimeout(the_timer);
  the_timer = setTimeout(function(){
    window.resizeTo(676, 800);

  }, 75);
});

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Resize (Done, enable when extension is finished)
*/






