// ==UserScript==
// @name         eBay爬虫
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.06.13
// @description  爬虫系列
// @author       Lennon
// @match        *://www.ebay.com/sch/*
// @match        *://www.ebay.de/sch/*
// @match        *://www.ebay.co.uk/sch/*
// @match        *://www.ebay.com.au/sch/*
// @match        *://www.ebay.ca/sch/*
// @icon         https://www.ebay.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);

        // 输出内容
        let list_item = document.getElementsByClassName('s-item__image-section');
        let array_content = new Array();
        let item_url;
        for(let i=1; i<list_item.length; i++) {
            array_content[i-1] = {};
            item_url = list_item[i].getElementsByTagName('div')[0].getElementsByTagName('a')[0].getAttribute('href');
            array_content[i-1]['Item_Number'] = item_url.split('?')[0].substr(-12, 12);
            array_content[i-1]['Url'] = item_url;
        }

        // json
        let json_content = JSON.stringify(array_content);
        console.log(json_content);

        // blob
        let blob_data = new Blob([json_content], {type: 'text/plain'});
        let blob_url = URL.createObjectURL(blob_data);
        let blob_a = document.createElement('a');
        blob_a.href = blob_url;
        blob_a.download = window.location.href.replace('http://', '').replace('https://', '') + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);

        // next
        document.getElementsByClassName('pagination__next icon-link')[0].click();
    }
})();