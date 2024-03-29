// ==UserScript==
// @name         Cub爬虫-Menu
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.03.29
// @description  Crawler
// @author       Lennon
// @match        *://www.cubelec.com.tw/*
// @icon         https://www.cubelec.com.tw/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        // parameter
        let list_param = window.location.href.split('?')[1].split('&');
        let param_page = 1;
        for(let i=0; i<list_param.length; i++) {
            if(list_param[i].startsWith('PAGENUM=')) {
                param_page = parseInt(list_param[i].split('PAGENUM=')[1]);
            }
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        let array_data = new Array();
        let list_part = document.querySelectorAll('div#content-right-second-bottom')[1].querySelectorAll('tr');
        for(let i=2, j=0; i<list_part.length-2; i+=2, j++) {
            array_data[j] = {};
            array_data[j]['Page'] = param_page;
            array_data[j]['No.'] = j + 1;

            let list_td = list_part[i].querySelectorAll('td');
            array_data[j]['Src'] = 'https://www.cubelec.com.tw/' + list_td[0].querySelector('a').getAttribute('href').trim();
            array_data[j]['Url'] = 'https://www.cubelec.com.tw/' + list_td[1].querySelector('a').getAttribute('href').trim();
            array_data[j]['Part_Number'] = list_td[1].querySelector('a').innerText.trim();
            array_data[j]['Name'] = list_td[2].innerText.trim();


            let list_info = list_td[3].innerText.split('\nCAR BRAND : ');
            if(list_info.length == 1) {
                array_data[j]['OE'] = list_info[0].trim().replace(/^OEM NO : /, '').replace(/, /g, ';');
                array_data[j]['Vehicle'] = '';
            }
            else {
                array_data[j]['OE'] = list_info[0].trim().replace(/^OEM NO : /, '').replace(/, /g, ';');
                array_data[j]['Vehicle'] = list_info[1].trim();
            }

            array_data[j]['Date'] = list_td[4].innerText.trim();
            array_data[j]['Pic'] = '';
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
        blob_a.download = String(param_page) + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Crawler Log 4: End');
        console.log('= = = = = = = = = = = = = = =\n\n\n');

        // next
        document.querySelector('a[title="Next"]').click();
    }
})();