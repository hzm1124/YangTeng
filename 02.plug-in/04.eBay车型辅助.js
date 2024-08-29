// ==UserScript==
// @name         eBay车型辅助
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.08.29
// @description  eBay销量辅助
// @author       Lennon
// @match        *://www.ebay.com/itm/*
// @match        *://www.ebay.de/itm/*
// @match        *://www.ebay.co.uk/itm/*
// @match        *://www.ebay.com.au/itm/*
// @match        *://www.ebay.ca/itm/*
// @icon         https://www.ebay.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let with_engine = true;

    // = = = = = = = = = = = = = = =

    let page, payload_data;

    // = = = = = = = = = = = = = = =

    let crawler = 0, list_header, list_row = new Array();
    async function get_vehicle(vehicle_url) {
        console.log(vehicle_url);
        try {
            let response = await fetch(vehicle_url, {method: 'POST',
                                                     headers: {'Content-Type': 'application/json; charset=utf-8'},
                                                     body: payload_data});

            if(response.ok && response.status === 200) {
                let json_ = await response.json();

                // = = = = = = = = = = = = = = =

                list_header = json_['modules']['COMPATIBILITY_TABLE']['paginatedTable']['header']['cells'];
                for(let j=0; j<list_header.length; j++) {
                    list_header[j] = list_header[j]['textSpans'][0]['text'].trim();
                }

                // = = = = = = = = = = = = = = =

                let list_row_temp = json_['modules']['COMPATIBILITY_TABLE']['paginatedTable']['rows'];
                for(let j=0; j<list_row_temp.length; j++) {
                    let list_cell = list_row_temp[j]['cells'];
                    for(let k=0; k<list_cell.length; k++) {
                        if('textualDisplays' in list_cell[k]) {
                            list_cell[k] = list_cell[k]['textualDisplays'][0]['textSpans'][0]['text'].trim();
                        }
                        else {
                            list_cell[k] = list_cell[k]['textSpans'][0]['text'].trim();
                        }
                    }
                    list_row_temp[j] = list_cell;
                }
                list_row = list_row.concat(list_row_temp);
                crawler++;

                // = = = = = = = = = = = = = = =

                if(crawler === page) {
                    let dict_vehicle = {};
                    for(let i=0; i<list_row.length; i++) {
                        let make, model, engine, year, year_2;
                        if(window.location.href.includes('://www.ebay.de/itm/')) {
                            make = list_row[i][list_header.indexOf('Marke')], model = list_row[i][list_header.indexOf('Modell')], engine = list_row[i][list_header.indexOf('Motor')], year = parseInt(list_row[i][list_header.indexOf('Baujahr')].split('-')[0].split('/')[0]), year_2 = parseInt(list_row[i][list_header.indexOf('Baujahr')].split('-')[1].split('/')[0]);
                        }
                        else {
                            make = list_row[i][list_header.indexOf('Make')], model = list_row[i][list_header.indexOf('Model')], engine = list_row[i][list_header.indexOf('Engine')], year = parseInt(list_row[i][list_header.indexOf('Year')]), year_2 = parseInt(list_row[i][list_header.indexOf('Year')]);
                        }

                        if(!(make in dict_vehicle)) {
                            dict_vehicle[make] = {};
                            dict_vehicle[make][model] = {};
                            dict_vehicle[make][model][engine] = new Array();
                            dict_vehicle[make][model][engine].push(year);
                            if(!dict_vehicle[make][model][engine].includes(year_2)) {
                                dict_vehicle[make][model][engine].push(year_2);
                            }
                        }
                        else if(!(model in dict_vehicle[make])) {
                            dict_vehicle[make][model] = {};
                            dict_vehicle[make][model][engine] = new Array();
                            dict_vehicle[make][model][engine].push(year);
                            if(!dict_vehicle[make][model][engine].includes(year_2)) {
                                dict_vehicle[make][model][engine].push(year_2);
                            }
                        }
                        else if(!(engine in dict_vehicle[make][model])) {
                            dict_vehicle[make][model][engine] = new Array();
                            dict_vehicle[make][model][engine].push(year);
                            if(!dict_vehicle[make][model][engine].includes(year_2)) {
                                dict_vehicle[make][model][engine].push(year_2);
                            }
                        }
                        else {
                            if(!dict_vehicle[make][model][engine].includes(year)) {
                                dict_vehicle[make][model][engine].push(year);
                            }
                            if(!dict_vehicle[make][model][engine].includes(year_2)) {
                                dict_vehicle[make][model][engine].push(year_2);
                            }
                        }
                    }

                    // = = = = = = = = = = = = = = =

                    let list_vehicle = new Array();
                    for(let make in dict_vehicle) {
                        for(let model in dict_vehicle[make]) {
                            let list_year = new Array();
                            for(let engine in dict_vehicle[make][model]) {
                                list_year = list_year.concat(dict_vehicle[make][model][engine])
                            }
                            let year_begin = Math.min.apply(Math, list_year);
                            let year_end = Math.max.apply(Math, list_year);
                            if(year_begin === year_end) {
                                list_vehicle.push(make + ' ' + model + ' ' + year_begin);
                            }
                            else {
                                list_vehicle.push(make + ' ' + model + ' ' + year_begin + '-' + year_end);
                            }
                        }
                    }
                    list_vehicle.sort();

                    // = = = = = = = = = = = = = = =

                    let list_vehicle_2 = new Array();
                    for(let make in dict_vehicle) {
                        for(let model in dict_vehicle[make]) {
                            for(let engine in dict_vehicle[make][model]) {
                                let year_begin = Math.min.apply(Math, dict_vehicle[make][model][engine]);
                                let year_end = Math.max.apply(Math, dict_vehicle[make][model][engine]);
                                if(year_begin === year_end) {
                                    list_vehicle_2.push((make + ' ' + model + ' ' + year_begin + ' ' + engine).trim());
                                }
                                else {
                                    list_vehicle_2.push((make + ' ' + model + ' ' + year_begin + '-' + year_end + ' ' + engine).trim());
                                }
                            }
                        }
                    }
                    list_vehicle_2.sort();

                    // = = = = = = = = = = = = = = =

                    let content = '<div id="lennon_vehicle" style="border: 3px solid red;"><br/><br/><table bgcolor="#e9faff" style="margin: 0 auto;border-collapse: collapse;font-size: 16px;text-align: center;"><thead style="font-size: 18px;font-weight: bold;"><tr><th style="border: 1px solid;">&emsp;Make Model Year&emsp;</th></tr></thead><tbody>';
                    for(let j=0; j<list_vehicle.length; j++) {
                        content += '<tr><td style="border: 1px solid;">&emsp;' + list_vehicle[j] + '&emsp;</td></tr>';
                    }
                    content += '</tbody></table><br/><br/></div>';
                    if(window.location.href.includes('://www.ebay.de/itm/')) {
                        document.querySelectorAll("div.tabs__content")[1].insertAdjacentHTML("afterbegin", content);
                    }
                    else {
                        document.querySelector("div.tabs__content").insertAdjacentHTML("afterbegin", content);
                    }

                    if(with_engine) {
                        content = '<table bgcolor="#e9faff" style="margin: 0 auto;border-collapse: collapse;font-size:16px;text-align: center;"><thead style="font-size:18px;font-weight: bold;"><tr><th style="border: 1px solid;">&emsp;Make Model Year Engine&emsp;</th></tr></thead><tbody>';
                        for(let j=0; j<list_vehicle_2.length; j++) {
                            content += '<tr><td style="border: 1px solid;">&emsp;' + list_vehicle_2[j] + '&emsp;</td></tr>';
                        }
                        content += '</tbody></table><br/><br/>';
                        document.querySelector("#lennon_vehicle").insertAdjacentHTML("beforeend", content);
                    }
                }
            }
            else {
                get_vehicle(vehicle_url);
            }
        }
        catch(error) {
            get_vehicle(vehicle_url);
        }
    }

    // = = = = = = = = = = = = = = =

    let jq = jQuery.noConflict();
    jq(document).ready(function() {
        let json_ = JSON.parse(document.querySelector('body').innerHTML.split('$MC=(window.$MC||[]).concat(')[1].split(']}]})</script>')[0].trim() + ']}]}');
        let index_model = -1;
        for(let i=0; i<json_['o']['w'].length; i++) {
            if('model' in json_['o']['w'][i][2]) {
                index_model = i;
                break;
            }
        }

        let list_compatibility = json_['o']['w'][index_model][2]['model']['modules']['COMPATIBILITY_TABLE']['paginatedTable']['pagination']['pages'];

        page = parseInt(list_compatibility[list_compatibility.length-1]['text'].trim());
        payload_data = JSON.stringify({'scopedContext': {'catalogDetails': {'categoryId': list_compatibility[list_compatibility.length-1]['action']['params']['categoryId'],
                                                         'itemId': list_compatibility[list_compatibility.length-1]['action']['params']['itemId'],
                                                         'marketplaceId': list_compatibility[list_compatibility.length-1]['action']['params']['marketplaceId'],
                                                         'sellerName': list_compatibility[list_compatibility.length-1]['action']['params']['sellerName']}}});

        // = = = = = = = = = = = = = = =

        for(let i=0; i<page; i++) {
            if(window.location.href.includes('://www.ebay.com/itm/')) {
                get_vehicle('https://www.ebay.com/g/api/finders?module_groups=PART_FINDER&referrer=VIEWITEM&offset=' + String(i*20) + '&module=COMPATIBILITY_TABLE');
            }
            else if(window.location.href.includes('://www.ebay.de/itm/')) {
                get_vehicle('https://www.ebay.de/g/api/finders?module_groups=PART_FINDER&referrer=VIEWITEM&offset=' + String(i*20) + '&module=COMPATIBILITY_TABLE');
            }
            else if(window.location.href.includes('://www.ebay.co.uk/itm/')) {
                get_vehicle('https://www.ebay.co.uk/g/api/finders?module_groups=PART_FINDER&referrer=VIEWITEM&offset=' + String(i*20) + '&module=COMPATIBILITY_TABLE');
            }
            else if(window.location.href.includes('://www.ebay.com.au/itm/')) {
                get_vehicle('https://www.ebay.com.au/g/api/finders?module_groups=PART_FINDER&referrer=VIEWITEM&offset=' + String(i*20) + '&module=COMPATIBILITY_TABLE');
            }
            else if(window.location.href.includes('://www.ebay.ca/itm/')) {
                get_vehicle('https://www.ebay.ca/g/api/finders?module_groups=PART_FINDER&referrer=VIEWITEM&offset=' + String(i*20) + '&module=COMPATIBILITY_TABLE');
            }
        }
    });
})();