// ==UserScript==
// @name         Denniskirk爬虫-itm
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
        // 输出内容
        let array_content = new Array();
        array_content[0] = {};
        array_content[0]['Url'] = window.location.href.split('?')[0];

        let list_oe = document.getElementsByClassName('col-md right-column')[0].getElementsByClassName('part__adtl');
        if(list_oe.length != 0) {
            for(let i=0; i<list_oe.length; i++) {
                let name_value = list_oe[i].innerText.split('\n');
                array_content[0][name_value[0].replace(':', '')] = name_value[1];
            }
        }

        let list_make = document.getElementsByClassName('make-heading');
        let list_list_model_year = document.getElementsByClassName('fm__list fm__list--$fitmentListCount accordion row');
        let array_vehicle = new Array();
        for(let i=0; i<list_make.length; i++) {
            let list_model_year = list_list_model_year[i].getElementsByClassName('fm__list__item');
            for(let j=0; j<list_model_year.length; j++) {
                array_vehicle.push(list_make[i].innerText.trim() + ' ' + list_model_year[j].innerText.replace(/\n/g, '').replace(/\t/g, '').replace(' • ', ' ').replace(' •', ' '));
            }
        }
        array_content[0]['Vehicle'] = array_vehicle.join('\n');

        let src = 'https://www.denniskirk.com' + document.getElementById('primary-media-container').getElementsByTagName('img')[0].getAttribute('src');
        array_content[0]['Src'] = src;

        let list_row = document.getElementsByClassName('overview-specs')[0].getElementsByTagName('tr');
        for(let i=0; i<list_row.length; i++) {
            array_content[0][list_row[i].getElementsByTagName('th')[0].innerText.toLowerCase()] = list_row[i].getElementsByTagName('td')[0].innerText;
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

        window.location.href = 'http://localhost:8080/crawler/09.Denniskirk.html?index=' + (Number(para_index)+1);
    }
})();