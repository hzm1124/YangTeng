// ==UserScript==
// @name         eBay爬虫-Menu
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.12.13
// @description  Crawler
// @author       Lennon
// @match        *://www.ebay.com/*
// @icon         https://www.ebay.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        let array_data = new Array();
        let list_part = document.querySelectorAll('span.s-item__item-id.s-item__itemID');
        for(let i=0; i<list_part.length; i++) {
            array_data[i] = {};
            array_data[i]['Item_Number'] = list_part[i].innerText.replace('Item:', '').trim();
            array_data[i]['No.'] = i + 1;
        }
        console.log('Crawler Log 2: Array');

        // json
        let json_data = JSON.stringify(array_data);
        console.log('Crawler Log 3: Json');

        // blob
        let blob_data = new Blob([json_data], {type: 'text/plain'});
        let blob_url = URL.createObjectURL(blob_data);
        let blob_a = document.createElement('a');
        blob_a.href = blob_url;
        blob_a.download = window.location.href + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Crawler Log 4: End');
        console.log('= = = = = = = = = = = = = = =\n\n\n');

        // next
        document.querySelector('a.pagination__next.icon-link').click();
    }
})();