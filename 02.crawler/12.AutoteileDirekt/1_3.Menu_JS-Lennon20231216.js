// ==UserScript==
// @name         AutoteileDirekt爬虫-Menu
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.12.16
// @description  Crawler
// @author       Lennon
// @match        *://www.autoteiledirekt.de/suche.html?*
// @icon         https://www.autoteiledirekt.de/favicon.ico
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
        let list_part = document.querySelectorAll('div.product-card__image>span');
        for(let i=0; i<list_part.length; i++) {
            array_data[i] = {};
            array_data[i]['No.'] = i + 1;
            array_data[i]['Url'] = list_part[i].getAttribute('data-link').trim();
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
        console.log('Crawler Log 4: Blob');

        // index
        let list_param = window.location.href.split('?')[1].split('&');
        let param_index;
        for(let i=0; i<list_param.length; i++) {
            if(list_param[i].startsWith('index=')) {
                param_index = list_param[i].split('index=')[1];
            }
        }
        console.log('Crawler Log 5: Index is ' + param_index);
        console.log('Crawler Log 6: Next is ' + (Number(param_index) + 1));

        //url
        let url = 'http://localhost:8080/crawler/12.AutoteileDirekt_1.html?index=' + (Number(param_index) + 1);
        console.log('Crawler Log 7: Go to ' + url);
        console.log('= = = = = = = = = = = = = = =\n\n\n');
        window.location.href = url;
    }
})();