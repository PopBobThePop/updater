// ==UserScript==
// @name         Update All
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Update score on CollegeBoard page
// @author       YourName
// @match        https://studentscores.collegeboard.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function updateScore() {
        var scoreElement = document.querySelector('span.total-score-value.cb-roboto.cb-font-weight-bold.cb-spacerh-right-8[data-qc-id="ds-tot-score"]');
        scoreElement.innerText = '1520'; // Change this to change total score

        var readingWritingElement = document.querySelector('span.section-score-value.cb-padding-top-8.cb-font-weight-bold.cb-spacerh-right-8[data-qc-id="ds-Reading and Writing-score"]');
        readingWritingElement.innerText = '760'; // Change this to change reading & writing score

        var mathElement = document.querySelector('span.section-score-value.cb-padding-top-8.cb-font-weight-bold.cb-spacerh-right-8[data-qc-id="ds-Math-score"]');
        mathElement.innerText = '760'; // Change this to change math score

        var scoreIndex = document.querySelector('span[data-qc-id="ds-nmsc-selection-index"]');
        scoreIndex.innerText = '228';

        var scoreInsight = document.querySelector('div.progress-bar-container span[data-qc-id="ds-ss-tot"]');
        scoreInsight.innerText = '1520'

        var scoreBar = document.querySelector('.progress-bar-fill.progress-bar-primary');
        scoreBar.style.width = '100%';

        var scorePercentile = document.querySelector('p.cb-roboto-medium.comparison-percentile-title.cb-no-margin[data-qc-id="ds-sc-Your State"]');
        scorePercentile.innerText = '99th Percentile'

        var PercentileExplain = document.querySelector('p.cb-font-size-xsmall.cb-roboto.cb-no-margin');
        PercentileExplain.innerText = '99% of students scored the same as or below you';


        const scoreElements = document.querySelectorAll('.cb-accordion-trigger-panel.transition.cb-in > .cb-accordion-panel-content > .cb-gray5-bg.list-row');
        const updatedScores = ['1590', '1600', '1510', '1520'];
        scoreElements.forEach((element, index) => {
            const scoreElement = element.querySelector('.score-list-score.cb-roboto-bold');
            if (scoreElement) {
                scoreElement.textContent = updatedScores[index];
            }
        });
    }


    //Update SAT score
    function updateScoreA() {

        //Total Score
        var scoreElement = document.querySelector('div[data-qc-id="rd-ts-score"]');
        scoreElement.innerText = '1600';



        //Total Score Range
        var totalRangeAElement = document.querySelector('span[data-qc-id="rd-ts-Total Score-range-low"]');
        var totalRangeBElement = document.querySelector('span[data-qc-id="rd-ts-Total Score-range-high"]');
        totalRangeAElement.innerText = '1560';
        totalRangeBElement.innerText = '1600';



        //Total Score Percentile
        var totalPercentileAElement = document.querySelector('span[data-qc-id="rd-ts-snp"]');
        var totalPercentileBElement = document.querySelector('.higher-than-message');
        var totalPercentileCElement = document.querySelector('.image-on.image-repeat');
        var totalPercentileDElement = document.querySelectorAll('div[style*="154.854px"]');
        totalPercentileAElement.innerText = '99';
        totalPercentileBElement.innerText = 'You scored higher than or equal to 99% of students.';
        totalPercentileCElement.style.width = '100%';
        totalPercentileDElement.forEach(function(element) {
            var style = element.getAttribute('style');
            style = style.replace(/154.854px/g, '158.5px');
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
        readingWritingRangeAElement.innerText = '770';
        readingWritingRangeBElement.innerText = '800';

        //Chart
        var readingWritingScoreElement = document.querySelector('.section-score-card.score-card.col-xs-12 div[data-qc-id="rd-ss-Evidence-Based Reading and Writing-section-score"]');
        readingWritingScoreElement.style.transform = 'translate(224px, 12px)';
        readingWritingScoreElement.innerText = '800';

        var readingWritingRangeText = document.querySelector('.section-score-card.score-card.col-xs-12 span.range-text.bold');
        readingWritingRangeText.style.transform = 'translate(210.5px, 12px)';

        var readingWritingArrow = document.querySelector('.section-score-card.score-card.col-xs-12 .achieved-caret');
        readingWritingArrow.style.transform = 'translate(232.75px, 12px)';

        var readingWritingLineElement = document.querySelector('.section-score-card.score-card.col-xs-12 line');
        readingWritingLineElement.setAttribute('x1', '228.5');
        readingWritingLineElement.setAttribute('x2', '238.5');



        //Math Section Score

        //Text
        var mathPercentileAElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-sup"]');
        var mathPercentileBElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-snp"]');
        var mathRangeAElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-range-low"]');
        var mathRangeBElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-range-high"]');
        mathPercentileAElement.innerText = '99';
        mathPercentileBElement.innerText = '99';
        mathRangeAElement.innerText = '770';
        mathRangeBElement.innerText = '800';

        //Chart
        var mathScoreElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 div[data-qc-id="rd-ss-Math-section-score"]');
        mathScoreElement.style.transform = 'translate(224px, 12px)';
        mathScoreElement.innerText = '800';

        var mathRangeText = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span.range-text.bold');
        mathRangeText.style.transform = 'translate(210.5px, 12px)';

        var mathArrow = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 .achieved-caret');
        mathArrow.style.transform = 'translate(232.75px, 12px)';

        var mathLineElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 line');
        mathLineElement.setAttribute('x1', '228.5');
        mathLineElement.setAttribute('x2', '238.5');

    }





    //Update PSAT score
    function updateScoreB() {

        //Total Score
        var scoreElement = document.querySelector('div[data-qc-id="rd-ts-score"]');
        scoreElement.innerText = '1510';



        //Total Score Range
        var totalRangeAElement = document.querySelector('span[data-qc-id="rd-ts-Total Score-range-low"]');
        var totalRangeBElement = document.querySelector('span[data-qc-id="rd-ts-Total Score-range-high"]');
        totalRangeAElement.innerText = '1470';
        totalRangeBElement.innerText = '1520';



        //Total Score Percentile
        var totalPercentileAElement = document.querySelector('span[data-qc-id="rd-ts-snp"]');
        var totalPercentileBElement = document.querySelector('.higher-than-message');
        var totalPercentileCElement = document.querySelector('.image-on.image-repeat');
        var totalPercentileDElement = document.querySelectorAll('div[style*="149.508px"]');
        totalPercentileAElement.innerText = '99';
        totalPercentileBElement.innerText = 'You scored higher than or equal to 99% of students.';
        totalPercentileCElement.style.width = '100%';
        totalPercentileDElement.forEach(function(element) {
            var style = element.getAttribute('style');
            style = style.replace(/149.508px/g, '158.5px');
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
        readingWritingRangeAElement.innerText = '720';
        readingWritingRangeBElement.innerText = '760';

        //Chart
        var readingWritingScoreElement = document.querySelector('.section-score-card.score-card.col-xs-12 div[data-qc-id="rd-ss-Evidence-Based Reading and Writing-section-score"]');
        readingWritingScoreElement.style.transform = 'translate(217px, 12px)';
        readingWritingScoreElement.innerText = '750';

        var readingWritingRangeText = document.querySelector('.section-score-card.score-card.col-xs-12 span.range-text.bold');
        readingWritingRangeText.style.transform = 'translate(203.5px, 12px)';

        var readingWritingArrow = document.querySelector('.section-score-card.score-card.col-xs-12 .achieved-caret');
        readingWritingArrow.style.transform = 'translate(225.75px, 12px)';

        var readingWritingLineElement = document.querySelector('.section-score-card.score-card.col-xs-12 line');
        readingWritingLineElement.setAttribute('x1', '224.5');
        readingWritingLineElement.setAttribute('x2', '238.5');



        //Math Section Score

        //Text
        var mathPercentileAElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-sup"]');
        var mathPercentileBElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-snp"]');
        var mathRangeAElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-range-low"]');
        var mathRangeBElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-range-high"]');
        mathPercentileAElement.innerText = '99';
        mathPercentileBElement.innerText = '99';
        mathRangeAElement.innerText = '730';
        mathRangeBElement.innerText = '760';

        //Chart
        var mathScoreElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 div[data-qc-id="rd-ss-Math-section-score"]');
        mathScoreElement.style.transform = 'translate(224px, 12px)';
        mathScoreElement.innerText = '760';

        var mathRangeText = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span.range-text.bold');
        mathRangeText.style.transform = 'translate(210.5px, 12px)';

        var mathArrow = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 .achieved-caret');
        mathArrow.style.transform = 'translate(232.75px, 12px)';

        var mathLineElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 line');
        mathLineElement.setAttribute('x1', '228.5');
        mathLineElement.setAttribute('x2', '238.5');



        //Test Scores
        var scoreElements = document.querySelectorAll('.score-tier-card-score');
        scoreElements.forEach(function(element) {
            element.innerText = "38";
        var scoreElementsA = document.querySelector('.score-tier-card-score');
        scoreElementsA.innerText = "37.5";
        });



        //Prediction
        var mathPredictionLow = document.querySelector('span[data-qc-id="rd-psat-proj-test-Math-low"]');
        var mathPredictionHigh = document.querySelector('span[data-qc-id="rd-psat-proj-test-Math-high"]');
        var rwPredictionLow = document.querySelector('span[data-qc-id="rd-psat-proj-test-Evidence-Based Reading and Writing-low"]');
        var rwPredictionHigh = document.querySelector('span[data-qc-id="rd-psat-proj-test-Evidence-Based Reading and Writing-high"]');
        mathPredictionLow.innerText = '690';
        mathPredictionHigh.innerText = '760';
        rwPredictionLow.innerText = '680';
        rwPredictionHigh.innerText = '760';
    }





    //Update PSAT score
    function updateScoreC() {

        //Total Score
        var scoreElement = document.querySelector('div[data-qc-id="rd-ts-score"]');
        scoreElement.innerText = '1520';



        //Total Score Range
        var totalRangeAElement = document.querySelector('span[data-qc-id="rd-ts-Total Score-range-low"]');
        var totalRangeBElement = document.querySelector('span[data-qc-id="rd-ts-Total Score-range-high"]');
        totalRangeAElement.innerText = '1480';
        totalRangeBElement.innerText = '1520';



        //Total Score Percentile
        var totalPercentileAElement = document.querySelector('span[data-qc-id="rd-ts-snp"]');
        var totalPercentileBElement = document.querySelector('.higher-than-message');
        var totalPercentileCElement = document.querySelector('.image-on.image-repeat');
        var totalPercentileDElement = document.querySelectorAll('div[style*="122.778px"]');
        totalPercentileAElement.innerText = '99';
        totalPercentileBElement.innerText = 'You scored higher than or equal to 99% of students.';
        totalPercentileCElement.style.width = '100%';
        totalPercentileDElement.forEach(function(element) {
            var style = element.getAttribute('style');
            style = style.replace(/122.778px/g, '158.5px');
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
        readingWritingRangeAElement.innerText = '730';
        readingWritingRangeBElement.innerText = '760';

        //Chart
        var readingWritingScoreElement = document.querySelector('.section-score-card.score-card.col-xs-12 div[data-qc-id="rd-ss-Evidence-Based Reading and Writing-section-score"]');
        readingWritingScoreElement.style.transform = 'translate(224px, 12px)';
        readingWritingScoreElement.innerText = '760';

        var readingWritingRangeText = document.querySelector('.section-score-card.score-card.col-xs-12 span.range-text.bold');
        readingWritingRangeText.style.transform = 'translate(210.5px, 12px)';

        var readingWritingArrow = document.querySelector('.section-score-card.score-card.col-xs-12 .achieved-caret');
        readingWritingArrow.style.transform = 'translate(232.75px, 12px)';

        var readingWritingLineElement = document.querySelector('.section-score-card.score-card.col-xs-12 line');
        readingWritingLineElement.setAttribute('x1', '228.5');
        readingWritingLineElement.setAttribute('x2', '238.5');



        //Math Section Score

        //Text
        var mathPercentileAElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-sup"]');
        var mathPercentileBElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-snp"]');
        var mathRangeAElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-range-low"]');
        var mathRangeBElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-range-high"]');
        mathPercentileAElement.innerText = '99';
        mathPercentileBElement.innerText = '99';
        mathRangeAElement.innerText = '730';
        mathRangeBElement.innerText = '760';

        //Chart
        var mathScoreElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 div[data-qc-id="rd-ss-Math-section-score"]');
        mathScoreElement.style.transform = 'translate(224px, 12px)';
        mathScoreElement.innerText = '760';

        var mathRangeText = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span.range-text.bold');
        mathRangeText.style.transform = 'translate(210.5px, 12px)';

        var mathArrow = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 .achieved-caret');
        mathArrow.style.transform = 'translate(232.75px, 12px)';

        var mathLineElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 line');
        mathLineElement.setAttribute('x1', '228.5');
        mathLineElement.setAttribute('x2', '238.5');



        //Test Scores
        var scoreElements = document.querySelectorAll('.score-tier-card-score');
        scoreElements.forEach(function(element) {
            element.innerText = "38";
        });



        //Prediction
        var mathPredictionLow = document.querySelector('span[data-qc-id="rd-psat-proj-test-Math-low"]');
        var mathPredictionHigh = document.querySelector('span[data-qc-id="rd-psat-proj-test-Math-high"]');
        var rwPredictionLow = document.querySelector('span[data-qc-id="rd-psat-proj-test-Evidence-Based Reading and Writing-low"]');
        var rwPredictionHigh = document.querySelector('span[data-qc-id="rd-psat-proj-test-Evidence-Based Reading and Writing-high"]');
        mathPredictionLow.innerText = '690';
        mathPredictionHigh.innerText = '760';
        rwPredictionLow.innerText = '690';
        rwPredictionHigh.innerText = '760';
    }





    function updateScoreD() {

        //Total Score
        var scoreElement = document.querySelector('div[data-qc-id="rd-ts-score"]');
        scoreElement.innerText = '1590';



        //Total Score Range
        var totalRangeAElement = document.querySelector('span[data-qc-id="rd-ts-Total Score-range-low"]');
        var totalRangeBElement = document.querySelector('span[data-qc-id="rd-ts-Total Score-range-high"]');
        totalRangeAElement.innerText = '1550';
        totalRangeBElement.innerText = '1600';



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
        readingWritingRangeAElement.innerText = '760';
        readingWritingRangeBElement.innerText = '800';

        //Chart
        var readingWritingScoreElement = document.querySelector('.section-score-card.score-card.col-xs-12 div[data-qc-id="rd-ss-Evidence-Based Reading and Writing-section-score"]');
        readingWritingScoreElement.style.transform = 'translate(224px, 12px)';
        readingWritingScoreElement.innerText = '790';

        var readingWritingRangeText = document.querySelector('.section-score-card.score-card.col-xs-12 span.range-text.bold');
        readingWritingRangeText.style.transform = 'translate(210.5px, 12px)';

        var readingWritingArrow = document.querySelector('.section-score-card.score-card.col-xs-12 .achieved-caret');
        readingWritingArrow.style.transform = 'translate(232.75px, 12px)';

        var readingWritingLineElement = document.querySelector('.section-score-card.score-card.col-xs-12 line');
        readingWritingLineElement.setAttribute('x1', '228.5');
        readingWritingLineElement.setAttribute('x2', '238.5');



        //Math Section Score

        //Text
        var mathPercentileAElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-sup"]');
        var mathPercentileBElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-snp"]');
        var mathRangeAElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-range-low"]');
        var mathRangeBElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span[data-qc-id="rd-ss-Math-range-high"]');
        mathPercentileAElement.innerText = '99';
        mathPercentileBElement.innerText = '99';
        mathRangeAElement.innerText = '770';
        mathRangeBElement.innerText = '800';

        //Chart
        var mathScoreElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 div[data-qc-id="rd-ss-Math-section-score"]');
        mathScoreElement.style.transform = 'translate(224px, 12px)';
        mathScoreElement.innerText = '800';

        var mathRangeText = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 span.range-text.bold');
        mathRangeText.style.transform = 'translate(210.5px, 12px)';

        var mathArrow = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 .achieved-caret');
        mathArrow.style.transform = 'translate(232.75px, 12px)';

        var mathLineElement = document.querySelector('.second-score-card.section-score-card.score-card.col-xs-12 line');
        mathLineElement.setAttribute('x1', '228.5');
        mathLineElement.setAttribute('x2', '238.5');

    }


    function selectTest() {
        var testDate = document.querySelector('.assessment-date');
        var testGrade = document.querySelector('.edu-level');


        if (testDate.textContent.trim() == 'August 26, 2023' && testGrade.textContent.trim() == '11th Grade') {
            updateScoreA();
        } else if (testDate.textContent.trim() == 'October 25, 2022' && testGrade.textContent.trim() == '10th Grade') {
            updateScoreB();
        } else if (testDate.textContent.trim() == 'October 13, 2021' && testGrade.textContent.trim() == '9th Grade') {
            updateScoreC();
        } else if (testDate.textContent.trim() == 'November 4, 2023' && testGrade.textContent.trim() == '11th Grade') {
            updateScoreD();
        }
    }

    function main() {
        var currentURL = window.location.href;
        if (currentURL == "https://studentscores.collegeboard.org/scores/summary") {
            updateScore();
        } else if (currentURL == "https://studentscores.collegeboard.org/viewscore/overview") {
            selectTest();
        }
    }

    var checkInterval = setInterval(main, 0)

    //var checkIntervalA = setInterval(updateScore, 0);
    //var checkIntervalD = setInterval(selectTest, 0);

})();
