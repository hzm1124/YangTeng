// ==UserScript==
// @name         AutoteileDirekt爬虫-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.09.09
// @description  爬虫
// @author       Lennon
// @match        *://www.autoteiledirekt.de/*
// @icon         https://www.autoteiledirekt.de/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);
        console.log('爬虫启动...');

        let list_part_number = document.querySelectorAll('div.product-card__artkl');
        let array_part_number = new Array();
        for(let i=0; i<list_part_number.length; i++) {
            array_part_number.push(list_part_number[i].innerText);
        }

        let list_title = document.querySelectorAll('div.product-card__title');
        let array_title = new Array();
        for(let i=0; i<list_title.length; i++) {
            array_title.push(list_title[i].innerText.replace('\n', ' '));
        }

        let list_price = document.querySelectorAll('div.product-card__new-price');
        let array_price = new Array();
        for(let i=0; i<list_price.length; i++) {
            array_price.push(list_price[i].innerText);
        }

        let list_url = document.querySelectorAll('a.product-card__title-link');
        let array_url = new Array();
        for(let i=0; i<list_url.length; i++) {
            array_url.push(list_url[i].getAttribute('href'));
        }

        // array
        let array_content = new Array();
        for(let i=0; i<array_part_number.length; i++) {
            array_content[i] = {};
            array_content[i]['Part_Number'] = array_part_number[i];
            array_content[i]['Title'] = array_title[i];
            array_content[i]['Price'] = array_price[i];
            array_content[i]['Url'] = array_url[i];
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
        blob_a.download = window.location.href.replace('https://', '').replace('http://', '') + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('搞定！');

        // next
        window.location.href = document.querySelector('span[data-pagination-next]').getAttribute('data-ajax-link');
    }
})();