// ==UserScript==
// @name         Venmo Balance
// @namespace    http://tampermonkey.net/
// @version      2024-01-16
// @description  Change Venmo Balance
// @author       You
// @match        https://account.venmo.com/u/Donghyun-Won-2
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let balanceElement = document.querySelector('.balanceTransfer_balance__SuGaU');
    if (balanceElement) {
        balanceElement.innerText = '$250.00';
    }
})();
