// ==UserScript==
// @name         eBay销量辅助_itm
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.07.15
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
    let purchase_history_url;

    // = = = = = = = = = = = = = = =

    function date_convert(date_in) {
        let month_year = date_in.replace(/^[1-9][0-9]{0,1} /, '');
        let year_month, date_out;
        if(purchase_history_url.includes('://www.ebay.de/bin/purchaseHistory?item=')) {
            year_month = month_year.split(',')[0].split(' ')[1] + month_year.split(',')[0].split(' ')[0];
            date_out = year_month.replace('Jan', '.01').replace('Feb', '.02').replace('Mrz', '.03').replace('Apr', '.04').replace('Mai', '.05').replace('Jun', '.06').replace('Jul', '.07').replace('Aug', '.08').replace('Sep', '.09').replace('Okt', '.10').replace('Nov', '.11').replace('Dez', '.12');
        }
        else {
            year_month = month_year.split(' ')[1] + month_year.split(' ')[0];
            date_out = year_month.replace('Jan', '.01').replace('Feb', '.02').replace('Mar', '.03').replace('Apr', '.04').replace('May', '.05').replace('Jun', '.06').replace('Jul', '.07').replace('Aug', '.08').replace('Sep', '.09').replace('Oct', '.10').replace('Nov', '.11').replace('Dec', '.12');
        }

        return date_out;
    }

    // = = = = = = = = = = = = = = =

    async function get_purchase_history(purchase_history_url) {
        console.log(purchase_history_url);
        try {
            let response = await fetch(purchase_history_url, {method: 'GET'});

            if(response.ok && response.status === 200) {
                let html = await response.text();
                let parser = new DOMParser();
                let doc = parser.parseFromString(html, "text/html");

                // = = = = = = = = = = = = = = =

                let title = doc.querySelectorAll('h1.ph-main-container__page-title.giant-text-1');
                if(title.length === 0 || (title[0].innerText.trim() !== 'Item Purchase History') && (title[0].innerText.trim() !== 'Kaufübersicht' && title[0].innerText.trim() !== 'Item purchase history')) {
                    let content = '<a href="' + purchase_history_url + '" target="_blank" style="position: fixed;right: 450px;bottom: 300px;z-index: 99;"><button style="font-size: 30px;background-color: #e9faff;">&emsp;查看销量&emsp;</button></a>';
                    document.querySelector("body").insertAdjacentHTML("afterbegin", content);
                }
                else {
                    let quantity, date_of_purchase, date_of_offer;
                    if(purchase_history_url.includes('://www.ebay.de/bin/purchaseHistory?item=')) {
                        quantity = 'Stückzahl';
                        date_of_purchase = 'Kaufdatum';
                        date_of_offer = 'Datum des Preisvorschlags';
                    }
                    else {
                        quantity = 'Quantity';
                        date_of_purchase = 'Date of purchase';
                        date_of_offer = 'Date of offer';
                    }

                    let purchase_history = {};
                    // Recent purchases
                    let table_fixed_price = doc.querySelectorAll('div.app-table.fixed-price');
                    if(table_fixed_price.length != 0) {
                        let list_span = table_fixed_price[0].querySelectorAll('table>thead>tr>th>span>span'), list_th = new Array();
                        for(let i=0; i<list_span.length; i++) {
                            list_th.push(list_span[i].innerText.trim());
                        }

                        let list_tr = table_fixed_price[0].querySelectorAll('table>tbody>tr');
                        for(let i=0; i<list_tr.length; i++) {
                            let list_td = list_tr[i].querySelectorAll('td');
                            let year_month = date_convert(list_td[list_th.indexOf(date_of_purchase)].querySelector('div>div>span>span').innerText.trim());
                            if(year_month in purchase_history) {
                                purchase_history[year_month] += parseInt(list_td[list_th.indexOf(quantity)].querySelector('div>div>span>span').innerText.trim());
                            }
                            else {
                                purchase_history[year_month] = parseInt(list_td[list_th.indexOf(quantity)].querySelector('div>div>span>span').innerText.trim());
                            }
                        }
                    }

                    // Offer history
                    let table_offer = doc.querySelectorAll('div.app-table.offer');
                    if(table_offer.length != 0) {
                        let list_span = table_offer[0].querySelectorAll('table>thead>tr>th>span>span'), list_th = new Array();
                        for(let i=0; i<list_span.length; i++) {
                            list_th.push(list_span[i].innerText.trim());
                        }

                        let list_tr = table_offer[0].querySelectorAll('table>tbody>tr');
                        for(let i=0; i<list_tr.length; i++) {
                            let list_td = list_tr[i].querySelectorAll('td');
                            let year_month = date_convert(list_td[list_th.indexOf(date_of_offer)].querySelector('div>div>span>span').innerText.trim());
                            if(year_month in purchase_history) {
                                purchase_history[year_month] += parseInt(list_td[list_th.indexOf(quantity)].querySelector('div>div>span>span').innerText.trim());
                            }
                            else {
                                purchase_history[year_month] = parseInt(list_td[list_th.indexOf(quantity)].querySelector('div>div>span>span').innerText.trim());
                            }
                        }
                    }

                    let content = '<div id="lennon_purchase_history" style="margin: 30px 150px;border: 3px solid red;"><br/><br/><table bgcolor="#e9faff" style="margin: 0 auto;border-collapse: collapse;font-size: 16px;text-align: center;"><thead style="font-size: 18px;font-weight: bold;"><tr><th style="border: 1px solid;">&emsp;年月&emsp;</th><th style="border: 1px solid;">&emsp;月销&emsp;</th><th style="border: 1px solid;">&emsp;周销&emsp;</th></tr></thead><tbody>';
                    let list_year_month = Object.keys(purchase_history);
                    list_year_month.sort();
                    for(let i=list_year_month.length-1; i>-1; i--)
                    {
                        content += '<tr><td style="border: 1px solid;">&emsp;' + list_year_month[i] + '&emsp;</td><td style="border: 1px solid;">&emsp;' + purchase_history[list_year_month[i]] + '&emsp;</td><td style="border: 1px solid;">&emsp;' + purchase_history[list_year_month[i]]/4 + '&emsp;</td></tr>';
                    }
                    content += '</tbody></table><br/><br/></div>';
                    document.querySelector('div.x-vi-evo-main-container__top-panel').insertAdjacentHTML("afterend", content);
                }
            }
            else {
                get_purchase_history(purchase_history_url);
            }
        }
        catch(error) {
            get_purchase_history(purchase_history_url);
        }
    }

    // = = = = = = = = = = = = = = =

    let jq = jQuery.noConflict();
    jq(document).ready(function() {
        let item_number = window.location.href.split('/itm/')[1].split('/')[0].split('?')[0].trim();

        // = = = = = = = = = = = = = = =

        if(window.location.href.includes('://www.ebay.com/itm/')) {
            purchase_history_url = 'https://www.ebay.com/bin/purchaseHistory?item=' + item_number;
        }
        else if(window.location.href.includes('://www.ebay.de/itm/')) {
            purchase_history_url = 'https://www.ebay.de/bin/purchaseHistory?item=' + item_number;
        }
        else if(window.location.href.includes('://www.ebay.co.uk/itm/')) {
            purchase_history_url = 'https://www.ebay.co.uk/bin/purchaseHistory?item=' + item_number;
        }
        else if(window.location.href.includes('://www.ebay.com.au/itm/')) {
            purchase_history_url = 'https://www.ebay.com.au/bin/purchaseHistory?item=' + item_number;
        }
        else if(window.location.href.includes('://www.ebay.ca/itm/')) {
            purchase_history_url = 'https://www.ebay.ca/bin/purchaseHistory?item=' + item_number;
        }

        get_purchase_history(purchase_history_url);
    });
})();