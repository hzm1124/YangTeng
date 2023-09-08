// ==UserScript==
// @name         AutoteileDirekt爬虫-itm
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.09.08
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
        let data = '[{"Url":"https://www.autoteiledirekt.de/nissens-7023595.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7850717.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7275626.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7275624.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7023973.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7518058.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7026513.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7025436.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7281864.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7643543.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7025335.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7024297.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7025071.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7019611.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7743586.html"},{"Url":"https://www.autoteiledirekt.de/nissens-10382564.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7026304.html"},{"Url":"https://www.autoteiledirekt.de/nissens-8157611.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7024166.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7025517.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7707778.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7025007.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7282266.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7026604.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7026010.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7023769.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7275637.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7026330.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7025485.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7933901.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7023266.html"},{"Url":"https://www.autoteiledirekt.de/nissens-8326955.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7023794.html"},{"Url":"https://www.autoteiledirekt.de/nissens-10383351.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7275635.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7023114.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7024112.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7024473.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7023405.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7025838.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7743561.html"},{"Url":"https://www.autoteiledirekt.de/nissens-8038943.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7026049.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7437572.html"},{"Url":"https://www.autoteiledirekt.de/nissens-7024196.html"}]'

        function sleep(time) {
            return(new Promise(function(resolve, reject) {
                setTimeout(function() { resolve(); }, time);
            }));
        }

        // array
        let array_content = new Array();
        array_content[0] = {};
        array_content[0]['Url'] = window.location.href;

        let oe = '';
        if(document.querySelectorAll('.product-oem__list').length != 0) {
            let list_oe = document.querySelector('.product-oem__list').querySelectorAll('li');

            for(let i=0; i<list_oe.length-1; i++){
                oe += list_oe[i].innerText.replace(/^.*? - OE-/, '') + ';';
            }
            oe += list_oe[list_oe.length-1].innerText.replace(/^.*? - OE-/, '');
        }
        array_content[0]['OE'] = oe;

        let list_make = document.querySelectorAll('.compatibility__maker-title');
        for(let i=0; i<list_make.length; i++) {
            list_make[i].click();
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('爬虫启动...');

        sleep(3000).then(function() {
            let vehicle = '';
            if(document.querySelectorAll('.compatibility__model').length != 0) {
                let list_vehicle = document.querySelectorAll('.compatibility__model');
                for(let i=0; i<list_vehicle.length-1; i++) {
                    vehicle += list_vehicle[i].innerText + '\n';
                }
                vehicle += list_vehicle[list_vehicle.length-1].innerText;
            }
            array_content[0]['Vehicle'] = vehicle;

            let src = document.querySelector('.main-image').querySelector('img').getAttribute('src');
            array_content[0]['Src'] = src;

            let list_description = document.querySelectorAll('.product__table-row');
            for(let i=0; i<list_description.length; i++) {
                if(list_description[i].querySelectorAll('td')[1].innerText.trim() == '') {
                    array_content[0][list_description[i].querySelector('td').innerText.trim().toLowerCase()] = 'y';
                }
                else {
                    array_content[0][list_description[i].querySelector('td').innerText.trim().toLowerCase()] = list_description[i].querySelectorAll('td')[1].innerText.trim();
                }
            }

            if(document.querySelectorAll('.product-analogs__content').length != 0) {
                let list_tecdoc = document.querySelector('.product-analogs__content').querySelectorAll('li');
                let row = '';
                for(let i=0; i<list_tecdoc.length; i++) {
                    row = list_tecdoc[i].innerText;
                    array_content[0][row.split(': ')[0].toUpperCase()] = row.split(': ')[1];
                }
            }

            // json
            let json_content = JSON.stringify(array_content);
            console.log('JSON格式');

            // blob
            let blob_data = new Blob([json_content], {type: 'text/plain'});
            let blob_url = URL.createObjectURL(blob_data);
            let blob_a = document.createElement('a');
            blob_a.href = blob_url;
            blob_a.download = window.location.href.replace('https://', '').replace('http://', '') + '.txt';
            blob_a.click();
            console.log('搞定！');

            // next
            let json_data = JSON.parse(data);
            let index;
            for(let i=0; i<json_data.length; i++) {
                if(json_data[i]['Url'] == window.location.href) {
                    index = i;
                    break;
                }
            }
            console.log('index：' + index);

            window.location.href = 'http://localhost:8080/crawler/12.AutoteileDirekt_1.html?index=' + (Number(index)+1);
        });
    }
})();