// ==UserScript==
// @name         SpectrePerformance爬虫-Part
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.12.27
// @description  Crawler
// @author       Lennon
// @match        *://www.spectreperformance.com/catalog/product/view/id/*
// @icon         https://media.knfilters.com/prod/media/favicon/stores/68/spectrefav.ico
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

        sleep(500).then(function() {
            document.querySelector('div[aria-controls="vehicle_application_list"]>div[data-role="trigger"]').click();
        })

        let title = document.querySelector('span[data-ui-id="page-title-wrapper"]').innerText.trim();
        array_data[0]['Part_Number'] = title.split(' ')[0].trim();
        array_data[0]['Title'] = title;

        let information = '';
        let list_li = document.querySelectorAll('div#more_information li');
        for(let i=0; i<list_li.length; i++) {
            information += String(i+1) + '. ' + list_li[i].innerText.trim() + '\n';
        }
        array_data[0]['Information'] = information.trim();

        sleep(3000).then(function() {
            let list_div = document.querySelectorAll('div#vehicle_application_list tr div.data-col');
            let list_vehicle = new Array();
            let find_make_model_engine;
            let vehicle;
            let length_slice;
            for(let i=0; i<list_div.length; i++) {
                find_make_model_engine = false;
                length_slice = list_div[i].querySelectorAll('p')[0].innerText.trim().split(' ').length;
                let year = list_div[i].querySelectorAll('p')[0].innerText.trim().split(' ')[0].trim();
                let make_model_engine = list_div[i].querySelectorAll('p')[0].innerText.trim().split(' ').slice(1, length_slice+1).join(' ').trim();
                for(let j=0; j<list_vehicle.length; j++) {
                    if(make_model_engine == list_vehicle[j]['Make_Model_Engine']) {
                        find_make_model_engine = true;
                        break;
                    }
                }
                if(!find_make_model_engine) {
                    vehicle = {};
                    vehicle['Make_Model_Engine'] = make_model_engine;
                    vehicle['Year'] = new Array();
                    vehicle['Year'].push(year);
                    list_vehicle.push(vehicle);
                }
                else {
                    for(let j=0; j<list_vehicle.length; j++) {
                        if(make_model_engine == list_vehicle[j]['Make_Model_Engine']) {
                            list_vehicle[j]['Year'].push(year);
                            break;
                        }
                    }
                }
            }

            vehicle = '';
            let year;
            let year_max;
            let year_min;
            for(let i=0; i<list_vehicle.length; i++) {
                year = new Array();
                for(let j=0; j<list_vehicle[i]['Year'].length; j++) {
                    year.push(Number(list_vehicle[i]['Year'][j]));
                }
                year.sort();
                year_max = year[year.length-1];
                year_min = year[0];
                if(year_max == year_min) {
                    vehicle += list_vehicle[i]['Make_Model_Engine'] + ' ' + String(year_min) + '\n';
                }
                else {
                    vehicle += list_vehicle[i]['Make_Model_Engine'] + ' ' + String(year_min) + '-' + String(year_max) + '\n';
                }
            }
            array_data[0]['Vehicle'] = vehicle.trim();

            length_slice;
            let list_td = document.querySelectorAll('div#cross_references td');
            for(let i=0; i<list_td.length; i++) {
                length_slice = list_td[i].innerText.trim().split(' ').length;
                array_data[0]['OE_' + list_td[i].innerText.trim().split(' ').slice(0, length_slice-1).join(' ')] = list_td[i].innerText.trim().split(' ')[length_slice-1].trim();
            }

            array_data[0]['Pic'] = '';
            array_data[0]['Url'] = window.location.href;
            array_data[0]['Src'] = document.querySelector('meta[property="og:image"]').getAttribute('content').trim();

            let list_tr = document.querySelectorAll('div#specifications tr');
            for(let i=0; i<list_tr.length; i++) {
                array_data[0][list_tr[i].querySelectorAll('td')[0].innerText.trim().toLowerCase()] = list_tr[i].querySelectorAll('td')[1].innerText.trim();
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
            let url = 'http://localhost:8080/crawler/21.SpectrePerformance.html?index=' + (Number(param_index) + 1);
            console.log('Crawler Log 7: Go to ' + url);
            console.log('= = = = = = = = = = = = = = =\n\n\n');
            window.location.href = url;
        })
    }
})();