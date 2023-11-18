// ==UserScript==
// @name         Personal
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Update score on CollegeBoard page
// @author       YourName
// @match        https://studentscores.collegeboard.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function updateScoreDetail() {

        //Total Score
        var scoreElement = document.querySelector('div[data-qc-id="rd-ts-score"]');
        scoreElement.innerText = '1500';



        //Total Score Range
        var totalRangeAElement = document.querySelector('span[data-qc-id="rd-ts-Total Score-range-low"]');
        var totalRangeBElement = document.querySelector('span[data-qc-id="rd-ts-Total Score-range-high"]');
        totalRangeAElement.innerText = '1460';
        totalRangeBElement.innerText = '1540';



        //Total Score Percentile
        var totalPercentileAElement = document.querySelector('span[data-qc-id="rd-ts-snp"]');
        var totalPercentileBElement = document.querySelector('.higher-than-message');
        var totalPercentileCElement = document.querySelector('.image-on.image-repeat');
        var totalPercentileDElement = document.querySelectorAll('div[style*="154.854px"]');
        totalPercentileAElement.innerText = '99';
        totalPercentileBElement.innerText = 'You scored higher than or equal to 99% of students.';
        totalPercentileCElement.style.width = '99%';
        totalPercentileDElement.forEach(function(element) {
            var style = element.getAttribute('style');
            style = style.replace(/154.854px/g, '158px');
            element.setAttribute('style', style);
        });



        //Reading & Writing Section Score

        //Text
        var readingWritingPercentileAElement = document.querySelector('.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Evidence-Based Reading and Writing-sup"]');
        var readingWritingPercentileBElement = document.querySelector('.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Evidence-Based Reading and Writing-snp"]');
        var readingWritingRangeAElement = document.querySelector('.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Evidence-Based Reading and Writing-range-low"]');
        var readingWritingRangeBElement = document.querySelector('.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Evidence-Based Reading and Writing-range-high"]');
        readingWritingPercentileAElement.innerText = '99';
        readingWritingPercentileBElement.innerText = '99';
        readingWritingRangeAElement.innerText = '700';
        readingWritingRangeBElement.innerText = '760';

        //Chart
        var readingWritingScoreElement = document.querySelector('.section-score-card.score-card.col-xs-12 div[data-qc-id="rd-ss-Evidence-Based Reading and Writing-section-score"]');
        readingWritingScoreElement.style.transform = 'translate(192px, 12px)';
        readingWritingScoreElement.innerText = '730';

        var readingWritingRangeText = document.querySelector('.section-score-card.score-card.col-xs-12 span.range-text.bold');
        readingWritingRangeText.style.transform = 'translate(177.5px, 12px)';

        var readingWritingArrow = document.querySelector('.section-score-card.score-card.col-xs-12 .achieved-caret');
        readingWritingArrow.style.transform = 'translate(200.5px, 12px)';

        var readingWritingLineElement = document.querySelector('.section-score-card.score-card.col-xs-12 line');
        readingWritingLineElement.setAttribute('x1', '195');
        readingWritingLineElement.setAttribute('x2', '220');
    }


    function main() {
        var testDate = document.querySelector('.assessment-date');
        var testGrade = document.querySelector('.edu-level');
        var currentURL = window.location.href;
        if (currentURL == "https://studentscores.collegeboard.org/scores/summary") {
            const scoreElements = document.querySelectorAll('.cb-accordion-trigger-panel.transition.cb-in > .cb-accordion-panel-content > .cb-gray5-bg.list-row');
            const updatedScores = ['1400', '1500', '1220', '1080'];
            scoreElements.forEach((element, index) => {
                const scoreElement = element.querySelector('.score-list-score.cb-roboto-bold');
                if (scoreElement) {
                    scoreElement.textContent = updatedScores[index];
                }
            });
        } else if (currentURL == "https://studentscores.collegeboard.org/viewscore/overview") {
            const menuBar = document.querySelector('div.menu-bar');
            if (menuBar) {
                menuBar.remove();
            }
            if (testDate.textContent.trim() == 'August 26, 2023' && testGrade.textContent.trim() == '11th Grade') {
                updateScoreDetail()
            }
        }
    }

    var checkInterval = setInterval(main, 0)

    //var checkIntervalA = setInterval(updateScore, 0);
    //var checkIntervalD = setInterval(selectTest, 0);

})();