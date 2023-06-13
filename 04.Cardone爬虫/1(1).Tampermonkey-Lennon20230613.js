// ==UserScript==
// @name         Cardone爬虫-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.06.13
// @description  爬虫系列
// @author       Lennon
// @match        *://www.cardone.com/*
// @icon         https://cdn11.bigcommerce.com/s-z9vhe3o238/product_images/CARDONE-CMark.png?t=1645211120
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        // 输出内容
        let list_item = document.getElementsByClassName('card-title NoMargin');
        let array_content = new Array();
        for(let i=0; i<list_item.length; i++) {
            array_content[i] = {};
            array_content[i]['Title'] = list_item[i].getElementsByTagName('a')[0].innerText;
            array_content[i]['Url'] = list_item[i].getElementsByTagName('a')[0].getAttribute('href');
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
        document.getElementsByClassName('pagination-link pagination-link--next')[0].click();
    }
})();