// ==UserScript==
// @name         Dorman辅助
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.12.27
// @description  Dorman
// @author       Lennon
// @match        *://www.dormanproducts.com/p-*
// @icon         https://www.dormanproducts.com/favicon.ico
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const switch_vehicle = true;
    const switch_engine = true;

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

    const list_th = document.querySelectorAll('section#productOE>div>table>tbody>tr>th');
    const list_oem_temp = Array.from(list_th).map(th => th.innerText.replace(/-/g, '').replace(/\s+/g, '').trim());
    let list_oem = [];
    list_oem_temp.forEach(oem => {
        if(!list_oem.includes(oem)) {
            list_oem.push(oem);
        }
    });

    const content_oem = `
        <div id="lennon_oem" style="margin: 0 auto; border: 3px solid #464646;">
            <br/>
            <table style="margin: 0 auto; border-collapse: collapse; background-color: #464646; font-size: 16px; text-align: center;">
                <thead style="background-color: #464646; font-size: 18px; font-weight: bold; color: white">
                    <tr>
                        <th style="padding: 5px 20px; border: 1px solid black; text-align: center;">
                            OEM
                        </th>
                    </tr>
                </thead>
                <tbody style="background-color: #dddddd;">
                    <tr>
                        <td onclick="copy_text_td(this)" style="padding: 5px 20px; border: 1px solid black; text-align: center; max-width: 800px; overflow: auto; cursor: pointer;">
                            ${list_oem.join(';')}
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
        </div>
    `;
    document.querySelector('div#productDetails').insertAdjacentHTML("beforebegin", content_oem);

    // = = =  = = =  = = =

    if(switch_vehicle) {
        const crawler_series = `https://www.dormanproducts.com/${document.querySelectorAll('input#hidfDetailApp')[0].getAttribute('value').trim()}`;

        let list_dict_correct = [];
        function get_vehicle(vehicle_url, page=0) {
            const url_request = `${vehicle_url}&num=50&start=${page * 50}`;

            const xhr = new XMLHttpRequest();
            xhr.open('GET', url_request, false);
            xhr.onload = function() {
                if(xhr.status == 200 && xhr.readyState == 4) {
                    const parser = new DOMParser();
                    let document_vehicle = parser.parseFromString(xhr.responseText, 'text/html');

                    const list_div = document_vehicle.querySelectorAll('div.detail-app-pager'), next_ = document_vehicle.querySelectorAll('a#pagingBottom_nextButton');
                    if(list_div.length > 0) {
                        if(page == 0 && next_.length != 0 && next_[0].getAttribute('href').trim() == 'Search/#') {
                            console.log('fuck');
                        }
                        else {
                            const list_text = document_vehicle.querySelectorAll('th[scope="col"]'), list_tr = document_vehicle.querySelectorAll('tr.detail-app-row');
                            for(let i=0; i<list_tr.length; i++) {
                                let dict_correct = {'Vehicle Url': url_request,
                                                    'Page': page + 1,
                                                    'Row': i + 1}

                                for(let j=0; j<list_text.length; j++) {
                                    dict_correct[list_text[j].innerText.trim()] = list_tr[i].querySelectorAll('td')[j].innerText.trim();
                                }
                                list_dict_correct.push(dict_correct);
                            }

                            if(next_.length != 0) {
                                get_vehicle(vehicle_url, page + 1);
                            }
                            else {
                                let dict_vehicle = {};
                                for(let i=0; i<list_dict_correct.length; i++) {
                                    let make = list_dict_correct[i]['Make'].trim(), model = list_dict_correct[i]['Model'].trim(), engine = list_dict_correct[i]['Configuration'].trim(), year = parseInt(list_dict_correct[i]['Year'].trim());

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
                                    <div id="lennon_vehicle" style="border: 3px solid #464646;">
                                        <br/>
                                        <table style="margin: 0 auto; border-collapse: collapse; background-color: #464646; font-size: 16px; text-align: center;">
                                            <thead style="background-color: #464646; font-size: 16px; font-weight: bold; color: white;">
                                                <tr>
                                                    <th onclick="copy_text_th_td(this)" style="padding: 5px 20px; border: 1px solid black; text-align: center; cursor: pointer;">
                                                        Vehicle W/o Engine
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody style="background-color: #dddddd;">
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
                                document.querySelector('section#productApp').insertAdjacentHTML("afterbegin", content_vehicle);

                                if(switch_engine) {
                                    let content_vehicle_2 = `
                                        <br/>
                                        <table style="margin: 0 auto; border-collapse: collapse; background-color: #464646; font-size: 16px; text-align: center;">
                                            <thead style="background-color: #464646; font-size: 16px; font-weight: bold; color: white;">
                                                <tr>
                                                    <th onclick="copy_text_th_tr(this)" colspan="2" style="padding: 5px 20px; border: 1px solid black; text-align: center; cursor: pointer;">
                                                        Vehicle W/ Engine
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody style="background-color: #dddddd;">
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

                                return;
                            }
                        }
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

        get_vehicle(crawler_series);
    }
})();