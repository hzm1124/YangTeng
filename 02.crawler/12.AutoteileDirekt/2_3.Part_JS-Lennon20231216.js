// ==UserScript==
// @name         AutoteileDirekt爬虫-Part
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.12.16
// @description  Crawler
// @author       Lennon
// @match        *://www.autoteiledirekt.de/*
// @icon         https://www.autoteiledirekt.de/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        function sleep(time) {
            return(new Promise(function(resolve, reject) {
                setTimeout(function() { resolve();}, time);
            }));
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        let array_data = new Array();
        array_data[0] = {};
        array_data[0]['序号'] = '';

        let subtitle = document.querySelector('h1.product__title-link>span.product__subtitle').innerText;
        array_data[0]['Title'] = document.querySelector('h1.product__title-link').innerText.replace(subtitle, '').trim();
        array_data[0]['Subtitle'] = subtitle.trim();
        array_data[0]['Price'] = document.querySelector('div.product__new-price').innerText.trim();

        array_data[0]['Kit'] = '';
        let list_kit = document.querySelectorAll('div.product__kit>ul>li');
        for(let i=0; i<list_kit.length; i++) {
            array_data[0]['Kit'] += list_kit[i].innerText.trim() + '\n';
        }
        array_data[0]['Kit'] = array_data[0]['Kit'].trim();

        array_data[0]['Vehicle'] = '';
        let list_make = document.querySelectorAll('div.compatibility__maker-title');
        for(let i=0; i<list_make.length; i++) {
            list_make[i].click();
        }

        sleep(2000).then(function() {
            let list_vehicle = document.querySelectorAll('li.compatibility__model');
            for(let i=0; i<list_vehicle.length; i++) {
                array_data[0]['Vehicle'] += list_vehicle[i].innerText.trim() + '\n';
            }
            array_data[0]['Vehicle'] = array_data[0]['Vehicle'].trim();

            array_data[0]['OE'] = '';
            let list_oe = document.querySelectorAll('a.product-oem__link');
            for(let i=0; i<list_oe.length; i++) {
                array_data[0]['OE'] += list_oe[i].innerText.replace(/^.*?OE-/, '').trim() + ';';
            }
            array_data[0]['OE'] = array_data[0]['OE'].substring(0, array_data[0]['OE'].length-1);

            array_data[0]['Pic'] = '';
            array_data[0]['Url'] = window.location.href;
            array_data[0]['Src'] = document.querySelector('div.main-image>img').getAttribute('src').trim();

            let list_tr = document.querySelectorAll('table.product__table>tbody>tr');
            for(let i=0; i<list_tr.length; i++) {
                array_data[0][list_tr[i].querySelectorAll('td')[0].innerText.trim().toUpperCase()] = list_tr[i].querySelectorAll('td')[1].innerText.trim();
            }

            let list_li = document.querySelectorAll('div.product-analogs__wrapper>ul>li');
            for(let i=0; i<list_li.length; i++) {
                array_data[0][list_li[i].innerText.split(':')[0].trim().toLowerCase()] = list_li[i].innerText.split(':')[1].trim();
            }
            console.log('Crawler Log 2: Array');

            // json
            let json_data = JSON.stringify(array_data);
            console.log('Crawler Log 3: Json');

            // blob
            let blob_data = new Blob([json_data], {type: 'text/plain'});
            let blob_url = URL.createObjectURL(blob_data);
            let blob_a = document.createElement('a');
            blob_a.href = blob_url;
            blob_a.download = window.location.href + '.txt';
            blob_a.click();
            URL.revokeObjectURL(blob_url);
            console.log('Crawler Log 4: Blob');

            // index
            let list_param = window.location.href.split('?')[1].split('&');
            let param_index;
            for(let i=0; i<list_param.length; i++) {
                if(list_param[i].startsWith('index=')) {
                    param_index = list_param[i].split('index=')[1];
                }
            }
            console.log('Crawler Log 5: Index is ' + param_index);
            console.log('Crawler Log 6: Next is ' + (Number(param_index) + 1));

            //url
            let url = 'http://localhost:8080/crawler/12.AutoteileDirekt_2.html?index=' + (Number(param_index) + 1);
            console.log('Crawler Log 7: Go to ' + url);
            console.log('= = = = = = = = = = = = = = =\n\n\n');
            window.location.href = url;
        })
    }
})();