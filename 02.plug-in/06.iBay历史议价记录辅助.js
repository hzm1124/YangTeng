// ==UserScript==
// @name         iBay历史议价记录辅助
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.05.29
// @description  iBay辅助
// @author       Lennon
// @match        *://ibay686868.cht-group.net/index.php?controller=order&action=bestoffer*
// @icon         https://ibay686868.cht-group.net/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        let list_tr = document.querySelectorAll('table.ebay_table')[document.querySelectorAll('table.ebay_table').length-1].querySelectorAll('table.ebay_table>tbody>tr[id]');
        for(let i=1; i<list_tr.length; i++) {1
            let content = '<tr lennon="' + list_tr[i-1].getAttribute('id').replace(/^tr_/, '').trim() + '"><td colspan="5" bgcolor="#d3d3d3"></td><td colspan="8" bgcolor="#d3d3d3">Lennon</td></tr><tr><td colspan="14" bgcolor="#d3d3d3">&emsp;</td></tr>';
            list_tr[i].insertAdjacentHTML('beforebegin', content);
        }
        document.querySelectorAll('table.ebay_table')[document.querySelectorAll('table.ebay_table').length-1].querySelector('tbody').insertAdjacentHTML('beforeend', '<tr lennon="' + list_tr[list_tr.length-1].getAttribute('id').replace(/^tr_/, '').trim().trim() + '"><td colspan="5" bgcolor="#d3d3d3"></td><td colspan="8" bgcolor="#d3d3d3">Lennon</td></tr><tr><td colspan="14" bgcolor="#d3d3d3">&emsp;</td></tr>');

        let list_button = document.querySelectorAll('input[value="历史议价记录"]');
        for(let i=0; i<list_button.length; i++) {
            let param_onclick = list_button[i].getAttribute('onclick').trim().split('\',\'');

            let payload = 'bestofferid=' + param_onclick[0].split('\'')[1] + '&userid=' + param_onclick[1] + '&itemid=' + param_onclick[2].split('\'')[0];

            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://ibay686868.cht-group.net/index.php/order/ajaxshowbestofferlog', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
            xhr.onload = function() {
                if(xhr.status == 200 && xhr.readyState == 4) {
                    document.querySelectorAll('tr[lennon="' + param_onclick[0].split('\'')[1] + '"]>td')[1].innerText = '';
                    document.querySelectorAll('tr[lennon="' + param_onclick[0].split('\'')[1] + '"]>td')[1].insertAdjacentHTML('afterbegin', xhr.response);
                }
            }

            setTimeout(() => xhr.send(payload), Math.floor(Math.random() * 500 + i * 333));
        }
    }
})();