// ==UserScript==
// @name         AutoteileDirekt爬虫-Pic
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.09.12
// @description  爬虫
// @author       Lennon
// @match        *://media.autoteiledirekt.de/*
// @match        *://cdn.autoteiledirekt.de/*
// @icon         https://www.autoteiledirekt.de/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        function sleep(time) {
            return(new Promise(function(resolve, reject) {
                setTimeout(function() { resolve();}, time);
            }));
        }

        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Tampermonkey 1：爬虫启动');

        sleep(3000).then(function() {
            let pic = document.querySelector('img');
            console.log('Tampermonkey 2：图片获取成功');

            // canvas
            let canvas = document.createElement('canvas');
            canvas.width = pic.width;
            canvas.height = pic.height;
            canvas.getContext('2d').drawImage(pic, 0, 0, canvas.width, canvas.height);

            // blob
            let blob_a = document.createElement('a');
            blob_a.href = canvas.toDataURL();
            blob_a.download = window.location.href + '.jpeg';
            blob_a.click();
            console.log('Tampermonkey 3：爬虫结束');
            console.log('= = = = = = = = = = = = = = =\n\n\n');

            // next
            let list_param = window.location.href.split('?')[1].split('&');
            let param_index;
            for(let i=0; i<list_param.length; i++) {
                if(list_param[i].startsWith('index=')) {
                    param_index = list_param[i].split('index=')[1];
                }
            }
            console.log('下一个index：' + (Number(param_index) + 1));
            window.location.href = 'http://localhost:8080/crawler/12.AutoteileDirekt_2.html?index=' + (Number(param_index) + 1);
        })
    }
})();