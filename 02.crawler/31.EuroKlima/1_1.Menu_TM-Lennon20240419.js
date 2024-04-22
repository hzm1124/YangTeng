// ==UserScript==
// @name         EuroKlima爬虫-Menu
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.04.19
// @description  Crawler
// @author       Lennon
// @match        *://en.euro-klima.pl/*
// @icon         https://en.euro-klima.pl/media/favicon/stores/5/euro-klima-favicon.png
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

        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        if(document.querySelectorAll('div.message.info.empty').length == 0) {
            let array_data = new Array();
            let list_part = document.querySelectorAll('a.product-item-link');
            for(let i=0; i<list_part.length; i++) {
                array_data[i] = {};
                array_data[i]['Page'] = param_p;
                array_data[i]['No.'] = i + 1;
                array_data[i]['Url'] = list_part[i].getAttribute('href').trim();
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
            if(window.location.href.includes('&p=')) {
                window.location.href = window.location.href.replace('&p=' + String(param_p), '&p=' + String(param_p+1))
            }
            else {
                window.location.href = window.location.href + '&p=2';
            }
        }
    }
})();