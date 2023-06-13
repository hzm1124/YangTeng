// ==UserScript==
// @name         DENNISKIRK_UTV爬虫-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.06.13
// @description  爬虫系列
// @author       Lennon
// @match        *://www.denniskirk.com/utv/*
// @icon         https://www.denniskirk.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);

        let list_part = document.getElementsByClassName('prod__vars__var');
        let array_part = new Array();
        let var_text;
        for(let i=0; i<list_part.length; i++) {
            var_text = list_part[i].innerHTML;
            if(var_text.startsWith('Part #:')) {
                array_part.push(var_text.replace('Part #:', '').replace(' ', ''));
            }
        }

        let list_url = document.getElementsByClassName('prod__name stretched-link');
        let array_url = new Array();
        for(let i=0; i<list_url.length; i++) {
            array_url.push('https://www.denniskirk.com' + list_url[i].getAttribute('href'));
        }

        // 输出内容
        let array_content = new Array();
        for(let i=0; i<array_part.length; i++) {
            array_content[i] = {};
            array_content[i]['Part'] = array_part[i];
            array_content[i]['Url'] = array_url[i];
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