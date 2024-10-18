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
    function replaceScores() {
        const totalScoreElement = document.querySelector('p[data-qc-id="ds-tot-score"]');
        if (totalScoreElement && totalScoreElement.textContent === "1510") {
            totalScoreElement.textContent = "1600";
        }
        const readingScoreElement = document.querySelector('.mobile-section-container:nth-child(1) p.cb-font-weight-bold');
        if (readingScoreElement && readingScoreElement.textContent === "730") {
            readingScoreElement.textContent = "800";
        }
        const mathScoreElement = document.querySelector('.mobile-section-container:nth-child(2) p.cb-font-weight-bold');
        if (mathScoreElement && mathScoreElement.textContent === "780") {
            mathScoreElement.textContent = "800";
        }
        if (totalScoreElement.textContent === "1600" &&
            readingScoreElement.textContent === "800" &&
            mathScoreElement.textContent === "800") {
            clearInterval(intervalId);
        }
    }
    const intervalId = setInterval(replaceScores, 0);
})();
