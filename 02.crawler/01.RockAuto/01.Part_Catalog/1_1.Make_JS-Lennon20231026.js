// ==UserScript==
// @name         RockAuto爬虫-Part_Catalog
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.10.26
// @description  Crawler
// @author       Lennon
// @match        *://www.rockauto.com/en/catalog/*
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
        let list_make = document.querySelectorAll('td.niconspace.ncollapsedicon>a');
        for(let i=0; i<list_make.length; i++) {
            array_data[i] = {};
            array_data[i]['No.'] = i + 1;
            array_data[i]['Url'] = 'https://www.rockauto.com' + list_make[i].getAttribute('href').trim();
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
        blob_a.download = 'make.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Crawler Log 4: End');
        console.log('= = = = = = = = = = = = = = =\n\n\n');
    }
})();