// ==UserScript==
// @name         RockAuto辅助
// @namespace    https://github.com/lennon1124/YangTeng
// @version      2024.12.27
// @description  RockAuto
// @author       Lennon
// @match        *://www.rockauto.com/*
// @icon         https://www.rockauto.com/favicon.ico
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.copy_text = function(element_span) {
        const text = element_span.innerText.trim();
        navigator.clipboard.writeText(text)
            .then(() => {
            console.log(`True: ${text}`);
        })
            .catch(() => {
            console.log('False');
        });
    };

    function sleep(time) {
        return(new Promise(function(resolve, reject) {
            setTimeout(function() { resolve();}, time);
        }));
    }

    function get_oem() {
        sleep(2000).then(function() {
            let list_tbody = document.querySelectorAll('tbody[id*="listingcontainer["]');
            let list_list_oem = [];
            list_tbody.forEach(tbody => {
                let list_oem = [];
                let list_td = tbody.querySelectorAll('tr')[0].querySelectorAll('td[class*="listing-inner-content"]');
                list_td.forEach(td => {
                    let list_span = td.querySelectorAll('span[title*="Replaces these Alternate"]');
                    list_span.forEach(span => {
                        let list_text = span.innerText.split(',').map(text => text.replace(/\s+/g, '').trim());
                        list_text.forEach(text => {
                            if(!list_oem.includes(text) && text != '') {
                                list_oem.push(text);
                            }
                        });
                    });

                });
                list_list_oem.push(list_oem);
            });

            let list_list_no = [];
            for(let i=0; i<list_list_oem.length; i++) {
                let list_no = [];
                for(let j=0; j<list_list_oem.length; j++) {
                    for(let k=0; k<list_list_oem[i].length; k++) {
                        if(i!=j && list_list_oem[j].includes(list_list_oem[i][k])) {
                            list_no.push(j + 1);
                            break;
                        }
                    }
                }
                list_list_no.push(list_no);
            }

            for(let i=0; i<list_tbody.length; i++) {
                let background_color = i % 2 == 0 ? '#e0e0e0' : '#f0f0f0';
                let content = `
                    <hr style="margin: 0; padding: 0;">
                    <div style="background-color: ${background_color}">
                        <span style="display: inline-block; width: 100px; padding: 0 0 0 5px; font-size: 18px; color: #2334fe;">
                            No: ${i + 1}
                        </span>
                        <span style="display: inline-block; width: 310px; padding: 0 0 0 50px;">
                            <span onclick="copy_text(this)" style="background-color: #f8df65; display: inline-block; max-width: 300px; font-size: 14px; overflow: auto; cursor: pointer;">
                                ${list_list_oem[i].join(';')}
                            </span>
                        </span>
                        <span style="display: inline-block; width: 280px; padding: 0 0 0 5px;">
                            <span style="background-color: #dec1af; display: inline-block; max-width: 250; font-size: 16px">
                                ${list_list_no[i].join(';')}
                            </span>
                        </span>
                    </div>
                `;
                list_tbody[i].insertAdjacentHTML("beforebegin", content);
                list_tbody[i].setAttribute('id', list_tbody[i].getAttribute('id').replace(/listingcontainer\[/, 'listingcontainer_fuck_['));
            }
        });
    }

    function observe() {
        let observer = new MutationObserver(() => {
            get_oem();
        });

        observer.observe(document.querySelector('title'), {
            characterData: true,
            childList: true
        });
    }

    get_oem();
    observe();
})();