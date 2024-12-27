// ==UserScript==
// @name         Amazon辅助
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.12.28
// @description  Amazon
// @author       Lennon
// @match        *://www.amazon.com/*/dp/*
// @match        *://www.amazon.de/*/dp/*
// @match        *://www.amazon.ca/*/dp/*
// @icon         https://www.amazon.com/favicon.ico
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const asin = window.location.href.split('dp/')[1].split('/')[0].split('?')[0].trim();
    let country;
    if(window.location.href.includes('://www.amazon.com/')) {
        country = 'US';
    }
    else if(window.location.href.includes('://www.amazon.de/')) {
        country = 'DE';
    }
    else if(window.location.href.includes('://www.amazon.ca/')) {
        country = 'CA';
    }

    const content = `
        <a href="https://www.sellersprite.com/v2/tools/sales-estimator?market=${country}&asin=${asin}" target="_blank" style="padding: 0 0 0 250px;">
            <button style="padding: 5px 20px; background-color: #f9a51e; font-size: 20px;">
                销量
            </button>
        </a>
    `;
    document.querySelector('div#titleSection').insertAdjacentHTML('afterbegin', content);
})();