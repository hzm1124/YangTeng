// ==UserScript==
// @name         Cardone爬虫-Part
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.12.13
// @description  Crawler
// @author       Lennon
// @match        *://www.cardone.com/*
// @icon         https://cdn11.bigcommerce.com/s-z9vhe3o238/product_images/CARDONE-CMark.png?t=1645211120
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // array
        let array_data = new Array();
        array_data[0] = {};
        array_data[0]['序号'] = '';
        array_data[0]['Part_Type'] = document.querySelector('dd[data-product-parttype').innerText.trim();
        array_data[0]['Part_Number'] = document.querySelector('dd[data-product-sku]').innerText.trim();
        array_data[0]['Title'] = document.querySelector('h1[itemprop="name"]').innerText.trim();
        array_data[0]['Application_Summary'] = '';

        document.querySelector('a[href="#tab-buyersGuide"]').click();

        let list_vehicle = new Array();
        let list_td;
        let find_make;
        let find_model;
        let make;
        let model_year;
        let list_tr = document.querySelectorAll('div#tab-buyersGuide>table>tbody>tr');
        for(let i=0; i<list_tr.length; i++) {
            list_td = list_tr[i].querySelectorAll('td');
            find_make = false;
            for(let j=0; j<list_vehicle.length; j++) {
                if(list_td[1].innerText.trim() == list_vehicle[j]['Make']) {
                    find_make = true;
                    break;
                }
            }
            if(!find_make) {
                make = {};
                make['Make'] = list_td[1].innerText.trim();
                make['Model_Year'] = new Array();
                model_year = {};
                model_year['Model'] = list_td[2].innerText.trim();
                model_year['Year'] = new Array();
                model_year['Year'].push(list_td[0].innerText.trim());
                make['Model_Year'].push(model_year);
                list_vehicle.push(make);
            }
            else {
                find_model = false;
                for(let j=0; j<list_vehicle.length; j++) {
                    for(let k=0; k<list_vehicle[j]['Model_Year'].length; k++) {
                        if(list_td[1].innerText.trim() == list_vehicle[j]['Make'] && list_td[2].innerText.trim() == list_vehicle[j]['Model_Year'][k]['Model']) {
                            find_model = true;
                            break;
                        }
                    }
                }
                if(!find_model) {
                    for(let j=0; j<list_vehicle.length; j++) {
                        if(list_td[1].innerText.trim() == list_vehicle[j]['Make']) {
                            model_year = {};
                            model_year['Model'] = list_td[2].innerText.trim();
                            model_year['Year'] = new Array();
                            model_year['Year'].push(list_td[0].innerText.trim());
                            list_vehicle[j]['Model_Year'].push(model_year);
                            break;
                        }
                    }
                }
                else {
                    for(let j=0; j<list_vehicle.length; j++) {
                        for(let k=0; k<list_vehicle[j]['Model_Year'].length; k++) {
                            if(list_td[1].innerText.trim() == list_vehicle[j]['Make'] && list_td[2].innerText.trim() == list_vehicle[j]['Model_Year'][k]['Model']) {
                                list_vehicle[j]['Model_Year'][k]['Year'].push(list_td[0].innerText.trim());
                                break;
                            }
                        }
                    }
                }
            }
        }

        let vehicle = '';
        let year;
        let list_year;
        let year_max;
        let year_min;
        for(let i=0; i<list_vehicle.length; i++) {
            for(let j=0; j<list_vehicle[i]['Model_Year'].length; j++) {
                year = new Array();
                for(let k=0; k<list_vehicle[i]['Model_Year'][j]['Year'].length; k++) {
                    list_year = list_vehicle[i]['Model_Year'][j]['Year'][k].replace(/-/g, ';').replace(/,/g, ';').split(';');
                    for(let m=0; m<list_year.length; m++) {
                        year.push(Number(list_year[m].trim()));
                    }
                }
                year.sort();
                year_max = year[year.length-1];
                year_min = year[0];
                if(year_max == year_min) {
                    vehicle += list_vehicle[i]['Make'] + ' ' + list_vehicle[i]['Model_Year'][j]['Model'] + ' ' + String(year[0]) + '\n';
                }
                else {
                    vehicle += list_vehicle[i]['Make'] + ' ' + list_vehicle[i]['Model_Year'][j]['Model'] + ' ' + String(year[0]) + '-' + String(year[year.length-1]) + '\n';
                }
            }
        }
        array_data[0]['Vehicle'] = vehicle.trim();

        document.querySelector('a[href="#tab-specs"]').click();

        let array_oe = new Array();
        let list_oe;
        let list_row = document.querySelectorAll('div.productView-table.oe-nums>div.productView-table-row>div.productView-table-data');
        for(let i=0; i<list_row.length; i++) {
            list_oe = list_row[i].innerText.split(', ');
            for(let j=0; j<list_oe.length; j++) {
                if(!array_oe.includes(list_oe[j].trim())) {
                    array_oe.push(list_oe[j].trim());
                }
            }
        }
        array_oe.sort();
        array_data[0]['OE'] = array_oe.join(';');

        array_data[0]['Pic'] = '';
        array_data[0]['Url'] = '';
        array_data[0]['Src'] = document.querySelector('div.productView-img-container>a').getAttribute('href').trim();

        let list_general = document.querySelectorAll('div.productView-table.general>div.productView-table-row');
        for(let i=0; i<list_general.length; i++) {
            array_data[0][list_general[i].querySelector('div.productView-table-header').innerText.replace(':', '').trim().toLowerCase()] = list_general[i].querySelector('div.productView-table-data').innerText.trim();
        }

        let list_technical = document.querySelectorAll('div.productView-table.technical>div.productView-table-row');
        for(let i=0; i<list_technical.length; i++) {
            array_data[0][list_technical[i].querySelector('div.productView-table-header').innerText.replace(':', '').trim().toUpperCase()] = list_technical[i].querySelector('div.productView-table-data').innerText.trim();
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
        let url = 'http://localhost:8080/crawler/04.Cardone.html?index=' + (Number(param_index) + 1);
        console.log('Crawler Log 7: Go to ' + url);
        console.log('= = = = = = = = = = = = = = =\n\n\n');
        window.location.href = url;
    }
})();