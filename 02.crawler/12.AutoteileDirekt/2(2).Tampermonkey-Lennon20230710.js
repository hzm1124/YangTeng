// ==UserScript==
// @name         AutoteileDirekt爬虫-itm
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.07.10
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
        function sleep(time) {
            return(new Promise(function(resolve, reject) {
                setTimeout(function() { resolve(); }, time);
            }));
        }

        // 输出内容
        let array_content = new Array();
        array_content[0] = {};
        array_content[0]['Url'] = window.location.href;

        let oe = '';
        if(document.getElementsByClassName('product-oem__list').length != 0) {
            let list_oe = document.getElementsByClassName('product-oem__list')[0].getElementsByTagName('li');

            for(let i=0; i<list_oe.length-1; i++){
                oe += list_oe[i].innerText.replace(/^.*? - OE-/, '') + ';';
            }
            oe += list_oe[list_oe.length-1].innerText.replace(/^.*? - OE-/, '');
        }
        array_content[0]['OE'] = oe;

        let list_make = document.getElementsByClassName('compatibility__maker-title');
        for(let i=0; i<list_make.length; i++) {
            list_make[i].click();
        }

        window.scrollTo(0, document.body.scrollHeight);

        sleep(3000).then(function() {
            let vehicle = '';
            if(document.getElementsByClassName('compatibility__model').length != 0) {
                let list_vehicle = document.getElementsByClassName('compatibility__model');
                for(let i=0; i<list_vehicle.length-1; i++) {
                    vehicle += list_vehicle[i].innerText + '\n';
                }
                vehicle += list_vehicle[list_vehicle.length-1].innerText;
            }
            array_content[0]['Vehicle'] = vehicle;

            let src = document.getElementsByClassName('main-image')[0].getElementsByTagName('img')[0].getAttribute('src');
            array_content[0]['Src'] = src;

            let list_description = document.getElementsByClassName('product__table-row');
            for(let i=0; i<list_description.length; i++) {
                if(list_description[i].getElementsByTagName('td')[1].innerText.trim() == '') {
                    array_content[0][list_description[i].getElementsByTagName('td')[0].innerText.trim().toLowerCase()] = 'y';
                }
                else {
                    array_content[0][list_description[i].getElementsByTagName('td')[0].innerText.trim().toLowerCase()] = list_description[i].getElementsByTagName('td')[1].innerText.trim();
                }
            }

            if(document.getElementsByClassName('product-analogs__content').length != 0) {
                let list_tecdoc = document.getElementsByClassName('product-analogs__content')[0].getElementsByTagName('li');
                let row = '';
                for(let i=0; i<list_tecdoc.length; i++) {
                    row = list_tecdoc[i].innerText;
                    array_content[0][row.split(': ')[0].toUpperCase()] = row.split(': ')[1];
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

            window.location.href = 'http://localhost:8080/crawler/12.AutoteileDirekt.html?index=' + (Number(para_index)+1);
        });
    }
})();