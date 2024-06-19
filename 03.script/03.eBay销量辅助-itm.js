// ==UserScript==
// @name         eBay销量辅助-itm
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.05.13
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
    function date_conversion(date_in)
    {
        let date_month_year = date_in.replace(/^[1-9][0-9]{0,1} /, '');
        let date_year_month = date_month_year.split(' ')[1] + date_month_year.split(' ')[0];
        date_year_month = date_year_month.replace('Jan', '.01');
        date_year_month = date_year_month.replace('Feb', '.02');
        date_year_month = date_year_month.replace('Mar', '.03');
        date_year_month = date_year_month.replace('Apr', '.04');
        date_year_month = date_year_month.replace('May', '.05');
        date_year_month = date_year_month.replace('Jun', '.06');
        date_year_month = date_year_month.replace('Jul', '.07');
        date_year_month = date_year_month.replace('Aug', '.08');
        date_year_month = date_year_month.replace('Sep', '.09');
        date_year_month = date_year_month.replace('Oct', '.10');
        date_year_month = date_year_month.replace('Nov', '.11');
        date_year_month = date_year_month.replace('Dec', '.12');

        return date_year_month;
    }

    let item_number = document.querySelector('div.ux-layout-section.ux-layout-section--itemId.ux-layout-section--ALIGN-RIGHT').textContent.split(':')[1].replace(' ', '');
    if(window.location.href.indexOf('://www.ebay.com/') == -1) {
        let country = window.location.href.split('/itm')[0].split('.')[window.location.href.split('/itm')[0].split('.').length-1];
        let content = '<a href="https://www.ebay.com/itm/' + item_number + '?Lennon_Country=' + country + '" target="_blank" style="position: fixed;right: 450px;bottom: 300px;z-index: 99;"><button style="font-size: 30px;background-color: #e9faff;">&emsp;' + country + '转us&emsp;</button></a>'
        document.querySelector("body").insertAdjacentHTML("afterbegin", content);
    }
    else {
        // let content = '<div id="Lennon_1" style="border: 3px solid red"><iframe src="https://www.ebay.com/bin/purchaseHistory?item=' + item_number + '" width="100%" height="500"></iframe></div>';
        // if(document.querySelector('div[data-testid="BottomPanel"]') == null) {
        //     document.querySelector('div.tabs__content').insertAdjacentHTML("beforebegin", content);
        // }
        // else {
        //     document.querySelector('div[data-testid="BottomPanel"]').insertAdjacentHTML("afterbegin", content);
        // }

        let sold = {};

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.ebay.com/bin/purchaseHistory?item=' + item_number, false);
        xhr.onload = function() {
            if(xhr.status == 200 && xhr.readyState == 4) {
                let parser = new DOMParser();
                let doc = parser.parseFromString(xhr.responseText, "text/html");

                if(doc.querySelectorAll('h1.ph-main-container__page-title.giant-text-1').length == 0 || doc.querySelectorAll('h1.ph-main-container__page-title.giant-text-1')[0].innerText.trim() != 'Item Purchase History') {
                    let content = '<a href="https://www.ebay.com/bin/purchaseHistory?item=' + item_number + '" target="_blank" style="position: fixed;right: 450px;bottom: 300px;z-index: 99;"><button style="font-size: 30px;background-color: #e9faff;">&emsp;查看销量&emsp;</button></a>'
                    document.querySelector("body").insertAdjacentHTML("afterbegin", content);
                }
                else {
                    // Recent purchases
                    let table_fixed_price = doc.querySelectorAll('div.app-table.fixed-price');
                    if(table_fixed_price.length != 0)
                    {
                        let list_tr = table_fixed_price[0].querySelectorAll('table tbody tr');
                        for(let i=0; i<list_tr.length; i++)
                        {
                            let list_td = list_tr[i].querySelectorAll('td');
                            let date_year_month = date_conversion(list_td[3].textContent.trim());
                            if(date_year_month in sold)
                            {
                                sold[date_year_month] += parseInt(list_td[2].textContent.trim());
                            }
                            else
                            {
                                sold[date_year_month] = parseInt(list_td[2].textContent.trim());
                            }
                        }
                    }

                    // Offer history
                    let table_offer = doc.querySelectorAll('div.app-table.offer');
                    if(table_offer.length != 0)
                    {
                        let list_tr = table_offer[0].querySelectorAll('table tbody tr');
                        for(let i=0; i<list_tr.length; i++)
                        {
                            let list_td = list_tr[i].querySelectorAll('td');
                            if(list_td[1].textContent.trim() == 'Accepted')
                            {
                                let date_year_month = date_conversion(list_td[3].textContent.trim());
                                if(date_year_month in sold)
                                {
                                    sold[date_year_month] += parseInt(list_td[2].textContent.trim());
                                }
                                else
                                {
                                    sold[date_year_month] = parseInt(list_td[2].textContent.trim());
                                }
                            }
                        }
                    }

                    let content = '<div id="Lennon_1" style="margin: 30px 150px;border: 3px solid red;"><br/><br/><table bgcolor="#e9faff" style="margin: 0 auto;border-collapse: collapse;font-size:16px;text-align: center;"><thead style="font-size:18px;font-weight: bold;"><tr><th style="border: 1px solid;">&emsp;年月&emsp;</th><th style="border: 1px solid;">&emsp;月销&emsp;</th><th style="border: 1px solid;">&emsp;周销&emsp;</th></tr></thead><tbody>';
                    let list_date = Object.keys(sold);
                    list_date.sort();
                    for(let i=list_date.length-1; i>-1; i--)
                    {
                        content += '<tr><td style="border: 1px solid;">&emsp;' + list_date[i] + '&emsp;</td><td style="border: 1px solid;">&emsp;' + sold[list_date[i]] + '&emsp;</td><td style="border: 1px solid;">&emsp;' + sold[list_date[i]]/4 + '&emsp;</td></tr>';
                    }
                    content += '</tbody></table><br/><br/></div>';
                    document.querySelector('div.x-vi-evo-main-container__top-panel').insertAdjacentHTML("afterend", content);
                }
            }
        };
        xhr.send();
    }
})();