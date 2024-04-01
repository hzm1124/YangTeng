let dict_url = {"1": "https://www.autoteiledirekt.de/skf-1363314.html", "2": "https://www.autoteiledirekt.de/skf-1362409.html", "3": "https://www.autoteiledirekt.de/skf-1362413.html", "4": "https://www.autoteiledirekt.de/skf-1362925.html", "5": "https://www.autoteiledirekt.de/skf-16143.html", "6": "https://www.autoteiledirekt.de/skf-1362932.html", "7": "https://www.autoteiledirekt.de/skf-15809.html", "8": "https://www.autoteiledirekt.de/skf-16144.html", "9": "https://www.autoteiledirekt.de/skf-15842.html", "10": "https://www.autoteiledirekt.de/skf-1362479.html", "11": "https://www.autoteiledirekt.de/skf-1362802.html", "12": "https://www.autoteiledirekt.de/skf-1362803.html", "13": "https://www.autoteiledirekt.de/skf-1362842.html", "14": "https://www.autoteiledirekt.de/skf-1362923.html", "15": "https://www.autoteiledirekt.de/skf-15777.html", "16": "https://www.autoteiledirekt.de/skf-15808.html", "17": "https://www.autoteiledirekt.de/skf-1363252.html", "18": "https://www.autoteiledirekt.de/skf-15715.html", "19": "https://www.autoteiledirekt.de/skf-1362635.html", "20": "https://www.autoteiledirekt.de/skf-1362368.html", "21": "https://www.autoteiledirekt.de/skf-1362838.html", "22": "https://www.autoteiledirekt.de/skf-1362913.html", "23": "https://www.autoteiledirekt.de/skf-16141.html", "24": "https://www.autoteiledirekt.de/skf-7275104.html", "25": "https://www.autoteiledirekt.de/skf-16142.html", "26": "https://www.autoteiledirekt.de/skf-1362666.html", "27": "https://www.autoteiledirekt.de/skf-15778.html", "28": "https://www.autoteiledirekt.de/skf-16145.html", "29": "https://www.autoteiledirekt.de/skf-15811.html", "30": "https://www.autoteiledirekt.de/skf-1362755.html", "31": "https://www.autoteiledirekt.de/skf-1362323.html", "32": "https://www.autoteiledirekt.de/skf-1362644.html", "33": "https://www.autoteiledirekt.de/skf-15716.html", "34": "https://www.autoteiledirekt.de/skf-1362433.html", "35": "https://www.autoteiledirekt.de/skf-15750.html", "36": "https://www.autoteiledirekt.de/skf-1362921.html", "37": "https://www.autoteiledirekt.de/skf-1362570.html", "38": "https://www.autoteiledirekt.de/skf-1362480.html", "39": "https://www.autoteiledirekt.de/skf-15779.html", "40": "https://www.autoteiledirekt.de/skf-16160.html", "41": "https://www.autoteiledirekt.de/skf-1362271.html", "42": "https://www.autoteiledirekt.de/skf-1362383.html", "43": "https://www.autoteiledirekt.de/skf-1363312.html", "44": "https://www.autoteiledirekt.de/skf-1362345.html", "45": "https://www.autoteiledirekt.de/skf-1362261.html"};
let list_key = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"];

console.log('总数量：' + String(list_key.length));

for(let i=0; i<list_key.length; i++) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', dict_url[list_key[i]], false);
    xhr.onload = function() {
        if(xhr.status == 200 && xhr.readyState == 4) {
            let blob_data = new Blob([xhr.response], {type: 'text/plain'});
            let blob_url = URL.createObjectURL(blob_data);
            let blob_a = document.createElement('a');
            blob_a.href = blob_url;
            blob_a.download = list_key[i] + '.txt';
            blob_a.click();
            URL.revokeObjectURL(blob_url);
        }
        console.log(xhr.readyState);
    };
    xhr.send();
}