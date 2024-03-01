let list_no = ["24"];
let list_url = ["https://www.ebay.com/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=zamo-zuan&store_cat=0&store_name=zamozuan&_oac=1&_nkw=motor+mount&_ul=US&_stpos=91710&_sop=16&_ipg=240&orig_cvip=true&_pgn=24"];
console.log('总数量：' + String(list_url.length));

for(let i=0; i<list_url.length; i++) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', list_url[i], true);
    xhr.onload = function() {
        if(xhr.status == 200 && xhr.readyState == 4) {
            let blob_data = new Blob([xhr.response], {type: 'text/plain'});
            let blob_url = URL.createObjectURL(blob_data);
            let blob_a = document.createElement('a');
            blob_a.href = blob_url;
            blob_a.download = list_no[i] + '.txt';
            blob_a.click();
            URL.revokeObjectURL(blob_url);
            console.log(list_no[i]);
        }
    };
    xhr.send();
}