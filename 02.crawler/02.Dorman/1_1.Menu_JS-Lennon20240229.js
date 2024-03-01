let list_no = ["1","2","3","4"];
let list_url = ["https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&parttype=Fuel%2520Filler%2520Neck&start=0&num=100","https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&parttype=Fuel%2520Filler%2520Neck&start=100&num=100","https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&parttype=Fuel%2520Filler%2520Neck&start=200&num=100","https://www.dormanproducts.com/gsearch.aspx?type=keyword&origin=keyword&parttype=Fuel%2520Filler%2520Neck&start=300&num=100"];
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