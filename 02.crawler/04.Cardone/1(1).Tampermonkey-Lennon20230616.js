// ==UserScript==
// @name         Cardone爬虫-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.06.16
// @description  爬虫
// @author       Lennon
// @match        *://www.cardone.com/*
// @icon         https://cdn11.bigcommerce.com/s-z9vhe3o238/product_images/CARDONE-CMark.png?t=1645211120
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);

        // 输出内容
        let list_part = document.getElementsByClassName('card-title NoMargin');
        let array_content = new Array();
        for(let i=0; i<list_part.length; i++) {
            array_content[i] = {};
            array_content[i]['Title'] = list_part[i].getElementsByTagName('a')[0].innerText;
            array_content[i]['Url'] = list_part[i].getElementsByTagName('a')[0].getAttribute('href');
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
        window.location.href = document.getElementsByClassName('pagination-link pagination-link--next')[0].getAttribute('href');
    }
})();