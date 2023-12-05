// ==UserScript==
// @name         SellerSprite爬虫-Part
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.12.01
// @description  Crawler
// @author       Lennon
// @match        *://www.sellersprite.com/*
// @icon         https://www.sellersprite.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);
        console.log('\n\n\n= = = = = = = = = = = = = = =');
        console.log('Crawler Log 1: Start');

        // index, asin
        let list_param = window.location.href.split('?')[1].split('&');
        let param_index;
        let asin;
        for(let i=0; i<list_param.length; i++) {
            if(list_param[i].startsWith('index=')) {
                param_index = list_param[i].split('index=')[1];
            }
            else if(list_param[i].startsWith('textareaValue=')){
                asin = list_param[i].split('textareaValue=')[1];
            }
        }

        // array
        let array_data = new Array();
        array_data[0] = {};
        array_data[0]['ASIN'] = asin;

        let list_part = document.querySelectorAll('tr[class="bg-white"]');
        let part_index;
        for(let i=0; i<list_part.length; i+=3) {
            if(list_part[i].querySelector('span.mr-1.link-to-amazon').innerText == asin) {
                part_index = i;
            }
        }
        array_data[0]['标识'] = list_part[part_index].querySelectorAll('td')[1].innerText.replace(/\n/g, ';').trim();
        array_data[0]['PASIN'] = list_part[part_index].querySelectorAll('td')[2].innerText.split('\n')[2].split('PASIN:')[1].trim();
        array_data[0]['品牌'] = list_part[part_index].querySelectorAll('td')[2].innerText.split('\n')[3].trim();
        array_data[0]['品牌链接'] = list_part[part_index].querySelector('td a.style-color').getAttribute('href').trim();
        array_data[0]['大类BSR'] = list_part[part_index].querySelectorAll('td')[3].innerText.split('\n')[0].trim();
        array_data[0]['BSR增长数'] = list_part[part_index].querySelectorAll('td')[3].innerText.split('\n')[1].split(' ')[0].trim();
        array_data[0]['BSR增长率'] = list_part[part_index].querySelectorAll('td')[3].innerText.split('\n')[1].split(' ')[1].trim();
        array_data[0]['父体月销量'] = list_part[part_index].querySelectorAll('td')[5].innerText.split('\n')[0].trim();
        array_data[0]['父体月销量增长率'] = list_part[part_index].querySelectorAll('td')[5].innerText.split('\n')[1].trim();
        array_data[0]['月销售额'] = list_part[part_index].querySelectorAll('td')[6].innerText.split('\n')[0].trim();
        array_data[0]['月销售额增长率'] = list_part[part_index].querySelectorAll('td')[6].innerText.split('\n')[1].trim();
        array_data[0]['价格'] = list_part[part_index].querySelectorAll('td')[7].innerText.split('\n')[0].trim();
        array_data[0]['Q&A数'] = list_part[part_index].querySelectorAll('td')[7].innerText.split('\n')[1].trim();
        array_data[0]['毛利率'] = list_part[part_index].querySelectorAll('td')[8].innerText.split('\n')[0].trim();
        array_data[0]['FBA运费'] = list_part[part_index].querySelectorAll('td')[8].innerText.split('\n')[1].trim();
        array_data[0]['评分数'] = list_part[part_index].querySelectorAll('td')[9].innerText.split('\n')[0].trim();
        array_data[0]['月度留评率'] = list_part[part_index].querySelectorAll('td')[9].innerText.split('\n')[1].trim();
        array_data[0]['评分'] = list_part[part_index].querySelectorAll('td')[10].innerText.split('\n')[0].trim();
        array_data[0]['月内新增评分数'] = list_part[part_index].querySelectorAll('td')[10].innerText.split('\n')[1].trim();
        array_data[0]['上架时间_1'] = list_part[part_index].querySelectorAll('td')[11].innerText.split('\n')[0].trim();
        array_data[0]['上架时间_2'] = list_part[part_index].querySelectorAll('td')[11].innerText.split('\n')[1].trim();
        array_data[0]['配送方式'] = list_part[part_index].querySelectorAll('td')[12].innerText.trim();

        array_data[0]['类目路径'] = list_part[part_index+1].querySelector('span.text-primary').innerText.replace(/›/g, '->').trim();

        let list_div = list_part[part_index+2].querySelectorAll('div.text-secondary.mt-1');
        array_data[0]['中文类目名'] = list_div[0].innerText.replace(/^中文类目名: /, '').replace(/›/g, '->').trim();
        array_data[0]['小类BSR'] = list_div[1].querySelector('span.badge.badge-primary.no-decoration.lighter ').innerText.trim();
        array_data[0]['小类目'] = list_div[1].querySelector('a.item-border-dotted1').innerText.trim();
        array_data[0]['小类目链接'] = list_div[1].querySelector('a.item-border-dotted1').getAttribute('href').trim();
        let offset = 0;
        array_data[0]['重量_1'] = list_div[2].querySelectorAll('span')[0-offset].innerText.replace(/^重量: /, '').trim();
        if(array_data[0]['重量_1'] == '--') {
            offset += 1;
            array_data[0]['重量_2'] = '--';
        }
        else {
            array_data[0]['重量_2'] = list_div[2].querySelectorAll('span')[1-offset].getAttribute('data-tips').trim();
        }
        array_data[0]['体积_1'] = list_div[2].querySelectorAll('span')[2-offset].innerText.replace(/^体积: /, '').trim();
        if(array_data[0]['体积_1'] == '--') {
            offset += 1;
            array_data[0]['体积_2'] = '--';
        }
        else {
            array_data[0]['体积_2'] = list_div[2].querySelectorAll('span')[3-offset].getAttribute('data-tips').trim();
        }
        array_data[0]['LQS'] = list_div[2].querySelectorAll('span')[4-offset].innerText.replace(/^LQS: /, '').trim();
        array_data[0]['变体数'] = list_div[2].querySelectorAll('span')[5-offset].innerText.replace('变体数: ', '').replace(/\(.*?\)$/, '').trim();
        if(array_data[0]['变体数'] == '无') {
            array_data[0]['SKU'] = '';
        }
        else {
            array_data[0]['SKU'] = list_div[2].querySelectorAll('span')[5-offset].innerText.replace('变体数:', '').replace(/^.*?\(/, '').replace(/\)$/, '').trim();
        }
        array_data[0]['卖家数'] = list_div[2].querySelectorAll('span')[6-offset].innerText.replace('卖家: ', '').trim();
        if(list_div[2].querySelectorAll('span').length > 8 - offset) {
            array_data[0]['BuyBox卖家'] = list_div[2].querySelectorAll('span')[8-offset].innerText.replace('BuyBox卖家：', '').trim();
            if(list_div[2].querySelectorAll('span')[8-offset].querySelector('a') == null) {
                array_data[0]['BuyBox卖家链接'] = '';
            }
            else {
                array_data[0]['BuyBox卖家链接'] = list_div[2].querySelectorAll('span')[8-offset].querySelector('a').getAttribute('href').trim();
            }
        }
        else {
            array_data[0]['BuyBox卖家'] = '';s
            array_data[0]['BuyBox卖家链接'] = '';
        }
        console.log('Crawler Log 2: Array');

        // json
        let json_part = JSON.stringify(array_data);
        console.log('Crawler Log 3: Json');

        // blob
        let blob_data = new Blob([json_part], {type: 'text/plain'});
        let blob_url = URL.createObjectURL(blob_data);
        let blob_a = document.createElement('a');
        blob_a.href = blob_url;
        blob_a.download = window.location.href + '.txt';
        blob_a.click();
        URL.revokeObjectURL(blob_url);
        console.log('Crawler Log 4: Blob');

        // url
        console.log('Crawler Log 5: Index is ' + param_index);
        console.log('Crawler Log 6: Next is ' + (Number(param_index) + 1));
        let url = 'http://localhost:8080/crawler/11.Amazon_2.html?index=' + (Number(param_index) + 1);
        console.log('Crawler Log 7: Go to ' + url);
        console.log('= = = = = = = = = = = = = = =\n\n\n');
        window.location.href = url;
    }
})();