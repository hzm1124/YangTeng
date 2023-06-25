// ==UserScript==
// @name         SpectraPremium爬虫-sch
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.06.19
// @description  爬虫
// @author       Lennon
// @match        *://ecat.spectrapremium.com/en/parts?*
// @icon         https://ecat.spectrapremium.com/safari-pinned-tab.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);

        // 输出内容
        let list_part_number = document.getElementsByClassName('tuile-produit__code-produit');
        let array_content = new Array();
        for(let i=0; i<list_part_number.length; i++) {
            array_content[i] = {};
            array_content[i]['Part_Number'] = list_part_number[i].innerText;
            array_content[i]['Url'] = 'https://ecat.spectrapremium.com' + list_part_number[i].getElementsByTagName('a')[0].getAttribute('href');
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
        document.getElementsByClassName('paginator__next')[0].getElementsByTagName('a')[0].click();
    }
})();