let dict_url = {"44": "https://www.autoteiledirekt.de/ajax/product/related/vehicles?articleId=1363314&makerId=117&modelId=1533", "49": "https://www.autoteiledirekt.de/ajax/product/related/vehicles?articleId=1363314&makerId=117&modelId=1523", "56": "https://www.autoteiledirekt.de/ajax/product/related/vehicles?articleId=1362409&makerId=25&modelId=1175", "58": "https://www.autoteiledirekt.de/ajax/product/related/vehicles?articleId=1362409&makerId=25&modelId=4054", "59": "https://www.autoteiledirekt.de/ajax/product/related/vehicles?articleId=1362409&makerId=25&modelId=3546"};
let list_key = ["44", "49", "56", "58", "59"];

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