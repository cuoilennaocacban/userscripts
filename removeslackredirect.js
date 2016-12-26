// ==UserScript==
// @name        Remove Slack Redirect
// @namespace   removeslackredirect
// @include     https://*.slack.com/*
// @version     1
// @grant       none
// ==/UserScript==
si = window.setInterval(clearanchors, 2000);
function clearanchors(){
    anchors = document.getElementsByTagName('a');
    for(i=0;i<anchors.length;i++){
        if(anchors[i].getAttribute('onclick') !== null || anchors[i].getAttribute('onmouseover') !== null){
            anchors[i].setAttribute('onclick', '');
            anchors[i].setAttribute('onmouseover', '');
        }
    }
}
