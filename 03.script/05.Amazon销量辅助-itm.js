// ==UserScript==
// @name         Amazon销量辅助-itm
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.12.29
// @description  Amazon销量辅助
// @author       Lennon
// @match        *://www.amazon.com/*
// @match        *://www.amazon.de/*
// @match        *://www.amazon.ca/*
// @icon         https://www.amazon.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let asin = window.location.href.split('dp/')[1].split('/')[0].trim();
    let content;
    if(window.location.href.indexOf('www.amazon.com/') != -1) {
        content = '<a href="https://www.sellersprite.com/v2/tools/sales-estimator?market=US&asin=' + asin + '" target="_blank" style="position: fixed;right: 450px;bottom: 300px;z-index: 99;"><button style="font-size: 30px;background-color: #e9faff;">查看销量</button></a>';
    }
    else if(window.location.href.indexOf('www.amazon.de/') != -1) {
        content = '<a href="https://www.sellersprite.com/v2/tools/sales-estimator?market=DE&asin=' + asin + '" target="_blank" style="position: fixed;right: 450px;bottom: 300px;z-index: 99;"><button style="font-size: 30px;background-color: #e9faff;">查看销量</button></a>';
    }
    else if(window.location.href.indexOf('www.amazon.ca/') != -1) {
        content = '<a href="https://www.sellersprite.com/v2/tools/sales-estimator?market=CA&asin=' + asin + '" target="_blank" style="position: fixed;right: 450px;bottom: 300px;z-index: 99;"><button style="font-size: 30px;background-color: #e9faff;">查看销量</button></a>';
    }
    document.querySelector('body').insertAdjacentHTML('afterbegin', content);
})();