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

//------------------------------------------- Repeat Button
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





repeatButton.addEventListener("mouseover", () => {
var videoHeight = parseInt(document.getElementsByClassName("video-stream html5-main-video")[0].style.height, 10);
tooltip.style.left = repeatButton.offsetLeft + "px";
tooltip.style.top = (videoHeight - 75) + "px";
tooltip.style.display = "inline";
tooltip.style.marginLeft = "10px";
});



repeatButton.addEventListener("mouseleave", () => {
tooltip.style.display = "none";
tooltip.style.marginLeft = "0px";
});
}

//Reset on location change
document.addEventListener('spfdone', function() {
repeatButtonIcon.src = icon;
});
//------------------------------------------- Repeat Button


/*■■■ Tooltips ■■■*/

/*Fullscreen tooltip*/
var FullscreenBtn = document.querySelector(".ytp-fullscreen-button"); 
var Tooldip = document.querySelector(".ytp-tooltip");


if (FullscreenBtn && Tooldip) {
FullscreenBtn.addEventListener("mouseover", () => {
document.querySelector(".ytp-tooltip").style.backgroundColor = "red";
});

FullscreenBtn.addEventListener("mouseout", () => {
document.querySelector(".ytp-tooltip").style.backgroundColor = "black";
});
}

/*Fullscreen tooltip*/





/*■■■ Tooltips ■■■*/




};
document.documentElement.appendChild(linkElem);
}

if (!window.alreadyApplied) {
window.alreadyApplied = true;
applyStyles();
}
})();
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




//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Remove links on hover (Done)
window.addEventListener("mouseover", e => {
if (e.target instanceof HTMLAnchorElement) {
const anchor = e.target
if (anchor.href) {
anchor.hiddenHref = anchor.href 
anchor.removeAttribute("href")
}}}, {capture: true, passive: true})

window.addEventListener("mouseout", e => {
if (e.target instanceof HTMLAnchorElement) {
const anchor = e.target
if (anchor.hiddenHref) {
anchor.href = anchor.hiddenHref
anchor.hiddenHref = ""
}}}, {capture: true, passive: true})

window.addEventListener("click", e => {
if (e.target instanceof HTMLAnchorElement) {
const anchor = e.target
if (anchor.hiddenHref) {
e.preventDefault()
window.location.href = anchor.hiddenHref
}}}, {capture: true, passive: true})
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Remove links on hover (Done)




//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Always show bottom controls (Done)
var YtNewUIFix = /** @class */ (function () {

    function YtNewUIFix() {
var _this = this;
this.prefix = "ytfix::";
this.isEmbedded = window.top !== window.self;
this.isSettingsPage = window.location.href.toLowerCase().match("(\\.com\\/embed|\\.com)\\/ui_fix_options") !== null;
this.mouseMoveEvent = document.createEvent("Events");
this.mouseMoveEvent.initEvent("mousemove", false, false);
document.body.classList.add("yt-ui-fix");
this.readOptions();

        addEventListener("storage", function (e) {
if (e.key && e.key.indexOf(_this.prefix) >= 0) {
_this.readOptions();
_this.showOptions();
_this.addCSS();
_this.handleWatchLater();
}
});
}

    YtNewUIFix.prototype.readOptions = function () {
this.setOption("addWatchLater", false);
this.setOption("showControlsFullscreen", true);
this.setOption("showControlsNonFullscreen", true);
this.setOption("changeColorsFullscreen", false);
this.setOption("changeColorsNonFullscreen", false);
this.setOption("removeAnimations", false);
this.setOption("optionsReversed", false);
this.setOption("progressBigger", false);
this.setOption("showTitleOnHover", false);
this.setOption("alwaysVolume", false);
};

    YtNewUIFix.prototype.applyFix = function () {
var _this = this;
if (document.body.innerHTML.length === 0) {
// empty page can be ignored (in share tab before it's active)
return;
}

        if (!this.isSettingsPage) {
this.addCSS();
this.checkMoviePlayer();
window.setInterval(function () {
_this.checkMoviePlayer();
_this.handleWatchLater();
}, 1000);
}
this.addOptions();
};

    YtNewUIFix.prototype.setOption = function (key, defaultVal) {
if (!localStorage) {
this[key] = defaultVal;
}
var result = this.getSetting(key);
if (result) {
this[key] = (result === "true");
}
else {
this[key] = defaultVal;
}
};

    YtNewUIFix.prototype.getSetting = function (key) {return localStorage.getItem(this.prefix + key);};

    YtNewUIFix.prototype.setSetting = function (key, value) {localStorage.setItem(this.prefix + key, String(value));};

    YtNewUIFix.prototype.checkMoviePlayer = function () {
if (!this.moviePlayer || !this.moviePlayer.parentNode) {
this.moviePlayer = document.querySelector(".html5-video-player");
}
if (this.moviePlayer && this.moviePlayer.parentNode) {
if (!this.moviePlayer.classList.contains("seeking-mode") &&
!this.moviePlayer.classList.contains("dragging-mode") &&
(this.showControlsNonFullscreen && !this.moviePlayer.classList.contains("ytp-fullscreen") || this.showControlsFullscreen && this.moviePlayer.classList.contains("ytp-fullscreen"))) {
this.moviePlayer.dispatchEvent(this.mouseMoveEvent);
}
if (this.showTitleOnHover) {
this.moviePlayer.classList.remove("ytp-hide-info-bar");
}
}
};

    YtNewUIFix.prototype.handleWatchLater = function () {
if (!this.watchLaterbutton || !this.settingsButton) {
this.watchLaterbutton = document.querySelector(".ytp-chrome-top .ytp-watch-later-button");
if (!this.watchLaterbutton)
return;
this.settingsButton = document.querySelector(".ytp-settings-button");
if (this.watchLaterbutton && this.watchLaterbutton.parentElement) {
this.oldWatchParent = this.watchLaterbutton.parentElement;
}
}
if (this.watchLaterbutton && this.settingsButton) {
if (this.addWatchLater && this.settingsButton.parentNode) {
if (this.watchLaterbutton.parentNode !== this.settingsButton.parentNode) {
this.settingsButton.parentNode.insertBefore(this.watchLaterbutton, this.settingsButton);
}
}
else {
this.oldWatchParent.appendChild(this.watchLaterbutton);
}
}
};

    YtNewUIFix.prototype.addCSS = function () {
var css = "";
var StyleId = "YoutubeNewUIFix-Style";
css = this.fixColors(css);
css = this.fixControls(css);
css = this.fixBigMode(css);
css = this.addExtras(css);
var style = document.getElementById(StyleId);
if (style && style.parentNode) {
style.parentNode.removeChild(style);
delete style.textContent;
}
style = document.createElement("style");
style.id = StyleId;
style.textContent = css;
document.head.appendChild(style);
};

    YtNewUIFix.prototype.fixControls = function (css) {
// options
return css;
};

    YtNewUIFix.prototype.fixBigMode = function (css) {
/* big mode: smaller scrubber */
return css;
};

    YtNewUIFix.prototype.fixColors = function (css) {
if (this.changeColorsNonFullscreen) {
}
else {
if (this.showControlsNonFullscreen) {
}
}
if (this.changeColorsFullscreen) {
}
else {
if (this.showControlsFullscreen) {
}
}
return css;
};

    YtNewUIFix.prototype.addExtras = function (css) {
if (this.showControlsFullscreen) {
}
if (this.showControlsNonFullscreen) {
}
if (!this.showControlsFullscreen && !this.showControlsNonFullscreen) {
}
if (!this.showTitleOnHover) {
// hide always
}
if (this.removeAnimations) {
}
if (this.optionsReversed) {
}
if (this.alwaysVolume) {
/* Have the volume slider always be visible */
}
if (this.progressBigger) {
/* Make the progressbar fill up the entire space when not hovering over (thanks to Takato) */
}
return css;
};

    YtNewUIFix.prototype.showOptions = function () {
var options = document.querySelectorAll("#YoutubeNewUIFix-Options input");
if (options.length > 0) {
for (var i = 0; i < options.length; i++) {
options[i].checked = (this.getSetting(options[i].name) === "true");
}
}
};

    YtNewUIFix.prototype.addOptions = function () {
var _this = this;
if (localStorage) {
var accSection_1 = document.createElement("div");
accSection_1.id = "YoutubeNewUIFix-Options";
accSection_1.classList.add("account-section");
var header = document.createElement("h3");
header.classList.add("account-section-header");
header.textContent = "Youtube UI Fix Options";
accSection_1.appendChild(header);
{
accSection_1.appendChild(this.createOption("addWatchLater", "Add the watch later button to the controls"));
accSection_1.appendChild(this.createOption("changeColorsNonFullscreen", "Change the colors back to their original gray (in non-full-screen mode)"));
accSection_1.appendChild(this.createOption("changeColorsFullscreen", "Change the colors back to their original gray in full-screen mode"));
accSection_1.appendChild(this.createOption("showControlsNonFullscreen", "Always show the controls (in non-full-screen mode)"));
accSection_1.appendChild(this.createOption("showControlsFullscreen", "Always show the controls in full-screen mode"));
accSection_1.appendChild(this.createOption("removeAnimations", "Remove all animations"));
accSection_1.appendChild(this.createOption("optionsReversed", "Move the 'go back' button in the settings menus to the bottom"));
accSection_1.appendChild(this.createOption("progressBigger", "Make the progressbar take up the whole width (but not when hovering over)"));
accSection_1.appendChild(this.createOption("showTitleOnHover", "Have the title show when hovering over the video"));
accSection_1.appendChild(this.createOption("alwaysVolume", "Have the volume slider be always visible"));
}
var content = document.querySelector(".account-content");
var footer = document.querySelector(".account-footer");
var selectedItem = document.querySelector(".creator-sidebar-item.selected");
if (!content) {
content = document.querySelector("#contents");
}
if (!selectedItem) {
selectedItem = document.querySelector(".ytd-settings-sidebar-renderer[active]");
}
if (this.isSettingsPage) {
document.head.innerHTML = document.body.innerHTML = "";
document.body.appendChild(accSection_1);
}
else if (content && selectedItem.innerHTML.indexOf("Playback") >= 0) {
if (footer) {
content.insertBefore(accSection_1, footer);
}
else {
content.appendChild(accSection_1);
}
}
var exportBtn_1 = document.createElement("button");
exportBtn_1.classList.add("yt-uix-button", "yt-uix-button-size-default", "yt-uix-button-primary", "account-action-button");
exportBtn_1.type = "button";
exportBtn_1.textContent = "Export Settings";
exportBtn_1.onclick = function () {
var settingsScript = "// ==UserScript==\n";
settingsScript += "// @name        Youtube UI Fix Settings\n";
settingsScript += "// @namespace   YtUIFix\n";
settingsScript += "// @description Sets the settings for Youtube UI Fix\n";
settingsScript += "// @author      Roy Scheerens\n";
settingsScript += "// @homepageURL https://greasyfork.org/en/scripts/11485\n";
settingsScript += "// @include     https://www.youtube.com*\n";
settingsScript += "// @include     https://youtube.googleapis.com/embed*\n";
settingsScript += "// @include     https://www.youtube-nocookie.com/embed*\n";
settingsScript += "// @version     0.0.1\n";
settingsScript += "// @grant       none\n";
settingsScript += "// ==/UserScript==\n";
settingsScript += "\n";
settingsScript += "localStorage.setItem('ytfix::addWatchLater',              String(" + String(_this["addWatchLater"]) + "));\n";
settingsScript += "localStorage.setItem('ytfix::showControlsFullscreen',     String(" + String(_this["showControlsFullscreen"]) + "));\n";
settingsScript += "localStorage.setItem('ytfix::showControlsNonFullscreen',  String(" + String(_this["showControlsNonFullscreen"]) + "));\n";
settingsScript += "localStorage.setItem('ytfix::changeColorsFullscreen',     String(" + String(_this["changeColorsFullscreen"]) + "));\n";
settingsScript += "localStorage.setItem('ytfix::changeColorsNonFullscreen',  String(" + String(_this["changeColorsNonFullscreen"]) + "));\n";
settingsScript += "localStorage.setItem('ytfix::removeAnimations',           String(" + String(_this["removeAnimations"]) + "));\n";
settingsScript += "localStorage.setItem('ytfix::optionsReversed',            String(" + String(_this["optionsReversed"]) + "));\n";
settingsScript += "localStorage.setItem('ytfix::progressBigger',             String(" + String(_this["progressBigger"]) + "));\n";
settingsScript += "localStorage.setItem('ytfix::showTitleOnHover',           String(" + String(_this["showTitleOnHover"]) + "));\n";
settingsScript += "localStorage.setItem('ytfix::alwaysVolume',               String(" + String(_this["alwaysVolume"]) + "));\n";
var hiddenText = accSection_1.getElementsByTagName("textarea")[0] || document.createElement("textarea");
hiddenText.textContent = settingsScript;
accSection_1.appendChild(hiddenText);
hiddenText.select();
document.execCommand("cut");
accSection_1.removeChild(hiddenText);
exportBtn_1.innerHTML = "Settings Userscipt Copied";
};
if (footer) {
footer.appendChild(exportBtn_1);
}
else {
content.appendChild(exportBtn_1);
}
}
};

    YtNewUIFix.prototype.createOption = function (name, description) {
var _this = this;
var accDiv = document.createElement("div");
accDiv.classList.add("account-section-setting");
accDiv.innerHTML = "\n\t\t    <label style=\"font-size: 13px\">\n\t\t\t    <span class='yt-uix-form-input-checkbox-container " + (this[name] ? "checked" : "") + "'>\n                    <input class='yt-uix-form-input-checkbox' name='" + name + "' " + (this[name] ? "checked='checked'" : "") + " type='checkbox'>\n                    <span class='yt-uix-form-input-checkbox-element'></span>\n                </span>\n\t\t\t    " + description + "\n\t\t    </label>";
var accInput = accDiv.querySelector("input[name='" + name + "']");
accInput.onclick = function () {
_this.setSetting(name, accInput.checked);
_this[name] = accInput.checked;
};
return accDiv;
};
return YtNewUIFix;
}());
new YtNewUIFix().applyFix();
//# sourceMappingURL=Youtube_UI_Fix.user.js.map
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ Always show bottom controls (Done)











