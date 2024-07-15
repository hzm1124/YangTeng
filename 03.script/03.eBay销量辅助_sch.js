// ==UserScript==
// @name         eBay销量辅助_sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.07.15
// @description  eBay销量辅助
// @author       Lennon
// @match        *://www.ebay.com/sch/*
// @match        *://www.ebay.de/sch/*
// @match        *://www.ebay.co.uk/sch/*
// @match        *://www.ebay.com.au/sch/*
// @match        *://www.ebay.ca/sch/*
// @icon         https://www.ebay.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let jq = jQuery.noConflict();
    jq(document).ready(function() {
        let list_item = document.querySelectorAll('span.s-item__item-id.s-item__itemID');
        for(let i=0; i<list_item.length; i++)
        {
            let item_number = list_item[i].innerText.split(':')[1].trim();
            if(window.location.href.includes('://www.ebay.com/sch/')) {
                list_item[i].innerHTML = list_item[i].innerText + '&emsp;<a href="https://www.ebay.com/bin/purchaseHistory?item=' + item_number + '" target="_blank"><button style="background-color: #e9faff;">&emsp;查看销量&emsp;</button></a>';
            }
            else if(window.location.href.includes('://www.ebay.de/sch/')) {
                list_item[i].innerHTML = list_item[i].innerText + '&emsp;<a href="https://www.ebay.de/bin/purchaseHistory?item=' + item_number + '" target="_blank"><button style="background-color: #e9faff;">&emsp;查看销量&emsp;</button></a>';
            }
            else if(window.location.href.includes('://www.ebay.co.uk/sch/')) {
                list_item[i].innerHTML = list_item[i].innerText + '&emsp;<a href="https://www.ebay.co.uk/bin/purchaseHistory?item=' + item_number + '" target="_blank"><button style="background-color: #e9faff;">&emsp;查看销量&emsp;</button></a>';
            }
            else if(window.location.href.includes('://www.ebay.com.au/sch/')) {
                list_item[i].innerHTML = list_item[i].innerText + '&emsp;<a href="https://www.ebay.com.au/bin/purchaseHistory?item=' + item_number + '" target="_blank"><button style="background-color: #e9faff;">&emsp;查看销量&emsp;</button></a>';
            }
            else if(window.location.href.includes('://www.ebay.ca/sch/')) {
                list_item[i].innerHTML = list_item[i].innerText + '&emsp;<a href="https://www.ebay.ca/bin/purchaseHistory?item=' + item_number + '" target="_blank"><button style="background-color: #e9faff;">&emsp;查看销量&emsp;</button></a>';
            }
        }
    });
})();