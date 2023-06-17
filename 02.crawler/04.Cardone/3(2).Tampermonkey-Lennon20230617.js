// ==UserScript==
// @name         Cardone爬虫-OE
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.06.17
// @description  爬虫
// @author       Lennon
// @match        *://productdesk-api.cellacore.net/*
// @icon         https://cdn11.bigcommerce.com/s-z9vhe3o238/product_images/CARDONE-CMark.png?t=1645211120
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.scrollTo(0, document.body.scrollHeight);

    // 输出内容
    let list_row = JSON.parse(document.getElementsByTagName('pre')[0].innerText)[0]['CrossReferences'];
    let array_oe = new Array();
    for(let i=0; i<list_row.length; i++) {
        if(list_row[i]['referenceType'] == 'OE Part' && !array_oe.includes(list_row[i]['reference'])) {
            array_oe.push(list_row[i]['reference']);
        }
    }
    array_oe.sort()
    let array_content = new Array();
    array_content[0] = {};
    array_content[0]['Part_Number'] = window.location.href.split(':')[2].split('&')[0];
    array_content[0]['OE_Numbers'] = array_oe.join(';');

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

    window.location.href = 'http://localhost:8080/crawler/04.Cardone.html?index=' + (Number(para_index)+1);
})();