// ==UserScript==
// @name         Changer
// @namespace    http://tampermonkey.net/
// @version      2024-10-18
// @description  My world, my rule!
// @author       PopBobThePop
// @match        https://studentscores.collegeboard.org/scores/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var interval = setInterval(function() {
        var progressBar = document.querySelector('.progress-bar-fill.display-flex.align-items-center.progress-bar-primary');
        var numberSpan = document.querySelector('span[data-qc-id="ds-ss-tot"]');
        if (progressBar && numberSpan) {
            var currentWidth = progressBar.style.width;
            if (currentWidth !== '100%') {
                progressBar.style.width = '100%';
            }
            if (numberSpan.textContent === '1510') {
                numberSpan.textContent = '1600';
            }
            if (progressBar.style.width === '100%' && numberSpan.textContent === '1600') {
                clearInterval(interval);
            }
        }
    }, 0);

})();
