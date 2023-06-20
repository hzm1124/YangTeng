// ==UserScript==
// @name         Denniskirk爬虫-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.06.20
// @description  爬虫
// @author       Lennon
// @match        *://www.denniskirk.com/*
// @icon         https://www.denniskirk.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);

        // 输出内容
        let list_part = document.getElementsByClassName('prod__specs');
        let array_content = new Array();
        for(let i=0; i<list_part.length; i++) {
            let url = 'https://www.denniskirk.com' + list_part[i].getElementsByClassName('prod__name stretched-link')[0].getAttribute('href');
            let brand = list_part[i].getElementsByClassName('prod__name__brand')[0].innerText;
            let title = list_part[i].getElementsByClassName('prod__name stretched-link')[0].innerText.replace(brand, '').trim();
            let price = list_part[i].getElementsByClassName('prod__pricing')[0].innerText;
            array_content[i] = {};
            array_content[i]['Title'] = title;
            array_content[i]['Brand'] = brand;
            array_content[i]['Price'] = price;
            array_content[i]['Url'] = url;
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
        let next_button = document.getElementById('next-btn');
        if(next_button.getAttribute('href') != '') {
            next_button.click();
        }
    }
})();