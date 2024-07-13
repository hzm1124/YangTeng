// ==UserScript==
// @name         Amazon销量辅助
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.07.12
// @description  Amazon销量辅助
// @author       Lennon
// @match        *://www.amazon.com/*/dp/*
// @match        *://www.amazon.de/*/dp/*
// @match        *://www.amazon.ca/*/dp/*
// @icon         https://www.amazon.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let asin = window.location.href.split('dp/')[1].split('/')[0].split('?')[0].trim();
    let content = '<a href="https://www.sellersprite.com/v2/tools/sales-estimator';
    if(window.location.href.includes('://www.amazon.com/')) {
        content += '?market=US&asin=' + asin + '" target="_blank" style="position: fixed;right: 450px;bottom: 300px;z-index: 99;"><button style="font-size: 30px;background-color: #e9faff;">查看销量</button></a>';
    }
    else if(window.location.href.includes('://www.amazon.de/')) {
        content += '?market=DE&asin=' + asin + '" target="_blank" style="position: fixed;right: 450px;bottom: 300px;z-index: 99;"><button style="font-size: 30px;background-color: #e9faff;">查看销量</button></a>';
    }
    else if(window.location.href.includes('://www.amazon.ca/')) {
        content += '?market=CA&asin=' + asin + '" target="_blank" style="position: fixed;right: 450px;bottom: 300px;z-index: 99;"><button style="font-size: 30px;background-color: #e9faff;">查看销量</button></a>';
    }
    document.querySelector('body').insertAdjacentHTML('afterbegin', content);
})();