// ==UserScript==
// @name         AutoteileDirekt爬虫-pic
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.09.08
// @description  爬虫
// @author       Lennon
// @match        *://cdn.autoteiledirekt.de/*
// @match        *://media.autoteiledirekt.de/*
// @icon         https://www.autoteiledirekt.de/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        let data = '[{"Src":"https://cdn.autoteiledirekt.de/thumb?id=7275624&m=1&n=0&lng=de&rev=94077844"},{"Src":"https://cdn.autoteiledirekt.de/thumb?id=7850717&m=1&n=0&lng=de&rev=94077844"},{"Src":"https://cdn.autoteiledirekt.de/thumb?id=7275626&m=1&n=0&lng=de&rev=94077844"},{"Src":"https://cdn.autoteiledirekt.de/thumb?id=7023595&m=1&n=0&lng=de&rev=94077844"}]';

        function sleep(time) {
            return(new Promise(function(resolve, reject) {
                setTimeout(function() { resolve(); }, time);
            }));
        }

        sleep(3000).then(function() {
            // document.getElementsByClassName('zone-name-title h1').length == 0
            let img = document.querySelector('img');

            // canvas
            let canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);

            // blob
            let blob_a = document.createElement('a');
            blob_a.href = canvas.toDataURL();
            blob_a.download = window.location.href.replace('https://', '').replace('http://', '') + '.jpeg';
            blob_a.click();

            // next
            let json_data = JSON.parse(data);
            let index;
            for(let i=0; i<json_data.length; i++) {
                if(json_data[i]['Src'] == window.location.href) {
                    index = i;
                    break;
                }
            }
            console.log('index：' + index);

            window.location.href = 'http://localhost:8080/crawler/12.AutoteileDirekt_2.html?index=' + (Number(index)+1);

        });
    }
})();