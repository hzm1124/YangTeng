// ==UserScript==
// @name         Amazon爬虫-Part
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.09.11
// @description  爬虫
// @author       Lennon
// @match        *://www.amazon.com/*
// @icon         https://www.amazon.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Tampermonkey 1：爬虫启动');

        // array
        let array_part = new Array();
        array_part[0] = {};
        array_part[0]['ASIN'] = window.location.href.split('/dp/')[1].split('/')[0];
        array_part[0]['Title'] = document.querySelector('h1#title').innerText;
        array_part[0]['Price'] = document.querySelector('span.a-offscreen').innerText;

        let list_about = document.querySelectorAll('ul.a-unordered-list.a-vertical.a-spacing-mini>li');
        let about = '';
        for(let i=0; i<list_about.length; i++) {
            about += String(i+1) + '. ' + list_about[i].innerText.trim() + '\n';
        }
        array_part[0]['About'] = about.trim();

        array_part[0]['Pic'] = '';

        array_part[0]['Url'] = window.location.href;

        array_part[0]['Src'] = document.querySelector('div#imgTagWrapperId>img').getAttribute('src');

        let list_th = document.querySelectorAll('table#productDetails_techSpec_section_1 th');
        let list_td = document.querySelectorAll('table#productDetails_techSpec_section_1 td');
        for(let i=0; i<list_th.length; i++) {
            array_part[0][list_th[i].innerText.toLowerCase()] = list_td[i].innerText;
        }

        list_th = document.querySelectorAll('table#productDetails_detailBullets_sections1 th');
        list_td = document.querySelectorAll('table#productDetails_detailBullets_sections1 td');
        for(let i=0; i<list_th.length; i++) {
            if(list_th[i].innerText == 'ASIN') {
                continue;
            }
            array_part[0][list_th[i].innerText.toUpperCase()] = list_td[i].innerText;
        }
        console.log('Tampermonkey 2：内容获取成功');

        // json
        let json_part = JSON.stringify(array_part);
        console.log('Tampermonkey 3：转化JSON成功');

        // blob
        let blob_data = new Blob([json_part], {type: 'text/plain'});
        let blob_url = URL.createObjectURL(blob_data);
        let blob_a = document.createElement('a');
        blob_a.href = blob_url;
        blob_a.download = window.location.href + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Tampermonkey 4：爬虫结束');
        console.log('= = = = = = = = = = = = = = =\n\n\n');

        // next
        let list_param = window.location.href.split('?')[1].split('&');
        let param_index;
        for(let i=0; i<list_param.length; i++) {
            if(list_param[i].startsWith('index=')) {
                param_index = list_param[i].split('index=')[1];
            }
        }
        console.log('下一个index：' + (Number(param_index) + 1));
        window.location.href = 'http://localhost:8080/crawler/11.Amazon_1.html?index=' + (Number(param_index) + 1);
    }
})();