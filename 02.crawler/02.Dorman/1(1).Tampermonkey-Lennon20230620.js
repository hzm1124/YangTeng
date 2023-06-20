// ==UserScript==
// @name         Dorman爬虫-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.06.20
// @description  爬虫
// @author       Lennon
// @match        *://www.dormanproducts.com/gsearch.aspx?*
// @icon         https://static.dormanproducts.com/images/website/banner2/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);

        let list_part = document.getElementsByClassName('item-name');
        let array_part_number = new Array();
        for(let i=0; i<list_part.length; i++) {
            array_part_number.push(list_part[i].innerText);
        }

        let list_description = document.getElementsByClassName('searchItems-info');
        let array_part_type = new Array();
        let array_application_summary = new Array();
        for(let i=0; i<list_description.length; i++) {
            array_part_type.push(list_description[i].innerText.split('Application Summary: ')[0].trim().split('\n')[1]);
            let application_summary = list_description[i].innerText.split('Application Summary: ')[1];
            if(application_summary == undefined) {
                array_application_summary.push('');
            }
            else {
                array_application_summary.push(application_summary.split('\n')[0]);
            }
        }

        let list_url = document.getElementsByClassName('searchItems-img');
        let array_url = new Array();
        for(let i=0; i<list_url.length; i++) {
            array_url.push('https://www.dormanproducts.com/' + list_url[i].getElementsByTagName('a')[0].getAttribute('href'));
        }

        // 输出内容
        let array_content = new Array();
        for(let i=0; i<array_part_number.length; i++) {
            array_content[i] = {};
            array_content[i]['Part_Number'] = array_part_number[i];
            array_content[i]['Part_Type'] = array_part_type[i];
            array_content[i]['Application_Summary'] = array_application_summary[i];
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
        document.getElementById('pagingBottom_nextButton').click();
    }
})();