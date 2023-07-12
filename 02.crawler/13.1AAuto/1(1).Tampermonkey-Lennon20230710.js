// ==UserScript==
// @name         1Aauto-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.07.10
// @description  爬虫
// @author       Lennon
// @match        *://www.1aauto.com/search?*
// @icon         https://content.1aauto.com/img/icons/1alogo-w50-svg.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);

        let list_title = document.getElementsByClassName('replaces-title title brand-blue ga-product-link');
        let array_title = new Array();
        let array_url = new Array();
        for(let i=0; i<list_title.length; i++) {
            array_title.push(list_title[i].innerText);
            array_url.push(list_title[i].getAttribute('href'));
        }

        let list_brand_1 = document.getElementsByClassName('desc-value oos-desc-brand');
        let list_brand_2 = document.getElementsByClassName('oos-desc-value');
        let array_brand = new Array();
        for(let i=0; i<list_brand_1.length; i++) {
            array_brand.push(list_brand_1[i].innerText + ' - ' + list_brand_2[i].innerText);
        }

        // 输出内容
        let array_content = new Array();
        for(let i=0; i<array_title.length; i++) {
            array_content[i] = {};
            array_content[i]['Title'] = array_title[i];
            array_content[i]['Url'] = 'https://www.1aauto.com' + array_url[i];
            array_content[i]['Brand'] = array_brand[i];
        }

        // json
        let json_content = JSON.stringify(array_content);
        console.log(json_content);

        // blob
        let blob_data = new Blob([json_content], {type: 'text/plain'});
        let blob_url = URL.createObjectURL(blob_data);
        let blob_a = document.createElement('a');
        blob_a.href = blob_url;
        blob_a.download = window.location.href.replace('http://', '').replace('https://', '') + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);

        // next
        if(document.getElementsByClassName('pagination-button pagination-button-next')[0].getAttribute('disabled') != 'disabled') {
            document.getElementsByClassName('pagination-button pagination-button-next')[0].click();
        }
    }
})();