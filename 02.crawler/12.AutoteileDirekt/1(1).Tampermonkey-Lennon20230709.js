// ==UserScript==
// @name         AutoteileDirekt爬虫-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.07.09
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

        let list_part_number = document.getElementsByClassName('product-card__artkl');
        let array_part_number = new Array();
        for(let i=0; i<list_part_number.length; i++) {
            array_part_number.push(list_part_number[i].innerText);
        }

        let list_title = document.getElementsByClassName('product-card__title');
        let array_title = new Array();
        for(let i=0; i<list_title.length; i++) {
            array_title.push(list_title[i].innerText.replace('\n', ' '));
        }

        let list_price = document.getElementsByClassName('product-card__new-price');
        let array_price = new Array();
        for(let i=0; i<list_price.length; i++) {
            array_price.push(list_price[i].innerText);
        }

        let list_src = document.getElementsByClassName('main-image ');
        let array_url = new Array();
        let array_src = new Array();
        for(let i=0; i<list_src.length; i++) {
            array_url.push(list_src[i].getAttribute('data-link'));
            array_src.push(list_src[i].getElementsByTagName('img')[0].getAttribute('srcset'));
        }

        // 输出内容
        let array_content = new Array();
        for(let i=0; i<array_part_number.length; i++) {
            array_content[i] = {};
            array_content[i]['Part_Number'] = array_part_number[i];
            array_content[i]['Title'] = array_title[i];
            array_content[i]['Price'] = array_price[i];
            array_content[i]['Url'] = array_url[i];
            array_content[i]['Src'] = array_src[i];
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
        window.location.href = document.querySelector('span[data-pagination-next]').getAttribute('data-ajax-link');
    }
})();