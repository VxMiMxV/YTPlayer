let tabIds = []


chrome.browserAction.onClicked.addListener(function (tab) {
chrome.windows.create({ url: "https://www.youtube.com/view_all_playlists", left: 50, top: 50, width: 674, height: 822, type: "popup" }, window => {
const tabId = window.tabs[0].id;

// add to tabIds array
tabIds.push(tabId)

chrome.tabs.onUpdated.addListener((id, info) => {

if (info.status !== "loading" || id !== tabId) return;

//jQuery scripts
chrome.tabs.executeScript(null, { file: "jQuery.js" }, function() {
chrome.tabs.executeScript(null, { file: "jQueryScripts.js" });
});
//jQuery scripts

chrome.tabs.executeScript(tabId, {
file: "applyCode.js",
runAt: "document_start"
});
})
})
});


// just add the "Old Youtube" code. But, ensure it only runs for tabIds opened by your extension. 
chrome.webRequest.onBeforeSendHeaders.addListener((request) => {
if (!tabIds.includes(request.tabId)) return 

request.requestHeaders.push({name: "X-YouTube-Client-Name", value: "1"});
request.requestHeaders.push({name: "X-YouTube-Client-Version", value: "1.20200806.01.01"});
return { requestHeaders: request.requestHeaders };
},
{ urls: ["https://www.youtube.com/*"] },
["blocking", "requestHeaders"]);

chrome.webRequest.onBeforeRequest.addListener((request) => {
if (!tabIds.includes(request.tabId)) return  

var url = new URL(request.url);
var params = new URLSearchParams(url.search.startsWith('?') ? url.search.substring(1) : url.search);
if (params.get("pbj") !== null) return {};
params.set("pbj", "1");
var spf = params.get('spf');
params.delete('spf');
params.delete('disable_polymer');
params.delete('spfreload');
if (spf === 'navigate')
params.set("spf", "navigate");
url.search = '?' + params.toString();
return {
redirectUrl: url.toString(),
};
}, {
urls: ["https://www.youtube.com/*"],
types: ["main_frame", "xmlhttprequest"],
}, ['blocking']);










