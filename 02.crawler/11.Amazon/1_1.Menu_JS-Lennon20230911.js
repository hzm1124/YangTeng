// ==UserScript==
// @name         Amazon爬虫-Menu
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
        let array_menu = new Array();
        let list_part = document.querySelectorAll('div.zg-grid-general-faceout');
        for(let i=0; i<list_part.length; i++) {
            array_menu[i] = {};
            array_menu[i]['No.'] = i + 1;
            array_menu[i]['Url'] = 'https://www.amazon.com' + list_part[i].querySelector('div').querySelector('a').getAttribute('href');
        }
        console.log('Tampermonkey 2：目录获取成功');

        // json
        let json_menu = JSON.stringify(array_menu);
        console.log('Tampermonkey 3：转化JSON成功');

        // blob
        let blob_data = new Blob([json_menu], {type: 'text/plain'});
        let blob_url = URL.createObjectURL(blob_data);
        let blob_a = document.createElement('a');
        blob_a.href = blob_url;
        blob_a.download = window.location.href + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Tampermonkey 4：爬虫结束');
        console.log('= = = = = = = = = = = = = = =\n\n\n');

        // next
        // document.querySelector('a.pagination__next.icon-link').click();
    }
})();