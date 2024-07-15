// ==UserScript==
// @name         eBay销量辅助_purchaseHistory
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.07.15
// @description  eBay销量辅助
// @author       Lennon
// @match        *://www.ebay.com/bin/purchaseHistory?item=*
// @match        *://www.ebay.de/bin/purchaseHistory?item=*
// @match        *://www.ebay.co.uk/bin/purchaseHistory?item=*
// @match        *://www.ebay.com.au/bin/purchaseHistory?item=*
// @match        *://www.ebay.ca/bin/purchaseHistory?item=*
// @icon         https://www.ebay.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function date_convert(date_in) {
        let month_year = date_in.replace(/^[1-9][0-9]{0,1} /, '');
        let year_month, date_out;
        if(window.location.href.includes('://www.ebay.de/bin/purchaseHistory?item=')) {
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

    let jq = jQuery.noConflict();
    jq(document).ready(function() {
        let quantity, date_of_purchase, date_of_offer;
        if(window.location.href.includes('://www.ebay.de/bin/purchaseHistory?item=')) {
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

        // = = = = = = = = = = = = = = =

        let table_fixed_price = document.querySelectorAll('div.app-table.fixed-price');
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
        let table_offer = document.querySelectorAll('div.app-table.offer');
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

        let content = '<div id="lennon_purchase_history" style="margin: 0 0 30px 0;border: 3px solid red;"><br/><br/><table bgcolor="#e9faff" style="margin: 0 auto;border-collapse: collapse;font-size: 16px;text-align: center;"><thead style="font-size: 18px;font-weight: bold;"><tr><th style="border: 1px solid;">&emsp;年月&emsp;</th><th style="border: 1px solid;">&emsp;月销&emsp;</th><th style="border: 1px solid;">&emsp;周销&emsp;</th></tr></thead><tbody>';
        let list_year_month = Object.keys(purchase_history);
        list_year_month.sort();
        for(let i=list_year_month.length-1; i>-1; i--)
        {
            content += '<tr><td style="border: 1px solid;">&emsp;' + list_year_month[i] + '&emsp;</td><td style="border: 1px solid;">&emsp;' + purchase_history[list_year_month[i]] + '&emsp;</td><td style="border: 1px solid;">&emsp;' + purchase_history[list_year_month[i]]/4 + '&emsp;</td></tr>';
        }
        content += '</tbody></table><br/><br/></div>';
        document.querySelector('div.app-item-card.ph').insertAdjacentHTML("beforebegin", content);
    });
})();