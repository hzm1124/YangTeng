// ==UserScript==
// @name         AutoteileDirekt爬虫-Pic
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.12.16
// @description  Crawler
// @author       Lennon
// @match        *://media.autoteiledirekt.de/*
// @match        *://cdn.autoteiledirekt.de/*
// @icon         https://www.autoteiledirekt.de/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        function sleep(time) {
            return(new Promise(function(resolve, reject) {
                setTimeout(function() { resolve();}, time);
            }));
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        sleep(3000).then(function() {
            // img
            let img = document.querySelector('img');
            console.log('Crawler Log 2: Img');

            // canvas
            let canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
            console.log('Crawler Log 3: Canvas');

            // blob
            let blob_a = document.createElement('a');
            blob_a.href = canvas.toDataURL();
            blob_a.download = window.location.href + '.jpeg';
            blob_a.click();
            console.log('Crawler Log 4: Blob');

            // index
            let list_param = window.location.href.split('?')[1].split('&');
            let param_index;
            for(let i=0; i<list_param.length; i++) {
                if(list_param[i].startsWith('index=')) {
                    param_index = list_param[i].split('index=')[1];
                }
            }
            console.log('Crawler Log 5: Index is ' + param_index);
            console.log('Crawler Log 6: Next is ' + (Number(param_index) + 1));

            //url
            let url = 'http://localhost:8080/crawler/12.AutoteileDirekt_3.html?index=' + (Number(param_index) + 1);
            console.log('Crawler Log 7: Go to ' + url);
            console.log('= = = = = = = = = = = = = = =\n\n\n');
            window.location.href = url;
        })
    }
})();