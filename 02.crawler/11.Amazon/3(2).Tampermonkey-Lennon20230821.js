// ==UserScript==
// @name         Amazon爬虫-itm
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.08.21
// @description  爬虫
// @author       Lennon
// @match        *://www.amazon.com/*
// @icon         
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        // 输出内容
        let array_content = new Array();
        array_content[0] = {};
        array_content[0]['Url'] = window.location.href.replace(/[&\?]index=[0-9]+/, '');

        array_content[0]['Title'] = document.querySelector('span[id="productTitle"]').innerText;

        if(document.querySelector('ul[class="a-unordered-list a-vertical a-spacing-mini"]') != null) {
            let list_about = document.querySelector('ul[class="a-unordered-list a-vertical a-spacing-mini"]').getElementsByTagName('li');
            let about = ''
            for(let i=0; i<list_about.length; i++) {
                about += String(i+1) + '. ' + list_about[i].innerText + '\n';
            }
            array_content[0]['Info'] = about.trim();
        }

        array_content[0]['Src'] = document.querySelector('div[id="imgTagWrapperId"]').getElementsByTagName('img')[0].getAttribute('src');

        if(document.querySelector('table[id="productDetails_techSpec_section_1"]') != null) {
            let list_th_1 = document.querySelector('table[id="productDetails_techSpec_section_1"]').getElementsByTagName('th');
            let list_td_1 = document.querySelector('table[id="productDetails_techSpec_section_1"]').getElementsByTagName('td');
            for(let i=0; i<list_th_1.length; i++) {
                array_content[0][list_th_1[i].innerText.toLowerCase()] = list_td_1[i].innerText;
            }
        }

        if(document.querySelector('table[id="productDetails_detailBullets_sections1"]') != null) {
            let list_th_2 = document.querySelector('table[id="productDetails_detailBullets_sections1"]').getElementsByTagName('th');
            let list_td_2 = document.querySelector('table[id="productDetails_detailBullets_sections1"]').getElementsByTagName('td');
            for(let i=0; i<list_th_2.length; i++) {
                array_content[0][list_th_2[i].innerText.toLowerCase()] = list_td_2[i].innerText;
            }
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
        let list_para = location.href.split('?')[1].split('&');
        let para_index;
        for(let i=0; i<list_para.length; i++) {
            if(list_para[i].startsWith('index=')) {
                para_index = list_para[i].split('index=')[1];
            }
        }
        console.log('index：' + para_index);

        window.location.href = 'http://localhost:8080/crawler/11.Amazon.html?index=' + (Number(para_index)+1);
    }
})();