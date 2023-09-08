// ==UserScript==
// @name         eBay爬虫-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.09.08
// @description  爬虫
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
        console.log('爬虫启动...');

        let list_item = document.querySelectorAll('div[class="s-item__image-section"]');

        // array
        let array_content = new Array();
        let url;
        for(let i=1; i<list_item.length; i++) {
            array_content[i-1] = {};
            url = list_item[i].querySelector('div').querySelector('a').getAttribute('href');
            array_content[i-1]['Url'] = url;
            array_content[i-1]['Item_Number'] = url.split('?')[0].substr(-12, 12);
        }
        console.log('数量：' + array_content.length);

        // json
        let json_content = JSON.stringify(array_content);
        console.log('JSON格式');

        // blob
        let blob_data = new Blob([json_content], {type: 'text/plain'});
        let blob_url = URL.createObjectURL(blob_data);
        let blob_a = document.createElement('a');
        blob_a.href = blob_url;
        blob_a.download = window.location.href.replace('http://', '').replace('https://', '') + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('搞定！');

        // next
        document.querySelector('a[class="pagination__next icon-link"]').click();
    }
})();