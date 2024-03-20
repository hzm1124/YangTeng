// ==UserScript==
// @name         Amazon爬虫-Best_Sellers
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.03.19
// @description  Crawler
// @author       Lennon
// @match        *://www.amazon.com/*
// @icon         https://www.amazon.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        // parameter
        let list_param = window.location.href.split('?')[1].split('&');
        let param_pg;
        for(let i=0; i<list_param.length; i++) {
            if(list_param[i].startsWith('pg=')) {
                param_pg = parseInt(list_param[i].split('pg=')[1]);
            }
        }
        if(param_pg == undefined) {
            param_pg = 1;
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        let array_data = new Array();
        let list_part = document.querySelectorAll('div#gridItemRoot');
        for(let i=0; i<list_part.length; i++) {
            array_data[i] = {};
            array_data[i]['No.'] = parseInt(list_part[i].querySelector('div.a-section.zg-bdg-ctr>div>span.zg-bdg-text').innerText.trim().replace('#', ''));
            array_data[i]['Url'] = 'https://www.amazon.com' + list_part[i].querySelector('div.zg-grid-general-faceout>div>a').getAttribute('href').trim();
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
        blob_a.download = String(param_pg) + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Crawler Log 4: End');
        console.log('= = = = = = = = = = = = = = =\n\n\n');

        // next
        document.querySelector('li.a-last>a').click();
    }
})();