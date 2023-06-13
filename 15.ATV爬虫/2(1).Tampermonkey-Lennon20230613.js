// ==UserScript==
// @name         DENNISKIRK_UTV爬虫-itm
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.06.13
// @description  爬虫系列
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

        let desktop = document.getElementsByClassName('desktop-only')[0];
        let brand = desktop.getElementsByClassName('brand-info')[0].innerText.trim();
        let title = desktop.getElementsByClassName('sku-title')[0].innerText.trim();
        let price = document.getElementsByClassName('price--after')[0].textContent.trim().split('\t')[0].split(':')[1].trim();
        let src = 'https://www.denniskirk.com' + document.getElementsByClassName('js-popup-link')[0].getAttribute('href');

        let list_tr = document.getElementsByClassName('table table-striped table-md')[0].getElementsByTagName('tr');
        let array_key = new Array();
        let array_value = new Array();
        for(let i=0; i<list_tr.length; i++) {
            array_key.push(list_tr[i].getElementsByTagName('th')[0].innerText);
            array_value.push(list_tr[i].getElementsByTagName('td')[0].innerText);
        }

        let oe;
        if(document.getElementsByClassName('part__adtl')[0] == undefined) {
            oe = '';
        }
        else {
            oe = document.getElementsByClassName('part__adtl')[0].innerText.split('\n')[1].trim();
        }

        let list_make = document.getElementsByClassName('make-heading');
        let list_model_year = document.getElementsByClassName('fm__list fm__list--$fitmentListCount accordion row');
        let array_vehicle = new Array();
        for(let i=0; i<list_model_year.length; i++) {
            let model_year = list_model_year[i].getElementsByClassName('fm__list__item');
            for(let j=0; j<model_year.length; j++) {
                array_vehicle.push(list_make[i].innerText.trim() + ' ' + model_year[j].textContent.split('\n')[0].replace(' •', '') + ' ' + model_year[j].getElementsByTagName('span')[0].innerText);
            }
        }

        // 输出内容
        let content = {};
        content['Url'] = window.location.href;
        content['Brand'] = brand;
        content['Title'] = title;
        content['Price'] = price;
        content['Src'] = src;
        for(let i=0; i<array_key.length; i++) {
            content[array_key[i].toLowerCase()] = array_value[i];
        }
        content['OE'] = oe;
        content['Vehicle'] = array_vehicle;

        // json
        let json_content = JSON.stringify(content);
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

        window.location.href = 'http://localhost:8080/crawler/16.ATV%E7%88%AC%E8%99%AB.html?index=' + (Number(para_index)+1);
    }
})();