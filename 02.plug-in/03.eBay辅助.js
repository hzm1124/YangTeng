// ==UserScript==
// @name         eBay辅助
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.12.28
// @description  eBay
// @author       Lennon
// @match        *://www.ebay.com/*
// @match        *://www.ebay.de/*
// @match        *://www.ebay.co.uk/*
// @match        *://www.ebay.com.au/*
// @match        *://www.ebay.ca/*
// @icon         https://www.ebay.com/favicon.ico
// @grant        none
// @license MIT
// @downloadURL https://update.greasyfork.org/scripts/521914/eBay%E8%BE%85%E5%8A%A9.user.js
// @updateURL https://update.greasyfork.org/scripts/521914/eBay%E8%BE%85%E5%8A%A9.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const switch_vehicle = true;
    const mode_engine = 2;
    const vehicle_delay = 300;

    // = = =  = = =  = = =

    window.copy_text_span = function(element_span) {
        const text = element_span.innerText.trim();
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log(`True: ${text}`);
            })
            .catch(() => {
            console.log('False');
        });
    };

    // = = =  = = =  = = =

    window.copy_text_button = function(url) {
        navigator.clipboard.writeText(url)
            .then(() => {
                console.log(`True: ${url}`);
            })
            .catch(() => {
            console.log('False');
        });
    };

    // = = =  = = =  = = =

    function sleep(time) {
        return(new Promise(function(resolve, reject) {
            setTimeout(function() { resolve();}, time);
        }));
    }

    // = = =  = = =  = = =

    window.copy_text_td = function(element_td) {
        const text = element_td.innerText.trim();
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log(`True: ${text}`);
            })
            .catch(() => {
            console.log('False');
        });
    };

    // = = =  = = =  = = =

    window.copy_text_th_td = function(element_th) {
        const text = Array.from(element_th.parentElement.parentElement.parentElement.querySelectorAll('tbody>tr>td')).map(td => td.innerText.trim()).join('\n');
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log(`True: ${text}`);
            })
            .catch(() => {
            console.log('False');
        });
    };

    // = = =  = = =  = = =

    window.copy_text_tr = function(element_tr) {
        const list_td = element_tr.querySelectorAll('td');
        const text = Array.from(list_td).map(td => td.innerText.trim()).join(' ').trim();
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log(`True: ${text}`);
            })
            .catch(() => {
            console.log('False');
        });
    };

    // = = =  = = =  = = =

    window.copy_text_th_tr = function(element_th) {
        const list_tr = element_th.parentElement.parentElement.parentElement.querySelectorAll('tbody>tr');
        let list_text = [];
        list_tr.forEach(tr => list_text.push(Array.from(tr.querySelectorAll('td')).map(td => td.innerText.trim()).join(' ').trim()));
        const text = list_text.join('\n');
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log(`True: ${text}`);
            })
            .catch(() => {
            console.log('False');
        });
    };

    // = = =  = = =  = = =

    let count_page, list_dict_correct = [], crawler = 0;
    async function get_vehicle(country, api, page, payload_data) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${api}?module_groups=PART_FINDER&referrer=VIEWITEM&offset=${page * 20}&module=COMPATIBILITY_TABLE`, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhr.onload = function() {
            if(xhr.status == 200 && xhr.readyState == 4) {
                const json_ = JSON.parse(xhr.response);
                const list_header = json_['modules']['COMPATIBILITY_TABLE']['paginatedTable']['header']['cells'].map(cell => cell['textSpans'][0]['text'].trim()), list_row = json_['modules']['COMPATIBILITY_TABLE']['paginatedTable']['rows'];
                for(let i=0; i<list_row.length; i++) {
                    let dict_correct = {'Json_Compatibility': payload_data,
                                        'Page': page + 1,
                                        'Row': i + 1}

                    for(let j=0; j<list_header.length; j++) {
                        dict_correct[list_header[j]] = 'textualDisplays' in list_row[i]['cells'][j] ? list_row[i]['cells'][j]['textualDisplays'][0]['textSpans'][0]['text'].trim() : list_row[i]['cells'][j]['textSpans'][0]['text'].trim();
                    }
                    list_dict_correct.push(dict_correct);
                }
                crawler++;

                // = = =  = = =  = = =

                if(count_page == crawler) {
                    let dict_vehicle = {};
                    for(let i=0; i<list_dict_correct.length; i++) {
                        let make, model, engine, year, year_2;

                        if(mode_engine == 1) {
                            if(country == 'de') {
                                make = list_dict_correct[i]['Marke'].trim(), model = list_dict_correct[i]['Modell'].trim(), engine = list_dict_correct[i]['Motor'].trim(), year = parseInt(list_dict_correct[i]['Baujahr'].split('-')[0].split('/')[0].trim()), year_2 = parseInt(list_dict_correct[i]['Baujahr'].split('-')[1].split('/')[0].trim());
                            }
                            else {
                                make = list_dict_correct[i]['Make'].trim(), model = list_dict_correct[i]['Model'].trim(), engine = list_dict_correct[i]['Engine'].trim(), year = parseInt(list_dict_correct[i]['Year'].trim()), year_2 = parseInt(list_dict_correct[i]['Year'].trim());
                            }
                        }
                        else {
                            if(country == 'de') {
                                make = list_dict_correct[i]['Marke'].trim(), model = list_dict_correct[i]['Modell'].trim(), engine = list_dict_correct[i]['Motor'].trim().split(',')[0].replace(/ /, ''), year = parseInt(list_dict_correct[i]['Baujahr'].split('-')[0].split('/')[0].trim()), year_2 = parseInt(list_dict_correct[i]['Baujahr'].split('-')[1].split('/')[0].trim());
                            }
                            else {
                                make = list_dict_correct[i]['Make'].trim(), model = list_dict_correct[i]['Model'].trim(), engine = list_dict_correct[i]['Engine'].trim().split(' ')[0], year = parseInt(list_dict_correct[i]['Year'].trim()), year_2 = parseInt(list_dict_correct[i]['Year'].trim());
                            }
                        }

                        if(!(make in dict_vehicle)) {
                            dict_vehicle[make] = {};
                        }
                        if(!(model in dict_vehicle[make])) {
                            dict_vehicle[make][model] = {};
                        }
                        if(!(engine in dict_vehicle[make][model])) {
                            dict_vehicle[make][model][engine] = [];
                        }
                        if(!dict_vehicle[make][model][engine].includes(year)) {
                            dict_vehicle[make][model][engine].push(year);
                        }
                        if(!dict_vehicle[make][model][engine].includes(year_2)) {
                            dict_vehicle[make][model][engine].push(year_2);
                        }
                    }

                    // = = =  = = =  = = =

                    let list_vehicle = [], list_vehicle_2 = [];
                    for(let make in dict_vehicle) {
                        let dict_model = dict_vehicle[make];
                        for(let model in dict_model) {
                            let dict_engine = dict_model[model];

                            let list_year = [];
                            for(let engine in dict_engine) {
                                list_year = list_year.concat(dict_engine[engine]);
                            }

                            let year_begin = Math.min(...list_year), year_end = Math.max(...list_year);

                            let vehicle = (year_begin == year_end) ? `${make} ${model} ${year_begin}` : `${make} ${model} ${year_begin}-${year_end}`;
                            list_vehicle.push(vehicle);

                            for(let engine in dict_engine) {
                                let list_year = dict_engine[engine];
                                let year_begin = Math.min(...list_year), year_end = Math.max(...list_year);

                                let vehicle = (year_begin == year_end) ? `${make} ${model} ${year_begin}` : `${make} ${model} ${year_begin}-${year_end}`;
                                list_vehicle_2.push({vehicle, engine});
                            }
                        }
                    }

                    list_vehicle = list_vehicle.sort();
                    list_vehicle_2 = list_vehicle_2.sort((a, b) => {
                        if(a.vehicle < b.vehicle) {
                            return -1;
                        }
                        if(a.vehicle > b.vehicle) {
                            return 1;
                        }

                        if(a.engine < b.engine) {
                            return -1;
                        }
                        if(a.engine > b.engine) {
                            return 1;
                        }

                        return 0;
                    });

                    let content_vehicle = `
                        <div id="lennon_vehicle" style="border: 3px solid #3665f3;">
                            <br/>
                            <table style="margin: 0 auto; border-collapse: collapse; background-color: #3665f3; font-size: 16px; text-align: center;">
                                <thead style="background-color: #cccccc; font-size: 16px; font-weight: bold;">
                                    <tr>
                                        <th onclick="copy_text_th_td(this)" style="padding: 5px 20px; border: 1px solid black; text-align: center; cursor: pointer;">
                                            Vehicle W/o Engine
                                        </th>
                                    </tr>
                                </thead>
                                <tbody style="background-color: #f7f7f7;">
                                    ${list_vehicle.map(vehicle => `
                                        <tr>
                                            <td onclick="copy_text_td(this)" style="padding: 5px 20px; border: 1px solid black; text-align: center; cursor: pointer;">
                                                ${vehicle}
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                            <br/>
                        </div>
                    `;
                    let list_div = document.querySelectorAll('div.tabs__content');
                    for(let i=0; i<list_div.length; i++) {
                        if(list_div[i].querySelectorAll('div.tabs__panel>div.tabs__cell>div>div[data-testid="d-vi-evo-region"]').length == 1) {
                            list_div[i].insertAdjacentHTML("afterbegin", content_vehicle);
                            break;
                        }
                    }

                    if(mode_engine == 1 || mode_engine == 2) {
                        let content_vehicle_2 = `
                            <br/>
                            <table style="margin: 0 auto; border-collapse: collapse; background-color: #36653f3; font-size: 16px; text-align: center;">
                                <thead style="background-color: #cccccc; font-size: 16px; font-weight: bold;">
                                    <tr>
                                        <th onclick="copy_text_th_tr(this)" colspan="2" style="padding: 5px 20px; border: 1px solid black; text-align: center; cursor: pointer;">
                                            Vehicle W/ Engine
                                        </th>
                                    </tr>
                                </thead>
                                <tbody style="background-color: #f7f7f7;">
                                    ${list_vehicle_2.map(item => `
                                        <tr onclick="copy_text_tr(this)" style="cursor: pointer;">
                                            <td style="padding: 5px 20px; border: 1px solid black; text-align: center;">
                                                ${item.vehicle}
                                            </td>
                                            <td style="padding: 5px 20px; border: 1px solid black; text-align: center;">
                                                ${item.engine}
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                            <br/>
                        `;
                        document.querySelector('div#lennon_vehicle').insertAdjacentHTML("beforeend", content_vehicle_2);
                    }
                    else if(mode_engine == 3) {
                        const list_engine = [...new Set(list_vehicle_2.map(item => item.engine))];
                        list_engine.sort();

                        let content_vehicle_2 = `
                            <br/>
                            <table style="margin: 0 auto; border-collapse: collapse; background-color: #36653f3; font-size: 16px; text-align: center;">
                                <thead style="background-color: #cccccc; font-size: 16px; font-weight: bold;">
                                    <tr>
                                        <th colspan="2" style="padding: 5px 20px; border: 1px solid black; text-align: center;">
                                            Engine
                                        </th>
                                    </tr>
                                </thead>
                                <tbody style="background-color: #f7f7f7;">
                                    <tr>
                                        <td onclick="copy_text_td(this)" style="padding: 5px 20px; border: 1px solid black; text-align: center; max-width: 800px; overflow: auto; cursor: pointer;">
                                            ${list_engine.join(' ')}
                                        </td>
                                    <tr>
                                </tbody>
                            </table>
                            <br/>
                        `;
                        document.querySelector('div#lennon_vehicle').insertAdjacentHTML("beforeend", content_vehicle_2);
                    }
                }
            }
            else {
                console.error('fuck');
            }
        }
        sleep(page * vehicle_delay).then(function() {
            xhr.send(payload_data);
        });
    }

    // = = =  = = =  = = =

    function real_year_month(country, year_month) {
        year_month = year_month.replace(/^[1-9][0-9]{0,1} /, '');

        if(country == 'de') {
            const list_text = year_month.split(',')[0].split(' ');
            year_month = `${list_text[1]}${list_text[0]}`;

            return year_month.replace('Jan', '.01').replace('Feb', '.02').replace('Mrz', '.03').replace('Apr', '.04').replace('Mai', '.05').replace('Jun', '.06').replace('Jul', '.07').replace('Aug', '.08').replace('Sep', '.09').replace('Okt', '.10').replace('Nov', '.11').replace('Dez', '.12');
        }
        else {
            const list_text = year_month.split(' ');
            year_month = `${list_text[1]}${list_text[0]}`;

            return year_month.replace('Jan', '.01').replace('Feb', '.02').replace('Mar', '.03').replace('Apr', '.04').replace('May', '.05').replace('Jun', '.06').replace('Jul', '.07').replace('Aug', '.08').replace('Sep', '.09').replace('Oct', '.10').replace('Nov', '.11').replace('Dec', '.12');
        }
    }

    // = = =  = = =  = = =

    $(document).ready(function() {
        if(document.location.href.includes('/sch/')) {
            const url_root = document.location.href.split('/sch/')[0].trim();

            let list_span = document.querySelectorAll('span.s-item__item-id.s-item__itemID');
            for(let i=0; i<list_span.length; i++) {
                let item_number = list_span[i].innerText.split(':')[1].trim();
                list_span[i].innerHTML = `
                    <span onclick="copy_text_span(this)" style="color: #3665f3; cursor: pointer;">
                        ${item_number}
                    </span>
                    <a href="${url_root}/bin/purchaseHistory?item=${item_number}" target="_blank" style="padding: 0 0 0 5px;">
                        <button style="background-color: #3665f3; color: white;">
                            销量
                        </button>
                    </a>
                `;
            }
        }
        else if(document.location.href.includes('/itm/')) {
            let country_now;
            if(document.location.href.includes('://www.ebay.com/')) {
                country_now = 'us';
            }
            else if(document.location.href.includes('://www.ebay.de/')) {
                country_now = 'de';
            }
            else if(document.location.href.includes('://www.ebay.co.uk/')) {
                country_now = 'uk';
            }
            else if(document.location.href.includes('://www.ebay.com.au/')) {
                country_now = 'au';
            }
            else if(document.location.href.includes('://www.ebay.ca/')) {
                country_now = 'ca';
            }

            // = = =  = = =  = = =

            const dict_ = JSON.parse(`${document.documentElement.outerHTML.split('$MC=(window.$MC||[]).concat(')[1].split(']}]})</script>')[0]}]}]}`);
            let list_dict = [];
            for(let i=0; i<dict_['o']['w'].length; i++) {
                if('model' in dict_['o']['w'][i][2]) {
                    list_dict.push(dict_['o']['w'][i][2]);
                }
            }

            // = = =  = = =  = = =

            let url, country_real;
            for(let i=0; i<list_dict[0]['model']['modules']['MARS']['metaData'].length; i++) {
                const parser = new DOMParser();
                let document_link = parser.parseFromString(list_dict[0]['model']['modules']['MARS']['metaData'][i], 'text/html');
                let list_link = document_link.querySelectorAll('link[hreflang="x-default"]');
                if(list_link.length != 0) {
                    url = list_link[0].getAttribute('href').trim();
                    if(url.includes('://www.ebay.com/')) {
                        country_real = 'us';
                    }
                    else if(url.includes('://www.ebay.de/')) {
                        country_real = 'de';
                    }
                    else if(url.includes('://www.ebay.co.uk/')) {
                        country_real = 'uk';
                    }
                    else if(url.includes('://www.ebay.com.au/')) {
                        country_real = 'au';
                    }
                    else if(url.includes('://www.ebay.ca/')) {
                        country_real = 'ca';
                    }
                }
            }

            // = = =  = = =  = = =

            // https://www.ebay.com/itm/286173349910
            if(switch_vehicle && 'COMPATIBILITY_TABLE' in list_dict[0]['model']['modules']) {
                let dict_temp = list_dict[0]['model']['modules']['COMPATIBILITY_TABLE']['paginatedTable']['pagination']['pages'];
                dict_temp = dict_temp[dict_temp.length - 1];
                const payload_data = JSON.stringify({'scopedContext': {'catalogDetails': {'categoryId': dict_temp['action']['params']['categoryId'],
                                                                                          'itemId': dict_temp['action']['params']['itemId'],
                                                                                          'marketplaceId': dict_temp['action']['params']['marketplaceId'],
                                                                                          'sellerName': dict_temp['action']['params']['sellerName']}}});

                count_page = parseInt(dict_temp['text'].trim());
                for(let i=0; i<count_page; i++) {
                    get_vehicle(country_real, dict_temp['action']['URL'].trim(), i, payload_data);
                }
            }

            // = = =  = = =  = = =

            const content_country = `
                <div id="lennon_country">
                    <button onclick="copy_text_button('${url}')" style="padding: 5px 20px; background-color: #3665f3; font-size: 20px; color: white;">
                        当前${country_now.toUpperCase()} -> 实际${country_real.toUpperCase()}
                    </button>
                </div>
                <br/>
            `;
            document.querySelector('h1.x-item-title__mainTitle').insertAdjacentHTML('afterbegin', content_country);

            // = = =  = = =  = = =

            const url_root = document.location.href.split('/itm/')[0].trim(), item_number = window.location.href.split('/itm/')[1].split('/')[0].split('?')[0].trim();
            const content_purchase_url = `
                <a href="${url_root}/bin/purchaseHistory?item=${item_number}" target="_blank" style="padding: 0 0 0 10px;">
                    <button style="padding: 5px 20px; background-color: #3665f3; font-size: 20px; color: white;">
                        销量
                    </button>
                </a>
            `;
            document.querySelector('div#lennon_country').insertAdjacentHTML('beforeend', content_purchase_url);

            // = = =  = = =  = = =

            const xhr = new XMLHttpRequest();
            xhr.open('GET', `${url_root}/bin/purchaseHistory?item=${item_number}`, false);
            xhr.onload = function() {
                if(xhr.status == 200 && xhr.readyState == 4) {
                    const parser = new DOMParser();
                    const document_purchase = parser.parseFromString(xhr.responseText, 'text/html');
                    const list_title = document_purchase.querySelectorAll('h1.ph-main-container__page-title.giant-text-1');
                    if(list_title.length != 0 && ((list_title[0].innerText.toLowerCase().trim() == 'item purchase history') || (list_title[0].innerText.toLowerCase().trim() == 'kaufübersicht'))) {
                        let quantity, date_purchase, date_offer, status_offer, accepted;
                        if(country_now == 'de') {
                            quantity = 'stückzahl', date_purchase = 'kaufdatum', date_offer = 'datum des preisvorschlags', status_offer = 'status', accepted = 'Akzeptiert';
                        }
                        else {
                            quantity = 'quantity', date_purchase = 'date of purchase', date_offer = 'date of offer', status_offer = 'offer status', accepted = 'Accepted';
                        }

                        let dict_sale = {};
                        const list_div_purchase = document_purchase.querySelectorAll('div.app-table.fixed-price'), list_div_offer = document_purchase.querySelectorAll('div.app-table.offer');
                        if(list_div_purchase.length != 0) {
                            const list_head = Array.from(list_div_purchase[0].querySelectorAll('table>thead>tr>th>span>span')).map(span => span.innerText.toLowerCase().trim());
                            const index_quantity = list_head.indexOf(quantity), index_date = list_head.indexOf(date_purchase);

                            const list_tr = list_div_purchase[0].querySelectorAll('table>tbody>tr');
                            for(let i=0; i<list_tr.length; i++) {
                                const list_td = list_tr[i].querySelectorAll('td');
                                const year_month = real_year_month(country_now, list_td[index_date].querySelector('div>div>span>span').innerText.trim());
                                if(year_month in dict_sale) {
                                    dict_sale[year_month] += parseInt(list_td[index_quantity].querySelector('div>div>span>span').innerText.trim());
                                }
                                else {
                                    dict_sale[year_month] = parseInt(list_td[index_quantity].querySelector('div>div>span>span').innerText.trim());
                                }
                            }
                        }
                        if(list_div_offer.length != 0) {
                            const list_head = Array.from(list_div_offer[0].querySelectorAll('table>thead>tr>th>span>span')).map(span => span.innerText.toLowerCase().trim());
                            const index_quantity = list_head.indexOf(quantity), index_date = list_head.indexOf(date_offer), index_status = list_head.indexOf(status_offer);

                            const list_tr = list_div_offer[0].querySelectorAll('table>tbody>tr');
                            for(let i=0; i<list_tr.length; i++) {
                                const list_td = list_tr[i].querySelectorAll('td');
                                if(list_td[index_status].querySelector('div>div>span>span').innerText.trim() == accepted) {
                                    const year_month = real_year_month(country_now, list_td[index_date].querySelector('div>div>span>span').innerText.trim());
                                    if(year_month in dict_sale) {
                                        dict_sale[year_month] += parseInt(list_td[index_quantity].querySelector('div>div>span>span').innerText.trim());
                                    }
                                    else {
                                        dict_sale[year_month] = parseInt(list_td[index_quantity].querySelector('div>div>span>span').innerText.trim());
                                    }
                                }
                            }
                        }

                        let list_year_month = Object.keys(dict_sale);
                        list_year_month.sort();
                        list_year_month.reverse();


                        const content_purchase = `
                            <div style="margin: 30px 150px; border: 3px solid #3665f3;">
                               <br/>
                               <table style="margin: 0 auto; border-collapse: collapse; background-color: #3665f3; font-size: 16px; text-align: center;">
                                   <thead style="background-color: #cccccc; font-size: 16px; font-weight: bold">
                                       <tr>
                                           <th style="padding: 5px 20px; border: 1px solid black; text-align: center">
                                               年月
                                           </th>
                                           <th style="padding: 5px 20px; border: 1px solid black; text-align: center">
                                               月销
                                           </th>
                                           <th style="padding: 5px 20px; border: 1px solid black; text-align: center">
                                               周销
                                           </th>
                                       </tr>
                                   </thead>
                                   <tbody style="background-color: #f7f7f7;">
                                       ${list_year_month.map(year_month => {
                                           return `
                                       <tr>
                                           <td style="padding: 5px 20px; border: 1px solid black; text-align: center;">
                                               ${year_month}
                                           </td>
                                           <td style="padding: 5px 20px; border: 1px solid black; text-align: center;">
                                               ${dict_sale[year_month]}
                                           </td>
                                           <td onclick="copy_text_td(this)" style="padding: 5px 20px; border: 1px solid black; text-align: center; cursor: pointer;">
                                               ${dict_sale[year_month] / 4}
                                           </td>
                                       </tr>
                                           `;
                                       }).join('')}
                                   </tbody>
                               </table>
                               <br/>
                           </div>
                        `;
                        document.querySelector('div.x-vi-evo-main-container__top-panel').insertAdjacentHTML("afterend", content_purchase);
                    }
                    else {
                        console.error('fuck');
                    }
                }
                else {
                    console.error('fuck');
                }
            }
            xhr.send();
        }
        // https://www.ebay.com/bin/purchaseHistory?item=174677465298
        else if(document.location.href.includes('/bin/')) {
            let country = 'us', quantity, date_purchase, date_offer, status_offer, accepted;
            if(document.location.href.includes('://www.ebay.de/bin/')) {
                country = 'de', quantity = 'stückzahl', date_purchase = 'kaufdatum', date_offer = 'datum des preisvorschlags', status_offer = 'status', accepted = 'Akzeptiert';
            }
            else {
                quantity = 'quantity', date_purchase = 'date of purchase', date_offer = 'date of offer', status_offer = 'offer status', accepted = 'Accepted';
            }

            let dict_sale = {};
            const list_div_purchase = document.querySelectorAll('div.app-table.fixed-price'), list_div_offer = document.querySelectorAll('div.app-table.offer');
            if(list_div_purchase.length != 0) {
                const list_head = Array.from(list_div_purchase[0].querySelectorAll('table>thead>tr>th>span>span')).map(span => span.innerText.toLowerCase().trim());
                const index_quantity = list_head.indexOf(quantity), index_date = list_head.indexOf(date_purchase);

                const list_tr = list_div_purchase[0].querySelectorAll('table>tbody>tr');
                for(let i=0; i<list_tr.length; i++) {
                    const list_td = list_tr[i].querySelectorAll('td');
                    const year_month = real_year_month(country, list_td[index_date].querySelector('div>div>span>span').innerText.trim());
                    if(year_month in dict_sale) {
                        dict_sale[year_month] += parseInt(list_td[index_quantity].querySelector('div>div>span>span').innerText.trim());
                    }
                    else {
                        dict_sale[year_month] = parseInt(list_td[index_quantity].querySelector('div>div>span>span').innerText.trim());
                    }
                }
            }
            if(list_div_offer.length != 0) {
                const list_head = Array.from(list_div_offer[0].querySelectorAll('table>thead>tr>th>span>span')).map(span => span.innerText.toLowerCase().trim());
                const index_quantity = list_head.indexOf(quantity), index_date = list_head.indexOf(date_offer), index_status = list_head.indexOf(status_offer);

                const list_tr = list_div_offer[0].querySelectorAll('table>tbody>tr');
                for(let i=0; i<list_tr.length; i++) {
                    const list_td = list_tr[i].querySelectorAll('td');
                    if(list_td[index_status].querySelector('div>div>span>span').innerText.trim() == accepted) {
                        const year_month = real_year_month(country, list_td[index_date].querySelector('div>div>span>span').innerText.trim());
                        if(year_month in dict_sale) {
                            dict_sale[year_month] += parseInt(list_td[index_quantity].querySelector('div>div>span>span').innerText.trim());
                        }
                        else {
                            dict_sale[year_month] = parseInt(list_td[index_quantity].querySelector('div>div>span>span').innerText.trim());
                        }
                    }
                }
            }

            let list_year_month = Object.keys(dict_sale);
            list_year_month.sort();
            list_year_month.reverse();

            const content = `
                <div style="margin: 0 0 30px 0; border: 3px solid #3665f3;">
                   <br/>
                   <table style="margin: 0 auto; border-collapse: collapse; background-color: #3665f3; font-size: 16px; text-align: center;">
                       <thead style="background-color: #cccccc; font-size: 16px; font-weight: bold">
                           <tr>
                               <th style="padding: 5px 20px; border: 1px solid black; text-align: center">
                                   年月
                               </th>
                               <th style="padding: 5px 20px; border: 1px solid black; text-align: center">
                                   月销
                               </th>
                               <th style="padding: 5px 20px; border: 1px solid black; text-align: center">
                                   周销
                               </th>
                           </tr>
                       </thead>
                       <tbody style="background-color: #f7f7f7;">
                           ${list_year_month.map(year_month => {
                               return `
                           <tr>
                               <td style="padding: 5px 20px; border: 1px solid black; text-align: center;">
                                   ${year_month}
                               </td>
                               <td style="padding: 5px 20px; border: 1px solid black; text-align: center;">
                                   ${dict_sale[year_month]}
                               </td>
                               <td onclick="copy_text_td(this)" style="padding: 5px 20px; border: 1px solid black; text-align: center; cursor: pointer;">
                                   ${dict_sale[year_month] / 4}
                               </td>
                           </tr>
                               `;
                           }).join('')}
                       </tbody>
                   </table>
                   <br/>
               </div>
            `;
            document.querySelector('div.app-item-card.ph').insertAdjacentHTML("beforebegin", content);
        }
    });
})();