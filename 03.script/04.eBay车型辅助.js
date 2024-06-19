// ==UserScript==
// @name         eBay车型辅助
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.05.13
// @description  eBay销量辅助
// @author       Lennon
// @match        *://www.ebay.com/itm/*
// @icon         https://www.ebay.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let list_param = window.location.href.split('?')[1].split('&');
    let param_lennon_country;
    for(let i=0; i<list_param.length; i++) {
        if(list_param[i].startsWith('Lennon_Country=')) {
            param_lennon_country = list_param[i].split('Lennon_Country=')[1];
        }
    }

    // Your code here...
    let item_number = document.querySelector('div.ux-layout-section.ux-layout-section--itemId.ux-layout-section--ALIGN-RIGHT').textContent.split(':')[1].replace(' ', '');
    let category_id = document.querySelectorAll('a.seo-breadcrumb-text')[document.querySelectorAll('a.seo-breadcrumb-text').length-1].getAttribute('href').split('/')[document.querySelectorAll('a.seo-breadcrumb-text')[document.querySelectorAll('a.seo-breadcrumb-text').length-1].getAttribute('href').split('/').length-2];
    let market_id = 'EBAY-US';
    let vehicle_page = Math.ceil(parseInt(document.querySelector('span.motors-compatibility-table__details-text').innerText.split('with')[1].split('vehicle')[0].trim()) / 20);

    let payload = '{"scopedContext":{"catalogDetails":{"itemId":"' + item_number + '","categoryId":"' + category_id + '","marketplaceId":"' + market_id + '"}}}';

    let dict_item = {'crawler': 0, 'dict_vehicle': {}};
    for(let i=0; i<vehicle_page; i++) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://www.ebay.com/g/api/finders?module_groups=PART_FINDER&referrer=VIEWITEM&offset=' + String(i*20) + '&module=COMPATIBILITY_TABLE&_ul=US&_stpos=91710&orig_cvip=true', true);
        xhr.onload = function() {
            if(xhr.status == 200 && xhr.readyState == 4) {
                let json_data = JSON.parse(xhr.response);
                let list_header = json_data['modules']['COMPATIBILITY_TABLE']['paginatedTable']['header']['cells'];

                let name_make, name_model, name_engine, name_year;
                if(param_lennon_country == 'de') {
                    name_make = 'Marke';
                    name_model = 'Modell';
                    name_engine = 'Motor';
                    name_year = 'Baujahr';
                }
                else {
                    name_make = 'Make';
                    name_model = 'Model';
                    name_engine = 'Engine';
                    name_year = 'Year';
                }

                let col_make = -1, col_model = -1, col_engine = -1, col_year = -1;

                for(let j=0; j<list_header.length; j++) {
                    if(list_header[j]['textSpans'][0]['text'].includes(name_make)) {
                        col_make = j;
                    }
                    else if(list_header[j]['textSpans'][0]['text'].includes(name_model)) {
                        col_model = j;
                    }
                    else if(list_header[j]['textSpans'][0]['text'].includes(name_engine)) {
                        col_engine = j;
                    }
                    else if(list_header[j]['textSpans'][0]['text'].includes(name_year)) {
                        col_year = j;
                    }
                }

                let list_row = json_data['modules']['COMPATIBILITY_TABLE']['paginatedTable']['rows'];

                for(let j=0; j<list_row.length; j++) {
                    let make = list_row[j]['cells'][col_make]['textSpans'][0]['text'].trim();
                    let model = list_row[j]['cells'][col_model]['textSpans'][0]['text'].trim();
                    let engine = '';
                    if(col_engine != -1) {
                        engine = list_row[j]['cells'][col_engine]['textSpans'][0]['text'].trim();
                    }
                    let year = new Array();
                    if(param_lennon_country == 'de') {
                        year.push(parseInt(list_row[j]['cells'][col_year]['textSpans'][0]['text'].split('-')[0].split('/')[0].trim()));
                        year.push(parseInt(list_row[j]['cells'][col_year]['textSpans'][0]['text'].split('-')[1].split('/')[0].trim()));
                    }
                    else {
                        year.push(parseInt(list_row[j]['cells'][col_year]['textSpans'][0]['text'].trim()));
                    }

                    if(dict_item['dict_vehicle'][make] == undefined) {
                        dict_item['dict_vehicle'][make] = {};
                        dict_item['dict_vehicle'][make][model] = {};
                        dict_item['dict_vehicle'][make][model][engine] = year;
                    }
                    else {
                        if(dict_item['dict_vehicle'][make][model] == undefined) {
                            dict_item['dict_vehicle'][make][model] = {};
                            dict_item['dict_vehicle'][make][model][engine] = year;
                        }
                        else {
                            if(dict_item['dict_vehicle'][make][model][engine] == undefined) {
                                dict_item['dict_vehicle'][make][model][engine] = year;
                            }
                            else {
                                dict_item['dict_vehicle'][make][model][engine] = [...dict_item['dict_vehicle'][make][model][engine], ...year];
                            }
                        }
                    }

                    dict_item['dict_vehicle'][make][model][engine] = [...new Set(dict_item['dict_vehicle'][make][model][engine])];
                    dict_item['dict_vehicle'][make][model][engine].sort();
                }
                dict_item['crawler'] += 1;
            }

            if(dict_item['crawler'] == vehicle_page) {
                let list_vehicle = [];
                for(let make in dict_item['dict_vehicle']) {
                    for(let model in dict_item['dict_vehicle'][make]) {
                        let list_year = new Array();
                        for(let engine in dict_item['dict_vehicle'][make][model]) {
                            list_year = [...list_year, ...dict_item['dict_vehicle'][make][model][engine]];
                        }
                        list_year = [...new Set(list_year)];

                        let year_min = Math.min.apply(Math, list_year);
                        let year_max = Math.max.apply(Math, list_year);
                        if(year_min == year_max) {
                            list_vehicle.push(make + ' ' + model + ' ' + String(year_min));
                        }
                        else {
                            list_vehicle.push(make + ' ' + model + ' ' + String(year_min) + '-' + String(year_max));
                        }
                    }
                }
                list_vehicle.sort();

                let list_vehicle_2 = [];
                for(let make in dict_item['dict_vehicle']) {
                    for(let model in dict_item['dict_vehicle'][make]) {
                        for(let engine in dict_item['dict_vehicle'][make][model]) {
                            let year_min = Math.min.apply(Math, dict_item['dict_vehicle'][make][model][engine]);
                            let year_max = Math.max.apply(Math, dict_item['dict_vehicle'][make][model][engine]);
                            if(year_min == year_max) {
                                if(engine == '') {
                                    list_vehicle.push(make + ' ' + model + ' ' + String(year_min));
                                }
                                else {
                                    list_vehicle_2.push(make + ' ' + model + ' ' + String(year_min) + ' ~ ' + engine);
                                }
                            }
                            else {
                                if(engine == '') {
                                    list_vehicle.push(make + ' ' + model + ' ' + String(year_min) + '-' + String(year_max));
                                }
                                else {
                                    list_vehicle_2.push(make + ' ' + model + ' ' + String(year_min) + '-' + String(year_max) + ' ~ ' + engine);
                                }
                            }
                        }
                    }
                }
                list_vehicle_2.sort();

                let content = '<div id="Lennon_2" style="border: 3px solid red;"><br/><br/><table bgcolor="#e9faff" style="margin: 0 auto;border-collapse: collapse;font-size:16px;text-align: center;"><thead style="font-size:18px;font-weight: bold;"><tr><th style="border: 1px solid;">&emsp;Make Model Year&emsp;</th></tr></thead><tbody>';
                for(let j=0; j<list_vehicle.length; j++) {
                    content += '<tr><td style="border: 1px solid;">&emsp;' + list_vehicle[j] + '&emsp;</td></tr>';
                }
                content += '</tbody></table><br/><br/></div>';
                if(param_lennon_country == 'de') {
                    document.querySelectorAll("div.tabs__content")[1].insertAdjacentHTML("afterbegin", content);
                }
                else {
                    document.querySelector("div.tabs__content").insertAdjacentHTML("afterbegin", content);
                }

                let content_2 = '<table bgcolor="#e9faff" style="margin: 0 auto;border-collapse: collapse;font-size:16px;text-align: center;"><thead style="font-size:18px;font-weight: bold;"><tr><th style="border: 1px solid;">&emsp;Make Model Year Engine&emsp;</th></tr></thead><tbody>';
                for(let j=0; j<list_vehicle_2.length; j++) {
                    content_2 += '<tr><td style="border: 1px solid;">&emsp;' + list_vehicle_2[j] + '&emsp;</td></tr>';
                }
                content_2 += '</tbody></table><br/><br/>';
                document.querySelector("#Lennon_2").insertAdjacentHTML("beforeend", content_2);
            }
        };
        xhr.send(payload);
    }
})();