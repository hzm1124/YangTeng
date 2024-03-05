// ==UserScript==
// @name         eBay爬虫-Search
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.03.05
// @description  Crawler
// @author       Lennon
// @match        *://www.ebay.com/*
// @match        *://www.ebay.de/*
// @match        *://www.ebay.com.au/*
// @match        *://www.ebay.co.uk/*
// @icon         https://www.ebay.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        // parameter
        let list_param = window.location.href.split('?')[1].split('&');
        let param__pgn;
        for(let i=0; i<list_param.length; i++) {
            if(list_param[i].startsWith('_pgn=')) {
                param__pgn = parseInt(list_param[i].split('_pgn=')[1]);
            }
        }
        if(param__pgn == undefined) {
            param__pgn = 1;
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        let array_data = new Array();
        let list_part = document.querySelectorAll('span.s-item__item-id.s-item__itemID');
        for(let i=0; i<list_part.length; i++) {
            array_data[i] = {};
            array_data[i]['Page'] = param__pgn;
            array_data[i]['No.'] = i + 1;
            if(window.location.href.includes('://www.ebay.com/') || window.location.href.includes('://www.ebay.co.uk/')) {
                array_data[i]['Item_Number'] = list_part[i].innerText.replace('Item:', '').trim();
            }
            else if(window.location.href.includes('://www.ebay.de/')) {
                array_data[i]['Item_Number'] = list_part[i].innerText.replace('Artikel:', '').trim();
            }
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
        blob_a.download = String(param__pgn) + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Crawler Log 4: End');
        console.log('= = = = = = = = = = = = = = =\n\n\n');

        // next
        document.querySelector('a.pagination__next.icon-link').click();
    }
})();