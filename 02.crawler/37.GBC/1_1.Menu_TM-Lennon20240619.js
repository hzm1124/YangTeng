// ==UserScript==
// @name         GBC爬虫-Menu
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.06.19
// @description  Crawler
// @author       Lennon
// @match        *://www.fenderliner.com/*
// @icon         http://www.fenderliner.com/images/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        // parameter
        let list_param = window.location.href.split('?')[1].split('&');
        let param_page = 1;
        for(let i=0; i<list_param.length; i++) {
            if(list_param[i].startsWith('page=')) {
                param_page = parseInt(list_param[i].split('page=')[1]);
            }
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        let array_data = new Array();
        let list_part = document.querySelectorAll('ul.pro-list>li>div.pro-list-img>a');
        for(let i=0; i<list_part.length; i++) {
            array_data[i] = {};
            array_data[i]['Page'] = param_page;
            array_data[i]['No.'] = i + 1;
            array_data[i]['Url'] = 'http://www.fenderliner.com/' + list_part[i].getAttribute('href').trim();
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
        if(document.querySelector('a[title="Next"]').getAttribute('href').trim() != '#') {
            document.querySelector('a[title="Next"]').click();
        }
    }
})();