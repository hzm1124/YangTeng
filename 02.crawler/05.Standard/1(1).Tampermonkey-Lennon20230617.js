// ==UserScript==
// @name         Standard爬虫-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.06.17
// @description  爬虫
// @author       Lennon
// @match        *://ecatalog.smpcorp.com/*
// @icon         https://www.standardbrand.com/media/1141/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.scrollTo(0, document.body.scrollHeight);

    let list_row = JSON.parse(document.getElementsByTagName('pre')[0].innerText);
    if(list_row.length != 0) {
        let array_part_number = new Array();
        let array_url = new Array();
        for(let i=0; i<list_row.length; i++) {
            array_part_number.push(list_row[i]['basePart']);
            array_url.push('https://www.standardbrand.com/en/ecatalog?partdetail=' + String(list_row[i]['webBase']));
        }

        // 输出内容
        let array_content = new Array();
        for(let i=0; i<array_part_number.length; i++) {
            array_content[i] = {};
            array_content[i]['Part_Number'] = array_part_number[i];
            array_content[i]['Url'] = array_url[i];
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
        let url_now = window.location.href;
        let page_now = Number(url_now.split('start=')[1].split('&')[0]);
        let page_next = page_now + 96;
        let url_next = url_now.replace('start='+String(page_now), 'start='+String(page_next));
        window.location.href = url_next;
    }
})();