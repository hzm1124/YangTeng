// ==UserScript==
// @name         TurbochargerPros爬虫-Menu
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.03.27
// @description  Crawler
// @author       Lennon
// @match        *://www.turbochargerpros.com/search_result.asp?*
// @icon         https://www.turbochargerpros.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        // parameter
        let list_param = window.location.href.split('?')[1].split('#')[0].split('&');
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
        let list_part = document.querySelectorAll('div.ss-image>a');
        for(let i=0; i<list_part.length; i++) {
            array_data[i] = {};
            array_data[i]['Page'] = param_page;
            array_data[i]['No.'] = i + 1;
            array_data[i]['Url'] = 'https:' + list_part[i].getAttribute('href').trim();
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
        window.location.href = document.querySelector('div[ng-if="pagination.next"]>a').getAttribute('href');
    }
})();