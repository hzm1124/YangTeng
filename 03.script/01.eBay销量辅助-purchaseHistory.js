// ==UserScript==
// @name         eBay销量辅助-purchaseHistory
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.05.13
// @description  eBay销量辅助
// @author       Lennon
// @match        *://www.ebay.com/bin/purchaseHistory?item=*
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

    let sold = {};

    // Recent purchases
    let table_fixed_price = document.querySelectorAll('div.app-table.fixed-price');
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
    let table_offer = document.querySelectorAll('div.app-table.offer');
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

    let content = '<div id="Lennon_1" style="margin: 0 0 30px 0;border: 3px solid red;"><br/><br/><table bgcolor="#e9faff" style="margin: 0 auto;border-collapse: collapse;font-size:16px;text-align: center;"><thead style="font-size:18px;font-weight: bold;"><tr><th style="border: 1px solid;">&emsp;年月&emsp;</th><th style="border: 1px solid;">&emsp;月销&emsp;</th><th style="border: 1px solid;">&emsp;周销&emsp;</th></tr></thead><tbody>';
    let list_date = Object.keys(sold);
    list_date.sort();
    for(let i=list_date.length-1; i>-1; i--)
    {
        content += '<tr><td style="border: 1px solid;">&emsp;' + list_date[i] + '&emsp;</td><td style="border: 1px solid;">&emsp;' + sold[list_date[i]] + '&emsp;</td><td style="border: 1px solid;">&emsp;' + sold[list_date[i]]/4 + '&emsp;</td></tr>';
    }
    content += '</tbody></table><br/><br/></div>';
    document.querySelector(".app-item-card.ph").insertAdjacentHTML("beforebegin", content);
})();