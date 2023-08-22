// ==UserScript==
// @name         卖家精灵爬虫-itm
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2023.08.18
// @description  爬虫
// @author       Lennon
// @match        *://www.sellersprite.com/v2/competitor-lookup/monthly?*
// @icon         https://www.sellersprite.com/favicon-32x32.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onload = function() {
        window.scrollTo(0, document.body.scrollHeight);

        let list_para = location.href.split('?')[1].split('&');
        let asin, para_index;
        for(let i=0; i<list_para.length; i++) {
            if(list_para[i].startsWith('textareaValue=')) {
                asin = list_para[i].split('textareaValue=')[1];
            }
            else if(list_para[i].startsWith('index=')) {
                para_index = list_para[i].split('index=')[1];
            }
        }
        console.log(asin);

        // 输出内容
        let list_tr = document.querySelectorAll('tr[class="bg-white"]');
        let index;
        for(let i=0; i<list_tr.length; i+=3) {
            let temp_asin = list_tr[i].querySelector('span[class="mr-1"]').innerText;
            if(temp_asin == asin) {
                index = i;
                break;
            }
        }
        let array_content = new Array();
        array_content[0] = {};
        array_content[0]['ASIN'] = asin;
        array_content[0]['标识'] = list_tr[index].getElementsByTagName('td')[1].innerText.replace(/\n/g, ';');
        array_content[0]['商品标题'] = list_tr[index].getElementsByTagName('td')[2].innerText.split('\n')[0];
        array_content[0]['品牌'] = list_tr[index].getElementsByTagName('td')[2].innerText.split('\n')[2].trim();
        array_content[0]['品牌链接'] = list_tr[index].getElementsByTagName('td')[2].querySelectorAll('a[class="link-muted no-decoration lighter"]')[1].getAttribute('href');
        array_content[0]['大类BSR'] = list_tr[index].getElementsByTagName('td')[3].innerText.split('\n')[0];
        array_content[0]['BSR增长数'] = list_tr[index].getElementsByTagName('td')[3].innerText.split('\n')[1].split(' ')[0];
        array_content[0]['BSR增长率'] = list_tr[index].getElementsByTagName('td')[3].innerText.split('\n')[1].split(' ')[1];
        array_content[0]['价格'] = list_tr[index].getElementsByTagName('td')[4].innerText.split('\n')[0];
        array_content[0]['Q&A数'] = list_tr[index].getElementsByTagName('td')[4].innerText.split('\n')[1];
        array_content[0]['毛利率'] = list_tr[index].getElementsByTagName('td')[5].innerText.split('\n')[0];
        array_content[0]['FBA运费'] = list_tr[index].getElementsByTagName('td')[5].innerText.split('\n')[1];
        array_content[0]['评分数'] = list_tr[index].getElementsByTagName('td')[6].innerText.split('\n')[0];
        array_content[0]['月度留评率'] = list_tr[index].getElementsByTagName('td')[6].innerText.split('\n')[1];
        array_content[0]['评分'] = list_tr[index].getElementsByTagName('td')[7].innerText.split('\n')[0];
        array_content[0]['月新增评分数'] = list_tr[index].getElementsByTagName('td')[7].innerText.split('\n')[1];
        array_content[0]['月销量'] = list_tr[index].getElementsByTagName('td')[9].innerText.split('\n')[0];
        array_content[0]['月销量增长率'] = list_tr[index].getElementsByTagName('td')[9].innerText.split('\n')[1];
        array_content[0]['月销售额'] = list_tr[index].getElementsByTagName('td')[10].innerText.split('\n')[0];
        array_content[0]['月销售额增长率'] = list_tr[index].getElementsByTagName('td')[10].innerText.split('\n')[1];
        array_content[0]['上架时间'] = list_tr[index].getElementsByTagName('td')[11].innerText.split('\n')[0];
        array_content[0]['配送方式'] = list_tr[index].getElementsByTagName('td')[12].innerText;

        array_content[0]['类目路径'] = list_tr[index+1].querySelector('span[class="text-primary"]').innerText.replace(/›/g, '->').trim();

        let list_div = list_tr[index+2].querySelectorAll('div[class="text-secondary mt-1"]');
        array_content[0]['中文类目名'] = list_div[0].innerText.replace(/^中文类目名: /, '').replace(/›/g, '->');
        array_content[0]['小类BSR'] = list_div[1].getElementsByTagName('span')[0].innerText.replace(/^#/, '');
        array_content[0]['小类目'] = list_div[1].getElementsByTagName('a')[0].innerText;
        array_content[0]['小类目链接'] = list_div[1].getElementsByTagName('a')[0].getAttribute('href');
        array_content[0]['重量_1'] = list_div[2].getElementsByTagName('span')[1].innerText;
        array_content[0]['重量_2'] = list_div[2].getElementsByTagName('span')[1].getAttribute('data-tips');
        array_content[0]['体积_1'] = list_div[2].getElementsByTagName('span')[3].innerText;
        array_content[0]['体积_2'] = list_div[2].getElementsByTagName('span')[3].getAttribute('data-tips');
        array_content[0]['LQS'] = list_div[2].getElementsByTagName('span')[4].innerText.replace(/^LQS: /, '');
        array_content[0]['变体数'] = list_div[2].getElementsByTagName('span')[5].innerText.replace(/^变体数:/, '').replace(/\(.*?\)/, '').trim();
        array_content[0]['SKU'] = list_div[2].getElementsByTagName('span')[5].innerText.replace(/^变体数:/, '').replace(/^.*?\(/, '').replace(/\)$/, '');
        array_content[0]['卖家数'] = list_div[2].getElementsByTagName('span')[6].innerText.replace(/^卖家: /, '');
        array_content[0]['BuyBox卖家'] = list_div[2].getElementsByTagName('span')[9].innerText.replace(/^BuyBox卖家：/, '');
        array_content[0]['BuyBox类型'] = list_div[2].getElementsByTagName('span')[10].innerText.replace(/^\(/, '').replace(/,.*?\)/, '').trim();
        array_content[0]['BuyBox卖家链接'] = list_tr[index+2].querySelectorAll('a[class="link-muted no-decoration lighter"]')[list_tr[index+2].querySelectorAll('a[class="link-muted no-decoration lighter"]').length-1].getAttribute('href');

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
        console.log('index：' + para_index);

        window.location.href = 'http://localhost:8080/crawler/11.Amazon.html?index=' + (Number(para_index)+1);
    }
})();