// ==UserScript==
// @name         Schaeffler爬虫-Menu
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.02.20
// @description  Crawler
// @author       Lennon
// @match        *://aftermarket.schaeffler.com/en/search/results?*
// @icon         https://aftermarket.schaeffler.com/favicon.ico
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
        let list_part = document.querySelectorAll('saam-product-item.mb-1.saam-product-item.ng-star-inserted>saam-product-card-condensed>a');
        for(let i=0; i<list_part.length; i++) {
            array_data[i] = {};
            array_data[i]['Url'] = list_part[i].getAttribute('href').trim();
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
        document.querySelector('a[aria-label="Next page"]').click();
    }
})();