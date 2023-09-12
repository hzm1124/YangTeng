// ==UserScript==
// @name         AutoteileDirekt爬虫-Part
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.09.12
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
                setTimeout(function() { resolve();}, time);
            }));
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Tampermonkey 1：爬虫启动');

        // array
        let array_part = new Array();
        array_part[0] = {};
        array_part[0]['Title'] = document.querySelector('h1.product__title-link').innerText.split('\n')[0];
        array_part[0]['Specification'] = document.querySelector('h1.product__title-link').innerText.split('\n')[1];
        array_part[0]['Price'] = document.querySelector('div.product__new-price').innerText;

        let oe = '';
        let list_oe = document.querySelectorAll('div.product-oem__list>ul>li');
        for(let i=0; i<list_oe.length; i++) {
            oe += list_oe[i].innerText.replace(/^.*?OE-/, '') + ';';
        }
        array_part[0]['OE'] = oe.substring(0, oe.length-1);

        let list_make = document.querySelectorAll('div.compatibility__maker-title');
        for(let i=0; i<list_make.length; i++) {
            list_make[i].click();
        }

        sleep(3000).then(function() {
            let vehicle = '';
            let list_vehicle = document.querySelectorAll('li.compatibility__model');
            for(let i=0; i<list_vehicle.length; i++) {
                vehicle += list_vehicle[i].innerText + '\n';
            }
            array_part[0]['Vehicle'] = vehicle.substring(0, vehicle.length-1);

            array_part[0]['Pic'] = window.location.href;
            array_part[0]['Url'] = window.location.href;
            array_part[0]['Src'] = document.querySelector('div.main-image>img').getAttribute('src');

            let list_description = document.querySelectorAll('tr.product__table-row');
            for(let i=0; i<list_description.length; i++) {
                if(list_description[i].querySelectorAll('td')[1].innerText.trim() == '') {
                    array_part[0][list_description[i].querySelectorAll('td')[0].innerText.trim().toLowerCase()] = 'y';
                }
                else {
                    array_part[0][list_description[i].querySelectorAll('td')[0].innerText.trim().toLowerCase()] = list_description[i].querySelectorAll('td')[1].innerText.trim();
                }
            }

            let list_tecdoc = document.querySelectorAll('div.product-analogs__wrapper>ul>li');
            for(let i=0; i<list_tecdoc.length; i++) {
                array_part[0][list_tecdoc[i].innerText.split(': ')[0].toUpperCase()] = list_tecdoc[i].innerText.split(': ')[1];
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
            window.location.href = 'http://localhost:8080/crawler/12.AutoteileDirekt_1.html?index=' + (Number(param_index) + 1);
        })
    }
})();