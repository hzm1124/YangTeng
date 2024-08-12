// ==UserScript==
// @name         JC爬虫-Menu
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.05.08
// @description  Crawler
// @author       Lennon
// @match        *://www.jcsportlinepro.com/*
// @icon         https://img80003316.weyesimg.com/uploads/ibejvgek.allweyes.com/images/15724377515215.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        // parameter
        let param_page = parseInt(window.location.href.split('_')[window.location.href.split('_').length-1].split('.')[0]);

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        let array_data = new Array();
        let list_part = document.querySelectorAll('div[prolistinquire="item"]>a');
        for(let i=0; i<list_part.length; i++) {
            array_data[i] = {};
            array_data[i]['Page'] = param_page;
            array_data[i]['No.'] = i + 1;
            array_data[i]['Url'] = 'https://www.jcsportlinepro.com' + list_part[i].getAttribute('href').trim();
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
        blob_a.download = String(param_page) + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Crawler Log 4: End');
        console.log('= = = = = = = = = = = = = = =\n\n\n');

        // next
        window.location.href = window.location.href.replace('_' + String(param_page) + '.html', '_' + String(param_page+1) + '.html');
    }
})();