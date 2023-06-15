// ==UserScript==
// @name         RockAuto爬虫-Part_Number_Search
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.06.15
// @description  爬虫
// @author       Lennon
// @match        *://www.rockauto.com/en/parts/*
// @icon         https://www.rockauto.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);

        // 输出内容
        let list_item = document.getElementsByClassName('navlabellink nvoffset nnormal');
        let array_content = new Array();
        for(let i=0; i<list_item.length; i++) {
            array_content[i] = {};
            array_content[i]['Part_Number'] = list_item[i].textContent;
            array_content[i]['Url'] = 'https://www.rockauto.com' + list_item[i].getAttribute('href');
        }

        // json
        let json_content = JSON.stringify(array_content);
        console.log(json_content);

        // blob
        let blob_data = new Blob([json_content], {type: 'text/plain'});
        let blob_url = URL.createObjectURL(blob_data);
        let blob_a = document.createElement('a');
        blob_a.href = blob_url;
        blob_a.download = 'menu.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
    }
})();