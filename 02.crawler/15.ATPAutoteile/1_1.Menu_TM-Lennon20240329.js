// ==UserScript==
// @name         ATPAutoteile爬虫-Menu
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.03.28
// @description  Crawler
// @author       Lennon
// @match        *://www.atp-autoteile.de/*
// @icon         https://www.atp-autoteile.de/r/a7d27947cefc62c2e9f03c88281b22d5/static/images/logo/ATP_Logo_1.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        // parameter
        let list_param = window.location.href.split('/');
        let param_page = 1;
        for(let i=0; i<list_param.length; i++) {
            if(list_param[i].startsWith('p-')) {
                param_page = parseInt(list_param[i].split('p-')[1]);
            }
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        let array_data = new Array();
        let list_part = document.querySelectorAll('a.product-hit-link');
        for(let i=0; i<list_part.length; i++) {
            array_data[i] = {};
            array_data[i]['Page'] = param_page;
            array_data[i]['No.'] = i + 1;
            array_data[i]['Url'] = 'https://www.atp-autoteile.de' + list_part[i].getAttribute('href').trim();

            array_data[i]['Kit'] = '';
            let list_tr = list_part[i].querySelectorAll('div.product-detail-info>table>tbody>tr');
            for(let j=0; j<list_tr.length; j++) {
                if(list_tr[j].getAttribute('title') == null) {
                    if(list_tr[j].querySelectorAll('td').length == 1) {
                        array_data[i]['Kit'] += list_tr[j].querySelector('td').innerText.trim() + '; ';
                    }
                    else {
                        array_data[i]['Kit'] += list_tr[j].querySelectorAll('td')[0].innerText.trim() + ': ' + list_tr[j].querySelectorAll('td')[1].innerText.trim() + '; ';
                    }
                }
                else {
                    let name = list_tr[j].getAttribute('title');
                    let amount = list_tr[j].querySelector('td>strong').innerText.replace(name, '').trim();
                    if(array_data[i]['Kit'].endsWith('; ')) {
                        array_data[i]['Kit'] = array_data[i]['Kit'].substring(0, array_data[i]['Kit'].length-2) + '}\n{name: ' + name + '; amount: ' + amount + '; ';
                    }
                    else {
                        array_data[i]['Kit'] += '{name: ' + name + '; amount: ' + amount + '; ';
                    }
                }
            }
            if(array_data[i]['Kit'].endsWith('; ')) {
                array_data[i]['Kit'] = array_data[i]['Kit'].substring(0, array_data[i]['Kit'].length-2).replace(/:+/g, ':') + '}';
            }
            else {
                array_data[i]['Kit'] = array_data[i]['Kit'].replace(/:+/g, ':') + '}';
            }
            if(!array_data[i]['Kit'].startsWith('{')) {
                array_data[i]['Kit'] = '{' + array_data[i]['Kit'];
            }
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
        let a = document.querySelectorAll('li.pagination-list-items>a')[document.querySelectorAll('li.pagination-list-items>a').length-1];
        if(param_page != parseInt(a.getAttribute('data-page'))) {
            window.location.href = 'https://www.atp-autoteile.de' + a.getAttribute('href').replace('p-' + a.getAttribute('data-page'), 'p-' + String(param_page+1));
        }
    }
})();