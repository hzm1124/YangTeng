// ==UserScript==
// @name         RockAuto爬虫-Part_Number_Search_1
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.11.29
// @description  Crawler
// @author       Lennon
// @match        *://www.rockauto.com/en/partsearch/*
// @icon         https://www.rockauto.com/favicon.ico
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
        let list_manufacturer = document.querySelectorAll('select#manufacturer_partsearch_007>option');
        for(let i=1; i<list_manufacturer.length; i++) {
            array_data[i-1] = {};
            array_data[i-1]['No.'] = i;
            array_data[i-1]['Manufacturer'] = list_manufacturer[i].innerText;
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
        blob_a.download = 'manufacturer.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Crawler Log 4: End');
        console.log('= = = = = = = = = = = = = = =\n\n\n');
    }
})();