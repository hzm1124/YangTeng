// ==UserScript==
// @name         Amazon爬虫-Part
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.12.01
// @description  Crawler
// @author       Lennon
// @match        *://www.amazon.com/*
// @icon         https://www.amazon.com/favicon.ico
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
        array_data[0] = {};
        array_data[0]['ASIN'] = window.location.href.split('/dp/')[1].split('/')[0].trim();
        array_data[0]['Title'] = document.querySelector('h1#title').innerText.trim();
        array_data[0]['Price'] = document.querySelector('span.a-offscreen').innerText.trim();

        let list_about = document.querySelectorAll('ul.a-unordered-list.a-vertical.a-spacing-mini>li');
        let about = '';
        for(let i=0; i<list_about.length; i++) {
            about += String(i+1) + '. ' + list_about[i].innerText.trim() + '\n';
        }
        array_data[0]['About'] = about.trim();

        array_data[0]['Pic'] = '';
        array_data[0]['Url'] = window.location.href.trim();
        array_data[0]['Src'] = document.querySelector('div#imgTagWrapperId>img').getAttribute('src').trim();

        let list_th = document.querySelectorAll('table#productDetails_techSpec_section_1 th');
        let list_td = document.querySelectorAll('table#productDetails_techSpec_section_1 td');
        for(let i=0; i<list_th.length; i++) {
            array_data[0][list_th[i].innerText.toLowerCase()] = list_td[i].innerText.trim();
        }

        list_th = document.querySelectorAll('table#productDetails_detailBullets_sections1 th');
        list_td = document.querySelectorAll('table#productDetails_detailBullets_sections1 td');
        for(let i=0; i<list_th.length; i++) {
            if(list_th[i].innerText == 'ASIN') {
                continue;
            }
            array_data[0][list_th[i].innerText.toUpperCase()] = list_td[i].innerText.trim();
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
        let url = 'http://localhost:8080/crawler/11.Amazon_1.html?index=' + (Number(param_index) + 1);
        console.log('Crawler Log 7: Go to ' + url);
        console.log('= = = = = = = = = = = = = = =\n\n\n');
        window.location.href = url;
    }
})();