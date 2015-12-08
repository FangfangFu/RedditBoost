// Inject script on every page load
var script = document.createElement('script');
script.src = chrome.extension.getURL("script.js");
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);

/**
 * Stores the provided key/object in chrome storage.
 */
window.addEventListener("StoreObject", function(event) {
  chrome.storage.sync.set(event.detail, function() {
});}, false);

/**
 * Returns an object with the provided key from chrome storage.
 */
window.addEventListener("GetObject", function(event) {
  chrome.storage.sync.get(event.detail, function (obj) {
    console.log("Sending data for:" + event.detail);
    window.dispatchEvent(new CustomEvent("RetrievedObject", { "detail": obj }));
});}, false);


window.addEventListener("StoreNameTags", function(event) {
  chrome.storage.sync.set(event.detail, function() {
});}, false);

window.addEventListener("GetNameTags", function(event) {
  chrome.storage.sync.get("RedditBuddy_NameTags", function (obj) {
    window.dispatchEvent(new CustomEvent("RetrievedNameTags", { "detail": obj }));
});}, false);

