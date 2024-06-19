// ==UserScript==
// @name         eBay销量辅助-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.05.13
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
    let list_item = document.querySelectorAll('span.s-item__item-id.s-item__itemID');
    for(let i=0; i<list_item.length; i++)
    {
        let item_number = list_item[i].textContent.split(':')[1].replace(' ', '');
        list_item[i].innerHTML = '<a href="https://www.ebay.com/bin/purchaseHistory?item=' + item_number + '" target="_blank" ><button style="background-color: #e9faff;">查看销量：' + item_number + '</button></a>';
    }
})();