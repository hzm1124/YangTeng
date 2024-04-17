// ==UserScript==
// @name         ThePartsHQ爬虫-Menu
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.04.11
// @description  Crawler
// @author       Lennon
// @match        *://portal.thepartshq.com/*
// @icon         https://portal.thepartshq.com/static/version1710219206/frontend/Marmon/universalparts/en_US/images/logo.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        // parameter
        let list_param = window.location.href.split('?')[1].split('&');
        let param_p = 1;
        for(let i=0; i<list_param.length; i++) {
            if(list_param[i].startsWith('p=')) {
                param_p = parseInt(list_param[i].split('p=')[1]);
            }
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        let array_data = new Array();
        let list_part = document.querySelectorAll('p.product_tile_part');
        let list_part_2 = document.querySelectorAll('a.view-product-btn');
        for(let i=0; i<list_part.length; i++) {
            array_data[i] = {};
            array_data[i]['Page'] = param_p;
            array_data[i]['No.'] = i + 1;
            array_data[i]['Part_Number'] = list_part[i].innerText.replace('SKU', '').trim();
            array_data[i]['Url'] = list_part_2[i].getAttribute('href').trim();
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
        blob_a.download = String(param_p) + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Crawler Log 4: End');
        console.log('= = = = = = = = = = = = = = =\n\n\n');

        // next
        document.querySelector('a[title="Next"]').click();
    }
})();