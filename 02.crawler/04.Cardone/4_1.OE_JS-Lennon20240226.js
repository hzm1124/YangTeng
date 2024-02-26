let list_no = ["1392"];
let list_url = ["https://productdesk-api.cellacore.net/legacy/cardone/FinishedGood/?q=productDeskItemNumber.keyword:85-458&size=1&useCache=true&auth=mXWIhUuYvk3hklMcdwLi4lwVd3s6VASw"];
console.log('总数量：' + String(list_no.length));

for(let i=0; i<list_no.length; i++) {
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