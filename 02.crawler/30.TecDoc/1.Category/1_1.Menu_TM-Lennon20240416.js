// ==UserScript==
// @name         TecDoc爬虫-Menu
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.04.16
// @description  Crawler
// @author       Lennon
// @match        *://web.tecalliance.net/*
// @icon         https://catalog-files.tecalliance.services/AzyKoWCh9tXQYtXSCcJc8/images/favicon-2021-10-22.7.48.34.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        // parameter
        let list_param = window.location.href.split('?')[1].split('&');
        let param_page = 0;
        let groups;
        for(let i=0; i<list_param.length; i++) {
            if(list_param[i].startsWith('page=')) {
                param_page = parseInt(list_param[i].split('page=')[1]);
            }
            else if(list_param[i].startsWith('groups=')){
                groups = list_param[i].split('groups=')[1];
            }
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        let array_data = new Array();
        let list_part = document.querySelectorAll('div.ag-center-cols-container>div');
        for(let i=0; i<list_part.length; i++) {
            array_data[i] = {};
            array_data[i]['Page'] = param_page + 1;
            array_data[i]['No.'] = i + 1;
            array_data[i]['Row_Id'] = list_part[i].getAttribute('row-id').trim();
            array_data[i]['Groups'] = groups;
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
        blob_a.download = String(param_page + 1) + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Crawler Log 4: End');
        console.log('= = = = = = = = = = = = = = =\n\n\n');

        // next
        window.location.href = window.location.href.replace('page=' + String(param_page), 'page=' + String(param_page + 1));
    }
})();